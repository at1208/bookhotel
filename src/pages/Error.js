import React from 'react';
import Hero from "../components/Hero";
import Banner from "../components/Hero";
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <Hero>
            <Banner title='404' subtitile="page not found">
                <Link to='/' className='btn-primary'>return home</Link>
            </Banner>
        </Hero>
    );
}

export default Error;
