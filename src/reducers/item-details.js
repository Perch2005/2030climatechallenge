
const itemDetails = (state,action) => {
    if(state === undefined){
        return {
            details:[]
        }
    }
      switch(action.type){
        case 'ON_ITEM_SELECTED':
const answerId = action.payload[0]
const answer = action.payload[1].items.find((item) => item.id == answerId)
const newItem = {
    id:answer.id,
    ...answer
}
            return{
...state,
details:[newItem]
            }
            default:
                return state.itemDetails
      }
}

export default itemDetails