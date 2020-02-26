import React, { Component } from 'react';
import './songs.css';
import axios from 'axios';
import Accordion from '../Accordion/Accordion';
import cors from 'cors';

export default class Captions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            music: []
            
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    

      componentDidMount(){
          this.onGetSongs();
      }

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        console.log(this.state.value);
        event.preventDefault();
        
        axios.get("https://itunes.apple.com/search?term="+this.state.value).then((res)=>{
            
            this.setState({
                music: res.data.results
            });
            console.log(this.state.music);
        })
    }

    onGetSongs = () =>{
        axios.get("https://itunes.apple.com/search?term=Beatles", cors()).then((responce)=>{
            this.setState({
                music: responce.data.results
            });
        })
    }
    
      render() {
          const {music} = this.state;
        return (
            
            <div className="container">
                <div className="wrapper__songs">
                    <div className="search">
                        <input type="text" placeholder="Enter something" value={this.state.value} onChange={this.handleChange} />
                            <div className="search__icon" onClick={this.handleSubmit}>
                                <i className="fas fa-search" ></i>
                            </div>
                    </div>
                </div>
                <Accordion music={music}/>
            </div>
        );
      }
    }