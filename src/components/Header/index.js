import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
/*
class Header extends React.Component {
    render() {
        return (
            <h1>

            </h1>
        );
    }
};
*/
const Header = () => {
    return (
        <>
            <Helmet>
                <title>
                    React Project
                </title>
            </Helmet>
            <header id="main-header">
                <a href="/">
                    
                    <img src={require('../../logo.svg')} id="brand">
                    </img>
                </a>
            </header>
        </>
    );
}
export default Header;
