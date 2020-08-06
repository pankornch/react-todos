import React from 'react';
import "../assets/index.css"
import arrow from '../assets/arrow.svg'
export default ({ sorted }) => {
    const [state, setState] = React.useState({
        time: false, done: false
    });

    const onSort = (type) => {
        setState(prev => {
            return { ...prev, ...{ [type]: prev[type] ? false : true } }
        })
        sorted({ type, sorted: state[type] })
    }
    return (
        <div className="sort-box">
            <p className="topic">Sort by</p>
            {/* <p>{state.time ? "Y" : "N"}</p>
            <p>{state.done ? "Y" : "N"}</p> */}
            <div onClick={() => onSort("time")} className="flex pointer">
                <p>Time</p>
                <img src={arrow} alt="" className={state.time ? "up" : ""} />
            </div>
            <div onClick={() => onSort("completed")} className="flex pointer">
                <p>Done</p>
                <img src={arrow} alt="" className={state.done ? "up" : ""} />
            </div>
        </div>)
}