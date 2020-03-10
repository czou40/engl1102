import React from 'react';
import ReactDOM from 'react-dom';
import "./foldable.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faChevronUp, faExpand, faFlushed} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css'

class Foldable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanding : false
        }
    }
    changeShowState = (event) => {
        this.setState(prevState => ({
            // eslint-disable-next-line no-unused-expressions
            expanding : !prevState.expanding
        }));
    };
    render() {
        var icon = this.state.expanding ? faChevronUp : faChevronDown;
        var p = "";
        if (this.state.expanding) {
            var strings = this.props.content.split("\n");
            var arr = [];
            for (let i = 0; i < strings.length; i++) {
                arr.push(<p>{strings[i]}</p>);
            }
        }
        return (
            <div className = "foldable" data-aos="zoom-in-left">
                <div className="operator">
                    <h2><FontAwesomeIcon icon={this.props.icon} spin/>{" " +  this.props.title}</h2>
                    <h2 className="expand"><FontAwesomeIcon icon={icon} onClick={this.changeShowState}/></h2>
                </div>
                {arr}
            </div>
        );
    }
}

export default Foldable