import React from 'react'
import './questions-and-answers.css'
import {QuestionsAndAnswersList} from '../../climate-components'
import ItemDetails,{Record} from '../../atoms/item-details/item-details'
import GreenLine from '../../atoms/green-line' 
// import {withClimateService} from '../../hoc'
// import {useSelector,useDispatch} from 'react-redux'


const QuestionsAndAnswers = () =>{
  
 console.log('err');
    return(
        <div className = "questions-and-answers">
            <div className = "questions-and-answers-wraper">
                <div className = "questions-and-answers-wraper-text">
                <div className = "questions-and-answers-wraper-text-green-line"><GreenLine/></div>
                <div className = "questions-and-answers-wraper-text-h1"><h1>Questions & Answers</h1></div>
                <div className = "questions-and-answers-wraper-text-p"><p>Get answers to frequently asked questions. Don’t see your question answered? Email us at 
                    <a href = "mailto:questions@2030climatechallenge.org"> questions@2030climatechallenge.org</a>
                    </p></div>
            </div>
            </div>
            <div className = "questions-and-answers-wraper-list">
                <QuestionsAndAnswersList
                 renderItem = {({question}) => question}
                 />
                <ItemDetails detailName = {({itemDetails})=>itemDetails}>
                    <Record lable = "answer"/>
                    </ItemDetails>
            </div>
        </div>
    )
}

export default QuestionsAndAnswers