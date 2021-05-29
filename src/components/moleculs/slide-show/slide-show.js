import React from 'react'
import './slide-show.css'
import GreenLine from '../../atoms/green-line' 
import {withData} from '../../hoc'
// import ClimateService from '../../../services/climate-service'

// const climateService = new ClimateService()

const SlideShow = () =>{
    return(
        <div className = "slide-show">
            <div className = "slide-show-wraper"> 
                <div className = "slide-show-wraper-description">
                    <div className = "slide-show-wraper-description-green-line">
                    <GreenLine/>
                    </div>
<h1>How to Participate</h1>
<p>Learn more about how to participate in the 2030 Climate Challenge.</p>
                </div>
                <div className = "slide-show-wraper-low-items">
                    <div className = "slide-show-wraper-low-items-left">
                        <div className = "slide-show-wraper-low-items-left-index"><p>02</p></div>
                        <div className = "slide-show-wraper-low-items-left-length"><p>/ 05</p></div>
                    </div>
                    <div className = "slide-show-wraper-low-items-right">
                        <div className = "slide-show-wraper-low-items-right-buttons">
                            <button className = "slide-show-wraper-low-items-right-buttons-prev">PREV</button>
                            <button className = "slide-show-wraper-low-items-right-buttons-next">NEXT</button>
                        </div>
                        <div className = "slide-show-wraper-low-items-right-registr-block">
                        <div className = "slide-show-wraper-low-items-right-registr-block-wraper">
                            <div className = "slide-show-wraper-low-items-right-registr-block-wraper-text"> 
                                <p className = "slide-show-wraper-low-items-right-registr-block-wraper-text-date" >July 23, 2020</p>
                                <h1>Registration</h1>
                                <p className = "slide-show-wraper-low-items-right-registr-block-wraper-text-info">After completing the Organizational Readiness Tool, register for the challenge. Registration must be completed no later than Thursday, July 23, 2020, at 5:00 p.m. Pacific Time.</p>
                            </div>
                            <div className = "slide-show-wraper-low-items-right-registr-block-wraper-button">
                                <button>Register Now</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
// const {getSlideShows} = climateService

export default SlideShow
// withData(SlideShow,getSlideShows,'FETCH_SLIDES',({slides}) => slides)