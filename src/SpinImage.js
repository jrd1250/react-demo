import React, {Component} from "react";
import './App.css';

class SpinImage extends Component {
    render() {
        return (
            <img src={this.props.image} className='App-logo' alt='logo' />
        );
    }
}

export default SpinImage;
