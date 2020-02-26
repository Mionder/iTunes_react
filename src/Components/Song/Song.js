import React, {Component} from 'react';

export default class Song extends Component{
  state = {
    icon: "fas fa-plus"
  }

  changeIcon = () =>{
    if(this.state.icon == "fas fa-plus")
    this.setState({
      icon: "fas fa-minus"
    })
    else this.setState({
      icon: "fas fa-plus"
    })
  }
  render(){
    const {pictureWork,artist,track,collection,genre,id,bgcolor} = this.props;
    return(
            <div className={bgcolor==1 ? "lol" : "bgnew"} onClick={this.changeIcon}>
              <img src={pictureWork} alt="no-pic" className="album__picture"/>
              <p className="label">{artist}</p>
              <p className="label">{track}</p>
              <p className="label">{collection}</p>
              <p className="label">{genre}</p>
              <p className="icon"><i className={this.state.icon}></i></p>
             </div>
    )
  }
}