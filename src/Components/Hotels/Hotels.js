import React, {Component} from "react";
import Hotel from './Hotel/Hotel';

class Hotels extends Component {
    render() {
        return (
            <div>
                <h2>Hotels</h2>
                <Hotel />
                <Hotel />
            </div>
        )
    }
}

export default Hotels;