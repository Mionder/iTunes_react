import React, { Component } from 'react';
import './caption.css';
export default class Captions extends Component{
    render(){
        return(
            <div>
                <div className="nav__bar">
                    <li className="caption__img"></li>
                    <li className="caption__bar">Artist</li>
                    <li className="caption__bar">Track</li>
                    <li className="caption__bar">Collection</li>
                    <li className="caption__bar">Genre</li>
                    <li className="caption__plus"></li>
                </div>
            </div>
        )
    }
}