import React from 'react'
import "./Card.css"

function Card({image, title, date, description}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={image} alt="" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-date">
                    <p>{date}</p>
                </div>
                <div className="card-description">
                    <p>{description}</p>
                </div>   
            </div>
                <div className="btn-card">
                    <button>
                        <a href="/">Buy Tickets</a>
                    </button>
                </div>
        </div>
)
}

export default Card