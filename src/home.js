import React, { Component } from 'react'
import Navbar from './navbar'
import './style/home.css'
import { Link } from 'react-router-dom';
import {Helmet} from "react-helmet";

export class home extends Component {
    render() {
        

        return (
            <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>College Facemash - Home</title>
                <link rel="canonical" href="http://mysite.com/examplehttp://cfm-react.s3-website-us-east-1.amazonaws.com/" />
            </Helmet>
            <Navbar/>
            <section className="home-sec1">
            <div className="content">
                <h1>Welcome to College Facemash</h1>
                <p>inspired from the movie social network</p>
            </div>
        </section>
        
        <section className="home-sec2">
            <div className="dark-background">
                <div className="content-2">
                    <h1>A site for every College Student</h1>
                    <p>A new personal and private social networking site for every college and its student</p>
                    <Link to='/about'>
                    <button className="purple-button">Know More</button>
                    </Link>
                </div>
            </div>
            
        </section>
        <section className="home-sec3">
           <div className="background">
            <div className="content-3">
                <h1>Poke, Rate, Comment! </h1>
                <p>Connect with your friends with an eve teasing manner like never before on every college's own private social network</p>
            </div>
           </div>
        </section>
            </div>
        )
    }
}

export default home
