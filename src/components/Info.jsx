import React from 'react'
import './Info.css';
import Data from './Data';
import { changeValue, selectData, selectValue } from '../features/data/dataSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function Info() {
    const data = useSelector(selectData);
    const value = useSelector(selectValue);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        if (e.target.value > 5) {
            e.target.value = 0
        }
        if (e.target.value < 1) {
            e.target.value = 1
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(changeValue(e.target.value))
    }

  return (
    <div className='inputBar' onChange={handleSubmit}>
        <form className='inputForm'>
            <input type="number" name="num" onChange={handleChange} className="inputInfo" />
        </form>
        <ul className='items'>
            {data.slice(`-`, value).map((el, index) => <Data key={index} props = {el}/>)}
        </ul>
    </div>
  )
}
