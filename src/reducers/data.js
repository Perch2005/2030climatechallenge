const data = (state,action) =>{
    if(state === undefined){
        return {
            datas:[],
            loading:true,
            error:null
        }
    }
    console.log(state.data.datas);
    switch(action.type){
        case 'FETCH_DATA_REQUEST':
            return{
                datas:[],
                loading:true,
                error:null
            }
            case 'FETCH_DATA_SUCCESS':
                return{
                    datas:[...state.data.datas,action.payload],
                    loading:false,
                    error:null
                }
        case 'FETCH_DATA_FAILURE':
                return{
                    datas:[],
                    loading:false,
                    error:action.payload
                    }
                    default:
                        return state.data
    }
}

export default data