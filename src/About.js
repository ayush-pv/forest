import React from 'react';
import './About.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function About() {

    return (
    <div className = "about_main">
        <div className="about">
            <div className ="about_left" >
                <div className ="about_left_head">
                    <h1 className='about_selectone'><ArrowForwardIosIcon/>About</h1>
                </div>
                <div className ="about_left_body">
                    <p>We all know that large amount of Deforestation has taken place since the the time our Earth has come to evolvement</p>
                    <p><strong>Forest Search</strong> is an online platform that is meant to concentrate on the <b>rainforestment of plants or trees.</b>
                    It provides details about the
                    <strong> tree cover loss</strong> that has taken place throughtout the <strong>Indian States</strong>  in the past years. Also, 
                    it predicts which plantations having <strong>high levels of Oxygen</strong> can be grown in those states. </p>
                    <h2>
                        Why are Rainforests important?
                    </h2>
                    <p>
                        <b>Rainforests</b> play a practical role in keeping our <b>planet healthy</b>.By absorbing carbon dioxide 
                        and <b>releasing the oxygen</b> on which we depend on for our survival. The absorption of this CO2 also helps <b>to stabilize the Earth's climate.</b>
                        Rainforests also help to maintain the world's water cycle by adding water to the atmosphere through the process of transpiration which creates clouds. 
                    </p>
                </div>
            </div>

            <div className = "about_right">
            <div className = "about_deforestation"> 
                <h2 className = "about_heading">Deforestation</h2>
                <p>
                Deforestation refers to the cutting, clearing, and removal of rainforest or related ecosystems into 
                less bio-diverse ecosystems such as pasture, cropland, or plantations. If the current rate of deforestation continues, 
                the world's rain forests will vanish within 100 years- causing unknown effects on global climate and eliminating the majority of plant and animal species on the planet.
                </p>
                <h3>It may lead to:</h3>
                <p>1. Loss of Habitat</p>
                <p>2. Soil Erosion and Flooding</p>
                <p>3. Destruction of Homelands</p>
                <a className = "about_link" href = 'https://www.nationalgeographic.org/encyclopedia/deforestation/' target = "_blank">Click to know more</a>
            </div>
            <div className = "about_deforestation"> 
                <h2>Afforestation</h2>
                <p>
                Afforestation involves planting trees in areas that haven't recently had any tree cover, 
                in order to create a forest. The type of land planted could include areas that have turned 
                into desert, places that have long been used for grazing, disused agricultural fields, or industrial areas.
                </p>
                <h3>It leads to:</h3><ul>
                <li>Provide a habitat to local wildlife</li>
                <li>Supports soil health</li>
                <li>Reduces atmospheric CO2</li>
                </ul>
                <a className = "about_link" href = 'https://www.environmentbuddy.com/plants-and-trees/major-causes-and-effects-of-afforestation/#:~:text=Afforestation%20absorbs%20the%20carbon%20emissions,and%20rich%20biodiversity%20of%20species.' target = "_blank">Click to know more</a>
            </div>
            </div>
        </div>
    </div>
      );
    }
    
    export default About;
