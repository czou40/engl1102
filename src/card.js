import React from 'react';
import ReactDOM from 'react-dom';
import "./card.css"

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="card">
                <div className="img" style={{backgroundImage : "url(" + this.props.path + ")"}}></div>
                <div className="description-box">
                    <h4 className="more">View Detail</h4>
                    <div className="info">
                        <h2>{this.props.title}</h2>
                        <p>{this.props.description}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;