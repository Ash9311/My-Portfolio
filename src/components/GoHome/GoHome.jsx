import React, {Component} from "react";
import { BrowserRouter, withRouter,useLocation } from "react-router-dom";
import homeIconWhite from './../../assets/home_white.png';
import homeIconBlack from './../../assets/home_black.png';
import {Route,Link } from 'react-router-dom';
import './GoHome.css';
import Home from '../Home/Home';
import App from '../App/App';

class GoHome extends Component{

    navigateToHome = () => {
        
    //   const {history} = this.props;
    
    //       window.history.push('/');
    
     
    }

    render(){
        //const {window.location} = this.props;
        const whiteBtn = window.location.pathname ==='/';

        return (
            <button onClick={this.navigateToHome}>
                <img className="go-home-btn" src={whiteBtn ? homeIconBlack : homeIconWhite} alt="home-icon"></img>
            </button>
         );
    }
}

export default GoHome;