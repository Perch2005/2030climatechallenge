const slideShow = (state,action) =>{
    if(state === undefined){
        return {
            slides:[],
            loading:true,
            error:null
        }
    }
    switch(action.type){
        case 'FETCH_SLIDES_REQUEST':
            return{
                slides:[],
                loading:true,
                error:null
            }
            case 'FETCH_SLIDES_SUCCESS':
                return{
                    slides:action.payload,
                    loading:false,
                    error:null
                }
        case 'FETCH_SLIDES_FAILURE':
                return{
                    slides:[],
                    loading:false,
                    error:action.payload
                    }
                    default:
                        return state.slideShow
    }
}

export default slideShow