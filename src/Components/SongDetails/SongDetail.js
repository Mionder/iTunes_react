import React, {Component} from 'react';
import './details.css';
export default class Song extends Component{
  render(){
    const {artist,track,collection,id,trackTime,trackCount,collectionPrice,trackPrice,bgcolor,previewUrl} = this.props;
    return(
            <div className={bgcolor ? "details__song" : "details__song__new"} >
                <div className="songname__block">
                        <p className="title">{artist} - {track}</p>
                        <i className="fas fa-music"></i>
                    </div>
                    <div className="rows">
                    <div className="rows__info">
                        <p className="info"><span>Collection: </span>{collection}</p>
                        <p className="info"><span>Track Count: </span>{trackCount}</p>
                        <p className="info"><span>Price: </span>{collectionPrice} USD</p>
                    </div>
                    <div className="rows__info">
                        <p className="info"><span>Track duration: </span>{trackTime} min</p>
                        <p className="info"><span>Track price: </span>{trackPrice} USD</p>
                        <audio controls src={previewUrl}></audio>
                    </div>
                </div>
             </div>
    )
  }
}