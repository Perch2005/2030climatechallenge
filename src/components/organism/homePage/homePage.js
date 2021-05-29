import React from 'react'
import './homePage.css'
import FactCardsContainer from '../../moleculs/fact-cards'
import Header from '../../moleculs/header'  
import LearnMoreCard from '../../moleculs/learn-more-card'
import AboutName from '../../moleculs/about-name'
import SlideShow from '../../moleculs/slide-show'
import QuestionsAndAnswers from '../../moleculs/questions-and-answers'
import Footer from '../../moleculs/footer'

const HomePage = () =>{
    return(
        <div className = "home-page">
            <div  className = "home-page-wraper">
            <div  className = "home-page-wraper-first-item">
            <Header/>
            <LearnMoreCard/>
            <AboutName/>
            <FactCardsContainer/>
            <div className = "home-page-wraper-second-item">
            <SlideShow/>
            <div className = "home-page-wraper-second-item-back"></div>
            </div>
            <div className = "home-page-wraper-third-item">
                <QuestionsAndAnswers/>
                <LearnMoreCard/>
                <Footer/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default HomePage