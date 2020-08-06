import React from 'react'
import "../assets/index.css"


export default ({ data, completed, deleteTodo }) => {

    return (
        <div>
            {
                data.length ? data.map(el => {
                    return (
                        <div key={el.id} className="list-item">
                            <div className="left">
                                <p onClick={() => completed(el.id)} className={el.completed ? "completed" : ""} >{el.title}</p>
                            </div>
                            <img onClick={() => deleteTodo(el.id)} className="right" src="https://image.flaticon.com/icons/svg/109/109602.svg" alt="delete" />
                        </div>
                    )
                })
                    : <p className="empty">. . .</p>
            }
        </div>
    );
}