import React, { Component } from 'react';
import './MemoryCard.css';



class MemoryCard extends Component {
    constructor() { 
        super();
        this.state = {
            isFlipped=false
        }
    };
    clickHandler() {
        this.setState({isFlipped:true});
    }  

    render() {
        return(
            <div className="MemoryCard" onClick={this.clickHandler}>
                <div className="MemoryCardInner">
                    <div className="MemoryCardBack">
                        <img src="https://images.emojiterra.com/google/android-pie/512px/1f436.png" />
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
        )
    }
}

export default MemoryCard;