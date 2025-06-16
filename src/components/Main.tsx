import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D5603AQHBG4lQNeAxtQ/profile-displayphoto-shrink_800_800/B56ZaFOv97HgAc-/0/1745991958990?e=1751500800&v=beta&t=anpusEopodV_XShwHsmDsFhp61gN7E_H6fl6Tc_VU_M" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/murataltindag" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/murat-altindag/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Murat Altindag</h1>
          <p>Full Stack Engineer and Game Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/murataltindag" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/murat-altindag/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;