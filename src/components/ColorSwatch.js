import React, { Component } from 'react';

class ColorSwatch extends Component { 

    render(){
        return(
            <div className="color-swatch--square" style={{backgroundColor: this.props.inputColor}}>
                <span style={{ color: this.props.inputALLY }}>
                    {this.props.inputColor}
                </span>
            </div>
        )
    }
}

export default ColorSwatch;