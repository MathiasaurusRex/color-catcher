import React, { Component, Fragment } from 'react';
import ColorSwatch from '../components/ColorSwatch';
import chroma from 'chroma-js';
import { connect } from "react-redux"; 

class ColorTemplate extends Component { 
    constructor(){
        super();
        this.state = {
          inputColor: undefined,
          inputColor1: undefined,
          inputColor2: undefined,
          inputColora: undefined,
          inputColor1a: undefined,
          inputColor2a: undefined,
          
          inputColorALLY: undefined,
          inputColor1ALLY: undefined,
          inputColor2ALLY: undefined,
    
          inputColoraALLY: undefined,
          inputColor1aALLY: undefined,
          inputColor2aALLY: undefined,
        }
        this.catchColor = this.catchColor.bind(this);
        this.contrastColor = this.contrastColor.bind(this);
        this.randomColorState = this.randomColorState.bind(this);
      }

      componentDidMount(){
        this.randomColorState();
      }
    
      catchColor(event){
        // this.setState({inputColor: chroma(event.target.value)});
        if( event.target.value.length === 3 || event.target.value.length === 6 ) {
    
          this.setState({
              inputColor: chroma(event.target.value).hex()},
              function(){
                this.contrastColor(this.state.inputColor, `inputColorALLY`);
          });
          this.setState({
            inputColor1: chroma(event.target.value).darken().hex()},
            function(){
              this.contrastColor(this.state.inputColor1, `inputColor1ALLY`);
          });
          this.setState({inputColor2: chroma(event.target.value).darken().darken().hex()},
            function(){
              this.contrastColor(this.state.inputColor2, `inputColor2ALLY`);
          });
    
          this.setState({inputColora: chroma(event.target.value).hex()},
            function(){
              this.contrastColor(this.state.inputColora, `inputColoraALLY`)
          });
          this.setState({inputColor1a: chroma(event.target.value).brighten().hex()},
            function(){
              this.contrastColor(this.state.inputColor1a, `inputColor1aALLY`)
          });
          this.setState({inputColor2a: chroma(event.target.value).brighten().brighten().hex()},
            function(){
              this.contrastColor(this.state.inputColor2a, `inputColor2aALLY`)
          });
        }
      }
    
      randomColorState(){
        var randomColor = chroma.random().hex();
    
    
          this.setState({
              inputColor: chroma(randomColor).hex()},
              function(){
                this.contrastColor(this.state.inputColor, `inputColorALLY`);
          });
          this.setState({
            inputColor1: chroma(randomColor).darken().hex()},
            function(){
              this.contrastColor(this.state.inputColor1, `inputColor1ALLY`);
          });
          this.setState({inputColor2: chroma(randomColor).darken().darken().hex()},
            function(){
              this.contrastColor(this.state.inputColor2, `inputColor2ALLY`);
          });
    
          this.setState({inputColora: chroma(randomColor).hex()},
            function(){
              this.contrastColor(this.state.inputColora, `inputColoraALLY`)
          });
          this.setState({inputColor1a: chroma(randomColor).brighten().hex()},
            function(){
              this.contrastColor(this.state.inputColor1a, `inputColor1aALLY`)
          });
          this.setState({inputColor2a: chroma(randomColor).brighten().brighten().hex()},
            function(){
              this.contrastColor(this.state.inputColor2a, `inputColor2aALLY`)
          });
      }
    
      contrastColor(color, state){
        var contrastRatio = chroma.contrast(color, 'black');
        var allyColor = `#000000`; 
    
        if( contrastRatio < 4.5) {
          allyColor = `#ffffff`;
        }
    
        this.setState({ [state]: allyColor });
    
    
        console.log( chroma.contrast(color, 'black'));
      }
    render(){
        return(
          <Fragment>
              <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' viewBox='0 0 659 522'>
                <defs>
                    <linearGradient id='grad1' x1='0%' y1='0%' y2='0%'>
                        <stop offset='0%' stopColor={this.state.inputColor2a} />
                        <stop offset='25%' stopColor={this.state.inputColor1a} />
                        <stop offset='50%' stopColor={this.state.inputColor}  />
                        <stop offset='75%' stopColor={this.state.inputColor1} />
                        <stop offset='100%' stopColor={this.state.inputColor2} />
                      
                    </linearGradient>
                </defs>
                <path fill='url(#grad1)' d='M 0 300 C 100 300 100 250 200 250 C 350 250 400 400 550 400 C 650 400 700 300 800 300 L 800 100 L 0 100 L 0 300 Z'
                />
            </svg>
            <div className={"App " + this.props.globalFont} style={{borderColor: this.state.inputColor}}>

                <input type="text" onChange={this.catchColor}/>
                <button onClick={() => { this.randomColorState() }}>Random Color</button>
                {/* <div>{chroma(event.target.value)}</div> */}
                <div className="color-swatch--source"></div>
                <div class="color-swatch-container">
                
                <div className="color-swatch">

                    <ColorSwatch inputColor={this.state.inputColor2a} inputALLY={this.state.inputColor2aALLY}/>
                    <ColorSwatch inputColor={this.state.inputColor1a} inputALLY={this.state.inputColor1aALLY}/>
                    <ColorSwatch inputColor={this.state.inputColor} inputALLY={this.state.inputColorALLY}/>
                    <ColorSwatch inputColor={this.state.inputColor1} inputALLY={this.state.inputColor1ALLY}/>
                    <ColorSwatch inputColor={this.state.inputColor2} inputALLY={this.state.inputColor2ALLY}/>
        
                </div>
                </div>
            </div>
          </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
  globalFont: state.globalFont,
  globalColor: state.globalColor
})

export default connect(mapStateToProps)(ColorTemplate);