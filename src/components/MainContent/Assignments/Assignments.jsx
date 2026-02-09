import React, { useEffect, useState } from 'react'
import './Assignments.css';
import { FrostGlassBox } from '../../FrostGlassBox/FrostGlassBox';
import { LanguageButton } from '../../Button/LanguageButton/LanguageButton';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const Assignments = () => {
  const [selectedLanguageId, setSelectedLanguageId] = useState();
  const [selectedAssignments, setSelectedAssignments] = useState([]);
  const languages = [
    {
      name: "Html/Css",
      id: 0
    },
    {
      name: "Javascript",
      id: 1
    },
    {
      name: "Java",
      id: 2
    },
    {
      name: "React",
      id: 3
    }
  ];

  const allLanguageAssignments = [
    [
      {
        id: "01",
        name: "Vani Landing Page Recreation",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/HTML_PROJECT_001/html/index.html"
      },
      {
        id: "02",
        name: "Warehouse Management Static Pages",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/Warehouse%20Management/dasboard/dashboard.html"
      },
      {
        id: "03",
        name: "Transition Assignment",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/assignment_014/hover.html",
      },
      {
        id: "04",
        name: "Cloud Animation Assignment",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/assignment_013/cloud/cloud_animation.html"
      },
      {
        id: "05",
        name: "Bounce Ball Animation",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/assignment_013/bounce%20ball/ball.html"
      },
      {
        id: "06",
        name: "Dine Page",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/assignment_011/booking.html"
      },
      {
        id: "07",
        name: "Personal Details Form",
        link: "https://ponyogim-k9pp120b-8443.zcodecorp.in/assignment_010/Info.html"
      }
    ],
    [
      {
        id: "01",
        name: "Quiz App",
        link: "https://github.com/Thanos1025/QuizApp"
      },
      {
        id: "02",
        name: "Character Count",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_006/counter.html",
      },
      {
        id: "03",
        name: "For_in Loop Assignment",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_005/for_in.html"
      },
      {
        id: "04",
        name: "While Loop Assignment",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_004/while.html"
      },
      {
        id: "05",
        name: "Console For Loop Assignment",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_003/for_loop.html"
      },
      {
        id: "06",
        name: "Console Pattern Assignment",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_002/pattern.html"
      },
      {
        id: "07",
        name: "Console business Logic Assignment",
        link: "https://ponyogim-sa1yjzte-8443.zcodecorp.in/Js_assignment_001/function.html"
      }
    ], [
      {
        id: "01",
        name: "ClassInspector",
        link: "https://github.com/Thanos1025/ClassInspector"
      },
      {
        id: "02",
        name: "Stream Assignment",
        link: "https://github.com/Thanos1025/Stream-Assignment"
      },
      {
        id: "03",
        name: "System Utility Tool",
        link: "https://github.com/Thanos1025/SystemUtilityTool"
      },
      {
        id: "04",
        name: "CabBookingSystem",
        link: "https://github.com/Thanos1025/CabBookingSystem"
      },
      {
        id: "05",
        name: "Ship-Hunt-TicTacToe",
        link: "https://github.com/Thanos1025/Ship-Hunt-TicTacToe"
      },
      {
        id: "06",
        name: "UserAuthentication",
        link: "https://github.com/Thanos1025/UserAuthentication"
      },
      {
        id: "07",
        name: "FriendShip Management",
        link: "https://github.com/Thanos1025/FriendsManagement"
      }
    ],
    [
      {
        id: "01",
        name: "Markdown Editor",
        link: "https://github.com/Thanos1025/MarkdownEditor",
      },
      {
        id: "02",
        name: "Country API",
        link: "https://github.com/Thanos1025/CountryAPI"
      },
      {
        id: "03",
        name: "Business Card",
        link: "https://github.com/Thanos1025/BusinessCard"
      },
      {
        id: "04",
        name: "To Do List",
        link: "https://github.com/Thanos1025/TodoList"
      },
      {
        id: "05",
        name: "Traffic Light",
        link: "https://github.com/Thanos1025/TrafficLight"
      },
      {
        id: "06",
        name: "Calculator",
        link: "https://github.com/Thanos1025/Calculator"
      },
      {
        id: "07",
        name: "Face API",
        link: "https://github.com/Thanos1025/FaceAPI"
      }
    ]
  ]

  useEffect(() => {
    setSelectedLanguageId(3);
  }, [])

  useEffect(() => {
    setSelectedAssignments(allLanguageAssignments[selectedLanguageId])
  }, [selectedLanguageId])
  return (
    <div className='assignments'>
      <div className='assignments-content'>
        <SecondaryButton>Works</SecondaryButton>
        <h1>Assignments</h1>
        <p>Academic projects and practical implementations across multiple domains</p>
      </div>
      <div className='language-assignment-wrapper'>
        <div className='assignments-language-buttons-wrapper'>
          {
            languages.map((language) => {
              return (<LanguageButton name={language.name} id={language.id} selectedLanguageId={selectedLanguageId} setSelectedLanguageId={setSelectedLanguageId}></LanguageButton>)
            })
          }
        </div>
        <ul className='assignments-list'>
          {selectedAssignments ?
            selectedAssignments.map((assignment) => {
              return (
                <button onClick={() => window.open(assignment.link, "_blank")}>
                  <FrostGlassBox className="assignment-button"><span >{assignment.id}</span>{assignment.name}</FrostGlassBox>
                </button>
              )
            })
            : <></>
          }
        </ul>
      </div>
    </div>
  )
}
