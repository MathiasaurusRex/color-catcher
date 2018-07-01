import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../css/BannerGradient.css';



class BannerGradient extends Component { 

    render(){
        var gradientStyle = {
            background: 'linear-gradient(to right, ' + this.props.inputColor[0] + ', '+this.props.inputColor[1]+', '+this.props.inputColor[2]+', '+this.props.inputColor[3]+', '+this.props.inputColor[4]+')'
        }
        return(
            <Fragment>
                
                <div className="c-banner--gradient">
                        <svg className="c-banner--gradient-svg" xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 659 522'>
                        <defs>
                            <linearGradient id='gradBanner' x1='0%' y1='0%' y2='0%'>
                                <stop offset='0%' stopColor={this.props.inputColor[0]} />
                                <stop offset='25%' stopColor={this.props.inputColor[1]} />
                                <stop offset='50%' stopColor={this.props.inputColor[2]}  />
                                <stop offset='75%' stopColor={this.props.inputColor[3]} />
                                <stop offset='100%' stopColor={this.props.inputColor[4]} />
                            
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#gradBanner)"/>
                    </svg>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default BannerGradient;