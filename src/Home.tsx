import React from "react";
import profile from "./assets/profile.jpeg";
const Home = () => {
  return (
    <div className="flex flex-col gap-12 py-4">
      <div className="font-bold font-[Garamond] w-full text-center text-4xl">
        Warm Hugs to You All!
      </div>

      <div className="flex flex-col items-center justify-center overflow-y-scroll gap-6 ">
        <img className="w-[384px] rounded-full" src={profile}></img>
        <div className="animation-div">
          <p className="moving-p">
            W&#128008;E&#128008;L&#128008;C&#128008;O&#128008;M&#128008;E
          </p>
        </div>
        <p className="   w-[512px] text-center">
          Hey everyone! My name is Chaehun Lim. I graduated from Washington
          University in St. Louis with a degree in Computer Science. My usual
          day starts with me waking up an hour before work. Then I head off to
          the office. After work, I try to cook, settle down on the couch and
          turn on the baseball game. After zoning out into oblivion for a few
          hours, I hit the gym and spend the rest of the night playing guitar.
          If you are into blues or jazz, or love bantering about your favorite
          pizza parlor, I would love to talk to you!
        </p>

        <div className="flex flex-col items-center justify-center ">
          <h2>Education</h2>
          <div>
            <div className="flex flex-row gap-2 ">
              <p className="w-[120px]">2022-2023</p>
              <p className="w-[400px]">
                Washington University Computer Science M.S.
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2015-2020</p>
              <p className="w-[400px]">
                Washington University Computer Science B.S.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <h2>Work Experiences</h2>
          <div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2024-Present</p>
              <p className="w-[400px]">
                St. Louis Cardinals Application Developer
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2023</p>
              <p className="w-[400px]">MoneyLion Software Developer Intern</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2023</p>
              <p className="w-[400px]">
                Washington University Graduate Researcher
              </p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2020-2022</p>
              <p className="w-[400px]">KATUSA Military Police RTO</p>
            </div>
            <div className="flex flex-row gap-2">
              <p className="w-[120px]">2019</p>
              <p className="w-[400px]">
                CSE439S Mobile Application Development TA
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center ">
          {" "}
          <h3>If you wanna know me deeper</h3>
          <a>resume</a>
          <h3>My Eletronic Letter Address</h3>
          <a>limch1996@gmail.com</a>
        </div>

        <div className="flex flex-row justify-center gap-4 ">
          <a href="https://github.com/limch1">github</a>
          <a href="https://github.com/limchwustl">linkedin</a>
          <a href="https://github.com/limchwustl">instagram</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
