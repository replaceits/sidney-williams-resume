
import React from 'react';
import {GoLocation} from 'react-icons/go';
import {FaPhoneAlt, FaHtml5, FaLess, FaJira, FaFigma, FaGithub, FaTrello} from 'react-icons/fa';
import {SiJavascript} from 'react-icons/si';
import {DiCss3, DiJqueryLogo} from 'react-icons/di';
import {CgTemplate} from 'react-icons/cg';

import './Resume.scss';

class Resume extends React.Component {
  render() {
    return (
      <div className="resume">
        <div className="resume-wrapper">

          <div className='title'>
            <div className='avatar-wrapper'><div className='avatar'></div></div>
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
                <li><FaLess />&nbsp;&nbsp;&nbsp;&nbsp;Jade</li>
                <li><CgTemplate />&nbsp;&nbsp;&nbsp;&nbsp;LESS</li>
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
              <h3>Work Experience</h3>

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar cllc'></div>
                  <div className='work-who-info'>
                    <h4>Clean Lines Lawn Care</h4>
                    <i>https://www.cleanlineslawncare.com/</i>
                  </div>
                </div>
                <h5 className='work-title'>Freelance Web Developer</h5>
                <p className='work-length'>Aug 2021 – Sep 2021 | 2 mos</p>
              </div>

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar osmosis'></div>
                  <div className='work-who-info'>
                    <h4>Osmosis - Knowledge Diffusion</h4>
                    <i>https://www.osmosis.org/</i>
                  </div>
                </div>

                
                
                <h5 className='work-title'>Full Stack Developer</h5>
                <p className='work-length'>Jan 2019 – Jun 2021 | 2 yrs 6 mos</p>
              
                <h5 className='work-title'>Frontend Developer</h5>
                <p className='work-length'>Mar 2018 – Jan 2019 | 11 mos</p>

                <h5 className='work-title'>Frontend Developer Intern</h5>
                <p className='work-length'>Jan 2018 – Mar 2018 | 3 mos</p>
              </div>

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar cllc'></div>
                  <div className='work-who-info'>
                    <h4>Clean Lines Lawn Care</h4>
                    <i>https://www.cleanlineslawncare.com/</i>
                  </div>
                </div>
                <h5 className='work-title'>Freelance Web Developer</h5>
                <p className='work-length'>Mar 2017 – Apr 2017 | 2 mos</p>
              </div>

              <h3>Education</h3>

              <div className='work'>
                <div className='work-who'>
                  <div className='work-avatar ecpi'></div>
                  <h4>ECPI University</h4>
                </div>
                <h5 className='work-title'>Computer Science</h5>
                <p className='work-length'>2014 – 2018 | 4 yrs, some college</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
