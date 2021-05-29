import React from 'react'
import './learn-more-card.css'
import Menu from '../../atoms/menu'

const LearnMoreCard = () =>{
    return(
        <div className = "learn-more-card">
            <div className = "learn-more-card-wraper">
<div className = "learn-more-card-wraper-text">
    <h1>Are you ready to be part of the climate solution?</h1>
    <p>Join us in reducing greenhouse gas emissions in the buildings, industry, and/or transportation sectors in the U.S. by 2030. Submissions have closed.</p>
</div>
<div className = "learn-more-card-wraper-button">
    <button>Learn More</button>
</div>
            </div>
        <Menu/>
        </div>
    )
}

export default LearnMoreCard