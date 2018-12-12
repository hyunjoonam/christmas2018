import React, { Component } from 'react';
import './MemoryCardBack.css';

class MemoryCardBack extends Component {
    render() {
        return(
            <div className="MemoryCard">
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

export default MemoryCardBack;