import React from 'react'
import './about-name.css'
import GreenLine from '../../atoms/green-line' 

const AboutName = () =>{
    return(
        <div className = "about-name">
            <div className = "about-name-green-line">
            <GreenLine/>
            </div>
            <div className = "about-name-wraper">
                <div className = "about-name-wraper-h1">
                    <h1>Why the 2030 Climate Challenge?</h1>
                </div>
                <div className = "about-name-wraper-p">
                    <p>Rising sea levels. Warming temperatures. Fiercer storms. Raging wildfires. We’re already feeling the effects of climate change on a global scale. Here in the United States, the buildings, industry, and transportation sectors produce more than half of greenhouse gas emissions that contribute to climate change. With the 2030 Climate Challenge, we are looking for proven, data-driven solutions ready to serve as a model for change for communities across the United States. If your non-profit organization is working to reduce greenhouse gases in the buildings, industry, or transportation sectors in the U.S. by 2030, we invite you to be part of the solution.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutName