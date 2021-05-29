import React,{useEffect} from 'react'
import './item-list.css'
import {onItemSelected} from '../../../actions/index'
import {useDispatch} from 'react-redux'

const ItemList = (props) =>{
    const {renderItem,datas} = props
console.log(props,'dddddddddddd');

const dispatch = useDispatch()
    return(
        <div className = "item-list">
            <div className = "item-list-wraper">
                <ul className = "item-list-wraper-ul">
                    {
                        datas.items.map((item) => 
                        {
                            const lable = renderItem(item)
                            return(
                            <li onClick = {() => dispatch(onItemSelected(item.id,datas))} key = {item.id}>
                            {lable}
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}
export default ItemList

