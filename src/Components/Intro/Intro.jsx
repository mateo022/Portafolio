import { React } from "react";
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram  from '../../img/instagram.png';
import Vector1  from '../../img/Vector1.png';
import Vector2  from '../../img/Vector2.png';
import boy  from '../../img/boy.png';
import thumbup  from '../../img/thumbup.png';
import Crown  from '../../img/crown.png';
import glassesimoji  from '../../img/glassesimoji.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";


export const Intro = () => {
    return(
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hello! I am </span>
                    <span>Mateo Ceballos</span>
                    <span> Frontend Developer with great level 
                           of experience in web designing and development , 
                           creating high quality work
                    </span>
                </div>

                 <button className="button i-button">Hire me</button>
                 <div className="i-icons">
                    <a href=""><img src={Github} alt="" /></a>
                    <a href=""><img src={LinkedIn} alt="" /></a>
                    <a href=""><img src={Instagram} alt="" /></a>
                   
                 </div>    
            </div>
            <div className="i-right">
                 <img src={Vector1} alt="" />
                 <img src={Vector2} alt="" />
                 <img src={boy} alt="" />
                 <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
                 </div>
                 <div>
                 <FloatingDiv image={thumbup} txt1='Providing' txt2='the best design'/>
                 </div>
            </div>
        </div>

    )
}

export default Intro