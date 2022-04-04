import React from "react";
import "./Card.css";

function Card(props) {
    const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    };
    return (
        <div className="card mb-4 box-shadow">
            {props.src && (<img className="card-img-top" src={props.src} alt={props.alt} />)}
            <div className="card-body">
                <h5>{props.title}</h5>
                <p className="card-text">{props.details}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                        {props.live && (<a target="_blank" rel="noreferrer" href={props.live}>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                Assistir Lançamento
                            </button>
                        </a>)}
                    </div>
                    <small className="text-muted">{props.date ? new Date(props.date).toLocaleDateString([], options) : ''}</small>
                </div>
            </div>
        </div>
    );
}

export default Card;
