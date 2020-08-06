import React from 'react'
import "../assets/index.css"


export default ({ data, completed, deleteTodo }) => {
    const list = data.length ? data.map(el => {
        return (
            <div key={el.id} className="list-item">
                <div onClick={() => completed(el.id)} className="left">
                    <p className={el.completed ? "completed" : ""} >{el.title}</p>
                    <p className={el.completed ? "completed" : ""} >{el.time.split("T")[0]}</p>
                </div>
                <img onClick={() => deleteTodo(el.id)} className="right" src="https://image.flaticon.com/icons/svg/109/109602.svg" alt="delete" />
            </div>
        )
    })
        : <p className="empty">. . .</p>

    return (
        <div className="overflow">
            {list}
        </div>
    );
}