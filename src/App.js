import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import HalfSection from "./Components/HalfSection.js";
import ProjectEntry from "./Components/ProjectEntry.js"
import front from './images/front.jpeg'
import headshot from './images/headshot.jpeg'
import meaturbeat from './images/meaturbeat.png'
import Fade from 'react-reveal/Fade';
import stock from './images/stock';
import linkedin from './images/linkedin.png'
import email from './images/email.jpg'

let blurb = <div id ='blurb'><p>Hi, I’m Ryan. I’m a Programmer and Web Developer seeking employment. I have experience with a variety of programming languages and software packages through my Computer Science undergraduate program, full-time internship, and personal projects. </p> <ul> <li>Experience programming in the following languages: C, C++, Java, Python, HTML, JavaScript, React, PHP, Ruby, Elixir, Haskell, and Lua</li> <li>Experience with the following software packages: MS Office, Visio, Photoshop, Dreamweaver </li> <li>Experience creating and managing databases using PostgreSQL, MySQL, and MongoDB</li> </ul> <p>I also pride myself on my work ethic and have an eagerness to learn. Outside of work, I am an avid sailor and race at many regattas throughout the summer on a J105 sailboat. I am also passionate about ski racing and coach alpine ski racing programs during the winter. </p> </div>;
let content2 = <div><img src={front} className="front-picture" alt="Front Picture"/><Fade left><div className ='front_text_box'><div className='front_text'>Ryan Davis</div><div className='front_text_lower'>Programmer, Web Developer, Coach</div></div></Fade></div>;
let halfContent1 = <img src={headshot} id="headshot" alt="headshot"/>;
let content3 = <div><HalfSection body = {halfContent1} blue={false} id="halfSection1"></HalfSection> <HalfSection body = {blurb} blue={true} id="halfSection2"></HalfSection></div>;
let projectContent = <div id = 'projectContainer'><div className='sectionTitle'>Projects</div><div className='seperator'></div><ProjectEntry id = '1' image = {meaturbeat} title = "Meet Your Beat" link = 'http://ryandavis.tech/meeturbeat' description= "Created for Hack Western 6, this is a location based music sharing application using the Spotify API. Created using Javascript, HTMl, Python, and MySQL " /><div className= 'seperator'></div><ProjectEntry id = '2' link = 'https://github.com/EGoms/Stocks' image = {stock} title = "Stock Market Simulator" description= "Created as a class project, this app uses Stock APIs to fetch stock prices in real time and simulate trading. Written in C++." /><div className='seperator'></div></div>;
let contactPage = <div id = 'contactPage'><div className='sectionTitleWhite'>Contact Me</div><div className = 'text'>I would be excited to discuss any employment or project opportunities. Please contact me via Email or Linked-In using the links below!</div><div className= 'seperator'></div><div id = 'i'><a href="https://www.linkedin.com/in/ryan-davis-4039681a5/" target="_blank"><img src={linkedin} id="linkedin" alt="linkedin"/></a><a href="mailto:ryanwilliamdavis98@gmail.com"><img src={email} id="email" alt="email"/></a></div><div className='seperator2'></div></div>;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
       <Section
          body={content2}
          id="section1"
        /> 
        <Section
          body = {content3}
          id='section2'
        />
        <Section
        body = {projectContent}
        id = 'section3'
        blue = {true}
        />
        <Section
        body = {contactPage}
        id = 'section4'
        blue = {false}
        />
      </div>
    );
  }
}

export default App;
