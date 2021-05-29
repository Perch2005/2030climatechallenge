const factCards = (state,action) => {

    if(state === undefined){
        return{
            facts:[],
            loading:true,
            error:null
        }
    }
    
        switch (action.type){
            case 'FETCH_FACTS_REQUEST':
                return{
                    facts:[],
                    loading:true,
                    error:null
                }
            case 'FETCH_FACTS_SUCCESS':
                return{ 
                    facts:action.payload,
                    loading:false,
                    error:null
                }
                case 'FETCH_FACTS_FAILURE':
                    return{
                        facts:[],
                        loading:false,
                        error:action.payload
                    }
                default:
                return state.factCards
        }
    }

    export default factCards