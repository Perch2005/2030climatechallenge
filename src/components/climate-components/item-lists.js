import {withData,withClimateService} from '../hoc'
// import ClimateService from '../../services/climate-service'
import ItemList from '../atoms/item-list'

// const climateService = new ClimateService()

// const {getQuestionsAndAnswers} = climateService

const mapItemsMethodsToProps = (climateService) => {
return {
    getData: climateService.getQuestionsAndAnswers
}
}

const QuestionsAndAnswersList = withClimateService()(
    withData(ItemList,'FETCH_ITEMS',({questionsAndAnswers}) => questionsAndAnswers),
    mapItemsMethodsToProps)


export {
    QuestionsAndAnswersList
}