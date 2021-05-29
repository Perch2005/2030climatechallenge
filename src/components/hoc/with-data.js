import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import ErrorIndicator from '../error-indicator'
import Spiner from '../spiner'
import {datasLoaded,datasError,datasRequested} from '../../actions/index'


const withData = (Veiw,type,dataName) => (props) =>{
    const data = useSelector(dataName)
    console.log(props);
    const {loading,error} = data
    const dispatch = useDispatch()
    useEffect(() => {
            dispatch(datasRequested(type))
            props.getData()
            .then((data) => dispatch(datasLoaded(data,type)))
            .catch((err) => dispatch(datasError(err,type)))
           
    },[])
   

if(loading){
return <Spiner/>
}
if(error){
    return <ErrorIndicator/>
}
console.log(data)
    return <Veiw datas = {data} {...props}/>
}

export default withData