import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component { 

    render(){
        return(
            <header className="gl-header">
                <ul className="gl-header-nav">
                    <li className="gl-header-nav-li">
                        <Link to="/" className="gl-header-nav-link">Chroma</Link>
                    </li>
                </ul>
                <ul className="gl-header-nav">
                    <li className="gl-header-nav-li">
                        <Link className="gl-header-nav-link" to="/">Home</Link>
                    </li>
                    <li className="gl-header-nav-li">
                        <Link className="gl-header-nav-link" to="/color">Colors</Link>
                    </li>
                    <li className="gl-header-nav-li">
                        <Link className="gl-header-nav-link" to="/font">Fonts</Link>
                    </li>
                    
                </ul>
            </header>
        )
    }
}

export default Header;