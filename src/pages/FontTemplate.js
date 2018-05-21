import React, { Component } from 'react';

class FontTemplate extends Component { 
    constructor(){
        super();
        this.randomFont = this.randomFont.bind(this);

        this.state = { 
            currentFont: 'playfair-fauna'
        }
        
    }

    componentDidMount(){
        this.randomFont();
    }

    randomFont(){
        var fontPairs = [
            'playfair-fauna',
            'quattrocento-fanwood',
            'opensans-prata',
            'alfaslab-gentiumbook',
            'nixieone-librebaskerville',
            'juliussans-crimson',
            'oswald-quattrocento',
            'playfair-slab',
            'oswald-opensans',
            'playfield-muli',
            'rufina-oxygen',
            'raleway-playfield',
            'opensans-opensanscondensed',
            'montserrat-oldstandard',
            'quattrocentosans-quattrocento',
            'quattrocento-quattrocentosans',
            'oswald-playfair'
        ]

        var randomFont = fontPairs[Math.floor(Math.random()*fontPairs.length)];

        console.log(randomFont);

        this.setState({ currentFont: randomFont });
    }
    
    render(){
        return(
            <div className="App">
                <button onClick={() => { this.randomFont() }}>Random Font</button>
                <div className={this.state.currentFont + " fontContainer"}>
                    <div className="fontTitle">
                        <h1>Far out in the uncharted backwaters...</h1>
                    </div>
                    <div className="fontDescription">
                    <p>...of the unfashionable end of
                    the western spiral arm of the Galaxy lies a small unregarded
                    yellow sun.</p>
                    <p>Orbiting this at a distance of roughly ninety-two million miles
                    is an utterly insignificant little blue green planet whose ape-
                    descended life forms are so amazingly primitive that they still
                    think digital watches are a pretty neat idea.</p>
                    <p>This planet has - or rather had - a problem, which was this: most
                    of the people living on it were unhappy for pretty much of the time.
                    Many solutions were suggested for this problem, but most of these
                    were largely concerned with the movements of small green pieces
                    of paper, which is odd because on the whole it wasn't the small
                    green pieces of paper that were unhappy.</p>
                    <p>And so the problem remained; lots of the people were mean, and
                    most of them were miserable, even the ones with digital watches.</p>
                    <p>Many were increasingly of the opinion that they'd all made a big
                    mistake in coming down from the trees in the first place. And
                    some suggested that even the trees had been a bad move, and that no
                    one should ever have left the oceans.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default FontTemplate;