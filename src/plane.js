import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./card";
import "./plane.css"
import AOS from 'aos';
import 'aos/dist/aos.css'

class Plane extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displaying : 0,
            numberOfElements : props.images.length,
            images : props.images,
            currentImage : props.images[0]
        };
    }

    goToPrevious = (event) => {
        const newDisplaying = (this.state.displaying - 1 + this.state.numberOfElements) % this.state.numberOfElements;
        this.setState({displaying : newDisplaying})
    };

    goToNext = (event) => {
        const newDisplaying = (this.state.displaying + 1) % this.state.numberOfElements;
        this.setState({displaying : newDisplaying})
    };

    render() {
        var file = this.state.images[this.state.displaying].file;
        var description = this.state.images[this.state.displaying].description;
        var title = this.state.images[this.state.displaying].file;
        return (
            <div className="plane">
                <Card path={file}  title={title} description={description} />
                <div class="controllers">
                    <div class="prev-button-wrapper">
                        <div class="prev-button" onClick={this.goToPrevious}></div>
                    </div>
                    <div className="next-button-wrapper">
                        <div className="next-button" onClick={this.goToNext}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Plane;