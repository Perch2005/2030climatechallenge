import factCards from './fact-cards'
import questionsAndAnswers from './item-list'
import itemDetails from './item-details'
import data from './data'
import slideShow from './slide-show'

const reducer = (state,action) =>{
    console.log(action.type);
   return{
       factCards:factCards(state,action),
       questionsAndAnswers:questionsAndAnswers(state,action),
       itemDetails:itemDetails(state,action),
       data:data(state,action),
       slideShow: slideShow(state,action)
   }
}

export default reducer