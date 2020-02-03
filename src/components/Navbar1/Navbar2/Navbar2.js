import React, { Component } from 'react'
import $ from 'jquery';
import './Navbar2.css';

export default class Navbar2 extends Component {
    componentDidMount() {
        $(window).scroll(function () {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });
    }

    render() {

        return (
            <div>
                <nav class="nav">
                    <div class="container">
                        <div class="logo">
                            <a href="#">Your Logo</a>
                        </div>
                        <div id="mainListDiv" class="main_list">
                            <ul class="navlinks">
                                <li><a href="/">Home</a></li>
                                <li><a href="/Rooms">Rooms</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Signup</a></li>
                            </ul>
                        </div>
                        <span class="navTrigger">
                            <i></i>
                            <i></i>
                            <i></i>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}


