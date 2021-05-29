import React from 'react'
import './item-details.css'
import {useSelector} from 'react-redux'

const Record = ({detail,lable}) => {
    return (
        <p>{detail[lable]}</p>
    )
}
export {
    Record
}

const ItemDetails = ({children,detailName}) =>{
    const data = useSelector(detailName)
    const {details} = data

if(details === []){
    return <span>Select item</span>
}
    return(
        <div className = "item-details">
            <div className = "item-details-wraper">
                {details.map((detail) =>(
                <p key = {detail.id}>{
                    React.Children.map(children, (child) =>
                    {
                        return React.cloneElement(child, { detail })
                    }
                    )}</p>
                ))
}
            </div>
        </div>
    )
}

export default ItemDetails