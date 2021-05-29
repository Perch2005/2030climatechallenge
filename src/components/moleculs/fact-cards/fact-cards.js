import React,{useEffect} from 'react'
import './fact-cards.css'
// import {connect} from 'react-redux'
// import {fetchDatas} from '../../../actions/index'
// import {withClimateService} from '../../hoc'
// import {compose} from '../../../utils'
// import Spiner from '../../spiner'
// import  ErrorIndicator from '../../error-indicator'
import {withData,withClimateService} from '../../hoc'
// import ClimateService from '../../../services/climate-service'

// const climateService = new ClimateService()

const FactCardsContainer = ({datas}) => {
    console.log(datas,'dddd');
    return(
<div className = "fact-cards">
            <div className = "fact-cards-wraper">
            {
datas.facts.map((data) => (
    <div key = {data.id} className = "fact-cards-wraper-item">
        <div className = "fact-cards-wraper-item-h1"><h1>Fact {data.index + 1}</h1></div>
        <div className = "fact-cards-wraper-item-text">
        <div className = "fact-cards-wraper-item-p"><p>{data.fact}</p></div>
        <div className = "fact-cards-wraper-item-button"><button>Source</button></div>
        </div>
    </div>
))
            }
            </div>
        </div>
    )
}

// const FactCardsContainer = ({facts,loading,error,fetchDatas}) => {

//     useEffect(() =>{
// // const {datasLoaded} = props
// fetchDatas()
//     },[])
// if(loading){
//     return <Spiner/>
// }
// if(error){
//     return <ErrorIndicator/>
// }
//     return <FactCards datas = {facts}/>
// }



// const mapStateToProps = ({factCards:{facts,loading,error}}) =>{
// return{facts,loading,error}
// }
// const mapDispatchToProps = (dispatch,{climateService}) => {
//   return{
//    fetchDatas:fetchDatas(dispatch,climateService.getFacts,'FETCH_FACTS')
//   }
// }

// const {getFacts} = climateService

const mapFactsMethodsToProps = (climateService) => {
    return {
        getData: climateService.getFacts
    }
    }

export default withClimateService()(
    withData(FactCardsContainer,'FETCH_FACTS',({factCards}) => factCards),
    mapFactsMethodsToProps)