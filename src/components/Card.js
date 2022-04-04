import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
    async componentDidMount() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
        }
        this.intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                // const variant = window.google_optimize.get('uRHJ6tvTTvuFIxOnNMWzNw');
                const variant = 1;
                this.setState({ variant });
                clearInterval(this.intervalId);
            }
        }, 100);
    }

    render() {
        const options = {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            timeZoneName: "short",
        };
        console.log(this.state?.variant);
        return (
            <div className="card mb-4 box-shadow">
                {this.state?.variant ? (
                    <img className="card-img-top" src={this.props.src ? this.props.src : "placeholder_image.jpg"} alt={this.props.alt} />
                ) : this.props.src ? (
                    <img className="card-img-top" src={this.props.src} alt={this.props.alt} />
                ) : (
                    ""
                )}
                <div className="card-body">
                    <h5>{this.props.title}</h5>
                    <p className="card-text">{this.props.details}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            {this.props.live && (
                                <a target="_blank" rel="noreferrer" href={this.props.live}>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">
                                        Assistir Lançamento
                                    </button>
                                </a>
                            )}
                        </div>
                        <small className="text-muted">{this.props.date ? new Date(this.props.date).toLocaleDateString([], options) : ""}</small>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
