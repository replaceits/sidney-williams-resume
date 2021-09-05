
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {FaPhoneAlt, FaHtml5, FaLess, FaJira, FaFigma, FaGithub, FaTrello} from 'react-icons/fa';
import {SiJavascript, SiApachecordova} from 'react-icons/si';
import {DiCss3, DiJqueryLogo} from 'react-icons/di';
import {CgTemplate} from 'react-icons/cg';

import './Resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <div className="resume-wrapper">

          <div className='title'>
            <div className='avatar-wrapper'></div>
            <div className='contact'>
              <h1>Sidney Williams</h1>
              <h5>Full Stack Developer</h5>
              <div className='contact-info'>
                <h5><GoLocation /> Charlottesville, VA</h5>
                <h5><FaPhoneAlt /> (434) 989-4077</h5>
              </div>
            </div>
          </div>

          <div className='resume-container'>
            <div className='side-bar'>
              <h4>Skills</h4>

              <ul>
                <li><SiJavascript />&nbsp;&nbsp;&nbsp;&nbsp;Javascript</li>
                <li><FaHtml5 />&nbsp;&nbsp;&nbsp;&nbsp;HTML5</li>
                <li><DiCss3 />&nbsp;&nbsp;&nbsp;&nbsp;CSS3</li>
                <li><DiJqueryLogo />&nbsp;&nbsp;&nbsp;&nbsp;JQuery</li>
                <li><CgTemplate />&nbsp;&nbsp;&nbsp;&nbsp;Jade</li>
                <li><FaLess />&nbsp;&nbsp;&nbsp;&nbsp;LESS</li>
                <li><SiApachecordova />&nbsp;&nbsp;&nbsp;&nbsp;Cordova</li>
              </ul>

              <h4>Software</h4>

              <ul>
                <li><FaJira />&nbsp;&nbsp;&nbsp;&nbsp;Jira</li>
                <li><FaFigma />&nbsp;&nbsp;&nbsp;&nbsp;Figma</li>
                <li><FaGithub />&nbsp;&nbsp;&nbsp;&nbsp;Github</li>
                <li><FaTrello />&nbsp;&nbsp;&nbsp;&nbsp;Trello</li>
              </ul>
            </div>

            <div className='main-content'>
              <br />
              <br />
              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar cllc'></div>
                  <div className='work-who-info'>
                    <h5>Clean Lines Lawn Care</h5>
                    <i>https://www.cleanlineslawncare.com/</i>
                  </div>
                </div>
                <h6 className='work-title'>Freelance Web Developer</h6>
                <p className='work-length'>Aug 2021 – Sep 2021 | 2 mos</p>
                <p className='work-desc'>Complete design of site and ground-up development in React.</p>
              </div>

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar osmosis'></div>
                  <div className='work-who-info'>
                    <h5>Osmosis - Knowledge Diffusion</h5>
                    <i>https://www.osmosis.org/</i>
                  </div>
                </div>
                <h6 className='work-title'>Full Stack Developer</h6>
                <p className='work-length'>Jan 2019 – Jun 2021 | 2 yrs 6 mos</p>
                <p className='work-desc'>Development and maintence of backend APIs. Improvements to video processing and streaming technologies. Lead in vulnerability triaging and resolution. Mobile app development. Upgrades to payment processor.</p>
              
                <h6 className='work-title'>Frontend Developer</h6>
                <p className='work-length'>Mar 2018 – Jan 2019 | 11 mos</p>
                <p className='work-desc'>Implementation of new features. Maintenance of existing pages. Bug fixing. Ensuring mobile responsiveness.</p>

                <h6 className='work-title'>Frontend Developer Intern</h6>
                <p className='work-length'>Jan 2018 – Mar 2018 | 3 mos</p>
                <p className='work-desc'>Developed web pages based upon Figma design files.</p>
              </div>
{/* 
              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar cllc'></div>
                  <div className='work-who-info'>
                    <h5>Clean Lines Lawn Care</h5>
                    <i>https://www.cleanlineslawncare.com/</i>
                  </div>
                </div>
                <h6 className='work-title'>Freelance Web Developer</h6>
                <p className='work-length'>Mar 2017 – Apr 2017 | 2 mos</p>
              </div> */}

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar ecpi'></div>
                  <h5>ECPI University</h5>
                </div>
                <h6 className='work-title'>Computer Science</h6>
                <p className='work-length'>2014 – 2016 | 2 yrs, some college</p>
                <p className='work-desc'>Focus on database programming.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
