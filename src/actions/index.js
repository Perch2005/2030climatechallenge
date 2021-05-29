const datasLoaded = (newData,type) =>{
    return{
        type:`${type}_SUCCESS`,
        payload:newData
    }
}
const datasRequested = (type) =>{
    return{
        type:`${type}_REQUEST`
    }
}

const datasError = (err,type) =>{
    return{
        type:`${type}_FAILURE`,
        payload:err
    }
}

const onItemSelected = (id,datas) =>{
    return{
        type:'ON_ITEM_SELECTED',
        payload:[id,datas]
    }
}

const fetchDatas = (dispatch,getData,type) => () =>{
    dispatch(datasRequested(type))
    console.log(type);
    getData()
    .then((data) => dispatch(datasLoaded(data,type)))
    .catch((err) => dispatch(datasError(err,type)))
   }
export {
    fetchDatas,
    onItemSelected,
    datasLoaded,
    datasError,
    datasRequested
}