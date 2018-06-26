# Color Catcher

## What problem do I have?
Here's the thing, I'm an adequetely mediocre designer. If I harness all the design skill that I have the most I could come away with is probably a three column grid with some drop shadows. Bomb diggity.

In an effort to minimize my cognitive load I'm going to outsource my color picking to a machine. That way I can focus more on creating swoops and curves.

## How does this work?

I'm using [chroma.js](https://github.com/gka/chroma.js/ )

You click the button, it randomizes the center color and then outputs 4 other colors -- 2 lighter and 2 darker.

Something like this:

Lightest << Lighter < Normal > Darker >> Darkest

The font on top of the color swatch will either be black ( #000 ) or white ( #fff ) based on whichever has a higher contrast ratio based on the background.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
