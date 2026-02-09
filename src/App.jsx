import React, { createContext, useEffect, useRef, useState } from 'react'
import './App.css';
import { Header } from './components/Header/Header'
import { Main } from "./components/Main/Main"
import { NavBar } from './components/NavBar/NavBar'
import { aboutMe, assignment, code, codeFile, projects, skills } from './components/IconPaths/IconPaths';

export const ElementContext = createContext();
export const App = () => {
  const [selectedButtonId, setSelectedButtonId] = useState(0);
  const buttons = [
    {
      id: 0,
      name: "About me",
      scrollY: 0,
      icon: aboutMe
    },
    {
      id: 1,
      name: "Projects",
      scrollY: 880,
      icon: projects
    },
    {
      id: 2,
      name: "Skills",
      scrollY: 2400,
      icon: skills
    },
    {
      id: 3,
      name: "Assignments",
      scrollY: 3290,
      icon: assignment
    },
    {
      id: 4,
      name: "CodeWars",
      scrollY: 4200,
      icon: code
    }
  ]
  useEffect(() => {
    // guard in case ref isn't attached or button index is invalid
    if (!body.current) return;
    const target = buttons[selectedButtonId];
    if (!target) return;

    // Only perform the programmatic scroll when a selection was requested
    // via the wrapper `selectButton`. This avoids reacting to scroll-driven
    // updates (where `selectedButtonId` is set by `scrollHandler`).
    if (shouldScrollRef.current) {
      body.current.scrollTo({
        top: target.scrollY,
        behavior: "smooth",
      });
      // reset the flag immediately; the smooth scroll will continue
      shouldScrollRef.current = false;
    }
  }, [selectedButtonId])

  const body = useRef(null);
  const shouldScrollRef = useRef(false);

  // wrapper used by children to request a programmatic scroll when they
  // change the selected button (e.g. clicking the NavBar). This toggles
  // `shouldScrollRef` so the useEffect will perform the scroll.
  const selectButton = (id) => {
    shouldScrollRef.current = true;
    setSelectedButtonId(id);
  };
  const scrollHandler = () => {
    // guard in case ref isn't attached yet
    if (!body.current) return;

    const elementScrollTop = body.current.scrollTop;

    // Determine active button by comparing the current scrollTop against
    // each button's scrollY and the next button's scrollY (range logic).
    let activeButton = buttons[0];

    for (let i = 0; i < buttons.length; i++) {
      const start = buttons[i].scrollY;
      const end = i < buttons.length - 1 ? buttons[i + 1].scrollY : Infinity;
      if (elementScrollTop >= start && elementScrollTop < end) {
        activeButton = buttons[i];
        break;
      }
    }

    // Only update state when the active id actually changes to avoid
    // unnecessary re-renders and scroll jumps.
    setSelectedButtonId(prev => (prev === activeButton.id ? prev : activeButton.id));
  }

    return (
    <div ref={body} className='whole-container' onScroll={() => scrollHandler()}>
      <ElementContext.Provider value={{ body }}>
        {/* <img src="charizardx.jpg" className='app-bg' alt="Charizard" /> */}
        <Header></Header>
        <Main setSelectedButtonId={selectButton}></Main>
        <NavBar buttons={buttons} selectedButtonId={selectedButtonId} setSelectedButtonId={selectButton}></NavBar>
      </ElementContext.Provider>
    </div>
  )
}
