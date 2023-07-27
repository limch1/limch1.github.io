import { useState } from 'react'
import "./App.css"
import profile from "./assets/profile.jpeg"

function App() {
  

  return (
    <div className="root-container">
    

     <h1>&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047; super warm hug to you all&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;</h1>
     <div className="sub-container">

     <div className="mini-container">

      <img src={profile}></img>
      <p>How is it going everybody?<br></br>
          My name is Chae Hun Lim and I am a Backend Developer interested in RT Streaming and Cloud Services!<br></br>
          I am currently pursuing my Master's in Computer Science at Washington University in Saint Louis. <br></br>
          One day I hope to work at a cloud gaming company @ @
      </p>
      <h3>Personal Links</h3>
      <div className='personal-link-container'>

      <a href="https://github.com/limchwustl">github</a>
      <a href="https://github.com/limchwustl">linkedin</a>
      <a href="https://github.com/limchwustl">instagram</a>
      </div>
      
     </div>
     <div className="mini-container">
      <h2>Projects</h2>


      <div className="work-container">
      <a href="https://github.com/limchwustl/PachiQuiz">PachiQuiz!</a>
      <p>Pokemon quiz website made with React/Express/MongoDB</p>
      </div>
      <div className="work-container">
      <a href="https://github.com/limchwustl/Collagium">Collagium</a>
      <p>Portfolio/Common Space app for Fine Arts artists made with Swift/Firebase </p>
      </div>
      <div className="work-container">
      <a href="https://github.com/limchwustl/Collagium">Carbon Footprint</a>
      <p>Data metric website to visualize the impact of Co2 emission on global temperature. made with vanilla javascript/D3 </p>
      </div>
      
      <div className='animation-div'>
        <p className='moving-p'>W&#128008;E&#128008;L&#128008;C&#128008;O&#128008;M&#128008;E</p>

     
      </div>
     
      
     </div>
     <div className="mini-container">
      <h2>Work/Education History</h2>
      <p>2023-Present MoneyLion Software Developer Intern</p>
      <p>2023-Present Washington University Graduate Researcher</p>
      <p>2020-2022 KATUSA Military Police RTO</p>
      <p>2019 CSE439S Mobile Application Development TA</p>
      <p>2022-2023 Washington University Computer Science M.S.</p>
      <p>2015-2020 Washington University Computer Science B.S.</p>
      <h3>Perhaps you need my resume</h3>
      <a>resume</a>
      <h3>will YOU send me an electronic letter</h3>
      <a>limch1996@gmail.com</a>
     </div>
     </div>
     <h1>&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;&#10047;</h1>

    </div>
  )
}

export default App
