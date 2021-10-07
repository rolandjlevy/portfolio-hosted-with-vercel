window.projectData = [];

// fetch data from api
// const url = 'https://express-portfolio-api.rolandjlevy.repl.co/api/projects';
// fetch('url)
// .then(res => res.json())
// .then(data => {
//   data.forEach(project => {
//     console.log({ project });
//   })
// });

// Photo Finder
projectData.push(new Project({
  id: 'photo-finder',
  sortOrder: 1,
  image: './images/projects/photo-finder.jpg',
  heading: 'Photo Finder',
  details: 'Search for and favourite photos using the Unsplash API.',
  category: 'App with API',
  languages: ['node','express','ejs','javascript','bootstrap'],
  infoButtons: {
    play: 'https://express-photo-finder-using-unsplash-api.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/express-photo-finder-using-unsplash-api',
    code: 'https://repl.it/@RolandJLevy/express-photo-finder-using-unsplash-api'
  }
}));

// Snow Quotes
projectData.push(new Project({
  id: 'snow-quotes', 
  sortOrder: 2,
  image: './images/projects/snow-quotes.jpg',
  heading: 'Snow Quotes',
  details: 'Create a sky of snowflakes. Each one reveals an inspirational quote you can share with your friends.',
  category: 'App with API',
  languages: ['node','express','pug','javascript','css'],
  infoButtons: {
    play: 'https://snow-quotes.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/snow-quotes',
    code: 'https://repl.it/@RolandJLevy/snow-quotes'
  }
}));

// Wave-pool Simulator
projectData.push(new Project({
  id: 'wave-pool-simulator', 
  sortOrder: 3,
  image: './images/projects/wave-pool-simulator.jpg',
  heading: 'Wave-pool Simulator',
  details: 'A fun CSS animation experiment using spinning conic gradient circles with sliders to control speed, colour, corners and shape',
  category: 'Widget',
  languages: ['css', 'javascript'],
  infoButtons: {
    play: 'https://css-conic-gradient-wave-pattern.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/css-conic-gradient-wave-pattern',
    code: 'https://github.com/rolandjlevy/css-conic-gradient-wave-pattern'
  }
}));

// BackChat messaging app
projectData.push(new Project({
  id: 'backchat',
  sortOrder: 4,
  image: './images/projects/backchat-300-400.jpg',
  heading: 'BackChat',
  details: 'Getting practical experience of websockets by building a messaging app',
  category: 'Widget',
  languages: ['node', 'express', 'javascript', 'css'],
  infoButtons: {
    play: 'https://chat-app-with-socket-io.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/chat-app-with-socket-io',
    code: 'https://replit.com/@RolandJLevy/chat-app-with-socket-io'
  }
}));

// Psychedelic avocados
projectData.push(new Project({
  id: 'psychedelic-avocados', 
  sortOrder: 5,
  image: './images/projects/psychedelic-avocados.jpg',
  heading: 'Psychedelic Avocados',
  details: 'A hypnotic wave of animated, psychedelic avocados which is fully responsive',
  category: 'Animation',
  languages: ['css'],
  infoButtons: {
    play: 'https://css-hypnotic-wave-of-psychedelic-avocados.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/css-hypnotic-wave-of-psychedelic-avocados',
    code: 'https://repl.it/@RolandJLevy/css-hypnotic-wave-of-psychedelic-avocados'
  }
}));

// Sliders Game
projectData.push(new Project({
  id: 'sliders-game', 
  sortOrder: 6,
  image: './images/projects/sliders-game.png',
  heading: 'Sliders Game',
  details: 'Slide pieces into the correct order in the fewest possible moves.',
  category: 'Game',
  languages: ['javascript','css','firebase'],
  infoButtons: {
    play: 'https://js-sliders-game.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-sliders-game',
    code: 'https://repl.it/@RolandJLevy/js-sliders-game'
  }
}));

// Solitaire Game
projectData.push(new Project({
  id: 'solitaire-game', 
  sortOrder: 7,
  image: './images/projects/solitaire-game.jpg',
  heading: 'Solitaire Game',
  details: 'Remove all the marbles to finish with one remaining and acheive \'Solitaire\'.',
  category: 'Game',
  languages: ['javascript','css','firebase'],
  infoButtons: {
    play: 'https://js-solitaire-game.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-solitaire-game',
    code: 'https://repl.it/@RolandJLevy/js-solitaire-game'
  }
}));

// Language Translator
projectData.push(new Project({
  id: 'language-translator', 
  sortOrder: 8,
  image: './images/projects/language-translator.jpg',
  heading: 'Language Translator',
  details: 'Translate text into 28 languages using the Google Translate API.',
  category: 'App with API',
  languages: ['node', 'express', 'ejs', 'bootstrap'],
  infoButtons: {
    play: 'https://express-language-translator.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/express-language-translator',
    code: 'https://repl.it/@RolandJLevy/express-language-translator'
  }
}));

// All-in-one Search
projectData.push(new Project({
  id: 'all-in-one-search', 
  sortOrder: 9,
  image: './images/projects/all-in-one-search.jpg',
  heading: 'All-in-one Search',
  details: 'A verstile tool which makes searching multiple channels quick and easy.',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-all-in-one-search-with-autocomplete.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-all-in-one-search-with-autocomplete',
    code: 'https://repl.it/@RolandJLevy/js-all-in-one-search-with-autocomplete'
  }
}));

// Text to Speech
projectData.push(new Project({
  id: 'text-to-speech', 
  sortOrder: 10,
  image: './images/projects/text-to-speech.png',
  heading: 'Text to Speech',
  details: 'Choose a language, type some text and hear it spoken',
  category: 'App with API',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-text-to-speech-api.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-text-to-speech-api',
    code: 'https://repl.it/@RolandJLevy/js-text-to-speech-api'
  }
}));

// JavaScript Digital / Analogue Clock
projectData.push(new Project({
  id: 'js-digital-analogue-javascript-clock', 
  sortOrder: 11,
  image: './images/projects/javascript-clock.jpg',
  heading: 'JavaScript Clock',
  details: 'A digital and analogue clock made with just 20 lines of JavaScript',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-clock.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-clock',
    code: 'https://repl.it/@RolandJLevy/js-clock'
  }
}));

// Animated Light Show Loop
projectData.push(new Project({
  id: 'animated-light-show-loop', 
  sortOrder: 12,
  image: './images/projects/animated-light-show.jpg',
  heading: 'Animated Light Show',
  details: 'Using basic Maths with Pug and CSS to animate lights which loop infinitely',
  category: 'Animation',
  languages: ['pug', 'css'],
  infoButtons: {
    play: 'https://express-pug-animated-light-show-loop.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/express-pug-animated-light-show-loop',
    code: 'https://repl.it/@RolandJLevy/express-pug-animated-light-show-loop'
  }
}));

// Pixel randomiser
projectData.push(new Project({
  id: 'pixel-randomiser',
  sortOrder: 13,
  image: './images/projects/pixel-randomiser.jpg',
  heading: 'Pixel Randomiser',
  details: 'A pixel continuously changes colour and position randomly in the grid',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-pixel-randomiser.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-pixel-randomiser',
    code: 'https://replit.com/@RolandJLevy/js-pixel-randomiser'
  }
}));

// Word Randomiser
projectData.push(new Project({
  id: 'word-randomiser', 
  sortOrder: 14,
  image: './images/projects/word-randomiser.jpg',
  heading: 'Word Randomiser',
  details: 'Type some words and see the letters randomise until they resolve',
  category: 'Widget',
  languages: ['javascript','css'],
  infoButtons: {
    play: 'https://js-word-randomiser.rolandjlevy.repl.co?speed=25&msg=hello+world!',
    github: 'https://github.com/rolandjlevy/js-word-randomiser',
    code: 'https://repl.it/@RolandJLevy/js-word-randomiser'
  }
}));

// Grid of Interactive circles
projectData.push(new Project({
  id: 'interactive-circles', 
  sortOrder: 15,
  image: './images/projects/interactive-circles.jpg',
  heading: 'Interactive Circles',
  details: 'A grid of interactive coloured circles that change size and opacity based on the position of the cursor',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-interactive-coloured-circles.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-interactive-coloured-circles',
    code: 'https://repl.it/@RolandJLevy/js-interactive-coloured-circles'
  }
}));

// Trailing Spiral
projectData.push(new Project({
  id: 'trailing-spiral', 
  sortOrder: 16,
  image: './images/projects/trailing-spiral.jpg',
  heading: 'Trailing spiral',
  details: 'Click and drag to see a trail of fading circles, like a slinky! Made with just 18 lines of JavaScript.',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-interactive-trailing-spiral.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-interactive-trailing-spiral',
    code: 'https://replit.com/@RolandJLevy/js-interactive-trailing-spiral'
  }
}));

// Traffic lights animation
projectData.push(new Project({
  id: 'traffic-lights-animation', 
  sortOrder: 17,
  image: './images/projects/traffic-lights-animation.jpg',
  heading: 'Traffic lights',
  details: 'Using the power of the CSS animation property to animate a set of traffic lights at night',
  category: 'Animation',
  languages: ['css'],
  infoButtons: {
    play: 'https://css-traffic-lights-animation.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/css-conic-gradient-wave-pattern',
    code: 'https://replit.com/@RolandJLevy/css-traffic-lights-animation'
  }
}));

// Pixel Grid Draw
projectData.push(new Project({
  id: 'pixel-grid-draw', 
  sortOrder: 18,
  image: './images/projects/pixel-grid-draw.gif',
  heading: 'Pixel Grid Draw',
  details: 'Draw coloured pixels on a customizable grid.',
  category: 'Colour Utility',
  languages: ['vue','css'],
  infoButtons: {
    play: 'https://vue-pixel-grid-draw.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/vue-pixel-grid-draw/',
    code: 'https://repl.it/@RolandJLevy/vue-pixel-grid-draw/'
  }
}));

// Fluid grid of images
projectData.push(new Project({
  id: 'fluid-grid-of-images', 
  sortOrder: 19,
  image: './images/projects/fluid-grid-of-images.jpg',
  heading: 'Fluid grid of images',
  details: 'A fluid grid of random Unsplash images which is fully responsive on any device',
  category: 'App with API',
  languages: ['javascript','css'],
  infoButtons: {
    play: 'https://js-fluid-grid-of-images.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-fluid-grid-of-images',
    code: 'https://repl.it/@RolandJLevy/js-fluid-grid-of-images'
  }
}));

// Keydrums
projectData.push(new Project({
  id: 'keydrums', 
  sortOrder: 20,
  image: './images/projects/keydrums.jpg',
  heading: 'Keydrums',
  details: 'Play various percussion instruments on the keyboard or on your phone',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-key-drums.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-key-drums',
    code: 'https://replit.com/@RolandJLevy/js-key-drums'
  }
}));

// Google Loader
projectData.push(new Project({
  id: 'google-loading-screen', 
  sortOrder: 21,
  image: './images/projects/google-loading-screen.png',
  heading: 'Google Loader',
  details: 'A looping animation for a Google loading screen with adjustable animation speed using a slider',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://css-google-loading-animation.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/css-google-loading-animation',
    code: 'https://repl.it/@RolandJLevy/css-google-loading-animation'
  }
}));

// CSS Analogue Clock
projectData.push(new Project({
  id: 'analogue-clock', 
  sortOrder: 22,
  image: './images/projects/css-clock.jpg',
  heading: 'CSS Clock',
  details: 'A CSS analogue clock which accurately shows the time',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://css-analogue-clock.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/css-analogue-clock/',
    code: 'https://repl.it/@RolandJLevy/css-analogue-clock/'
  }
}));

// HSL Colour controller
projectData.push(new Project({
  id: 'hsl-colour-controller ', 
  sortOrder: 23,
  image: './images/projects/hsl-colour-controller.jpg',
  heading: 'HSL Colour controller',
  details: 'A dynamic HSL colour controller which displays HSL, hex and RGB values',
  category: 'Colour Utility',
  languages: ['node','express','pug','javascript','css'],
  infoButtons: {
    play: 'https://express-hsl-colour-controller-with-pug.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/express-hsl-colour-controller-with-pug',
    code: 'https://repl.it/@RolandJLevy/express-hsl-colour-controller-with-pug'
  }
}));

// Infinite Image Scroller
projectData.push(new Project({
  id: 'infinite-image-scroller', 
  sortOrder: 24,
  image: './images/projects/infinite-scroller.jpg',
  heading: 'Infinite Scroller',
  details: 'Infinite scrolling to load unsplash images continuously ',
  category: 'Widget',
  languages: ['javascript', 'css'],
  infoButtons: {
    play: 'https://js-infinite-image-scroller-with-unsplash-api.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-infinite-scrolling-with-unsplash-api',
    code: 'https://repl.it/@RolandJLevy/js-infinite-image-scroller-with-unsplash-api'
  }
}));

// Pop 100 game
projectData.push(new Project({
  id: 'pop-100', 
  sortOrder: 25,
  image: './images/projects/pop-100.jpg',
  heading: 'Pop 100 game',
  details: 'A game of speed and skill to test your reflexes. Try to pop all 100 balloons without missing any',
  category: 'Game',
  languages: ['javascript','css'],
  infoButtons: {
    play: 'https://js-balloon-popping-game.rolandjlevy.repl.co/',
    github: 'https://github.com/rolandjlevy/js-balloon-popping-game',
    code: 'https://repl.it/@RolandJLevy/js-balloon-popping-game'
  }
}));

// Emoji fruit slot machine
projectData.push(new Project({
  id: 'emoji-fruit-slot-machine', 
  sortOrder: 26,
  image: './images/projects/emoji-fruit-slot-machine.png',
  heading: 'Emoji fruit slot machine',
  details: 'A slot machine simulator made with real emoji fruit',
  category: 'Game',
  languages: ['javascript','css'],
  infoButtons: {
    play: 'https://js-emoji-fruit-slot-machine.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-emoji-fruit-slot-machine',
    code: 'https://repl.it/@RolandJLevy/js-emoji-fruit-slot-machine'
  }
}));

// Swatch Generator
projectData.push(new Project({
  id: 'swatch-generator', 
  sortOrder: 27,
  image: './images/projects/swatch-generator.jpg',
  heading: 'Swatch Generator',
  details: 'Generates random swatches and displays colour values.',
  category: 'Colour Utility',
  languages: ['javascript','css'],
  infoButtons: {
    play: 'https://js-random-hex-colour-swatch-generator-oop.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/js-random-hex-colour-swatch-generator-oop',
    code: 'https://repl.it/@RolandJLevy/js-random-hex-colour-swatch-generator-oop'
  }
}));

// Colour Creator
projectData.push(new Project({
  id: 'colour-creator', 
  sortOrder: 28,
  image: './images/projects/colour-creator.jpg',
  heading: 'Colour Creator',
  details: 'Create swatches with rgb and hex colour values displayed.',
  category: 'Colour Utility',
  languages: ['vue','css'],
  infoButtons: {
    play: 'https://vue-colour-creator.rolandjlevy.repl.co',
    github: 'https://github.com/rolandjlevy/vue-colour-creator/',
    code: 'https://repl.it/@RolandJLevy/vue-colour-creator/'
  }
}));

// Better Change
projectData.push(new Project({
  id: 'better-change', 
  sortOrder: 29,
  image: './images/projects/better-change.jpg',
  heading: 'QR Code App',
  details: 'Enables contactless payments using QR codes. No card-reader needed.',
  category: 'App',
  languages: ['react', 'redux', 'node', 'express', 'mysql', 'sass'],
  infoButtons: {
    play: 'http://www.betterchange.net/',
    github: 'https://github.com/Benefit-ConstructorLabs/benefit'
  }
}));

// OurBnB
projectData.push(new Project({
  id: 'ourbnb', 
  sortOrder: 30,
  image: './images/projects/beach.jpg',
  heading: 'OurBnB',
  details: 'Accommodation booking app for London, New York and Sydney.',
  category: 'App',
  languages: ['react', 'node', 'express', 'mysql', 'sass'],
  infoButtons: {
    play: 'https://ourbnb.herokuapp.com/',
    github: 'https://github.com/OurBnB/OurBnB'
  }
}));

// Moviewer
projectData.push(new Project({
  id: 'moviewer',
  sortOrder: 31,
  image: './images/projects/moviewer-popcorn.jpg',
  heading: 'Movie Explorer',
  details: 'A movie search engine which uses the Open Movie Database API.',
  category: 'App with API',
  languages: ['react', 'node', 'css'],
  infoButtons: {
    play: 'https://moviewer.herokuapp.com/',
    github: 'https://github.com/rolandjlevy/moviewer'
    }
}));

// Lovely Grubbly
projectData.push(new Project({
  id: 'lovely-grubbly',
  sortOrder: 32,
  image: './images/projects/italian-bread.jpg',
  heading: 'Food Delivery',
  details: 'Online takeaway food delivery service.',
  category: 'App',
  languages: ['react', 'node', 'express', 'sass'],
  infoButtons: {
    play: 'https://lovely-grubbly.herokuapp.com/',
    github: 'https://github.com/rolandjlevy/lovely-grubbly'
  }
}));

// Which City?
projectData.push(new Project({
  id: 'which-city',
  sortOrder: 33,
  image: './images/projects/louvre.jpg',
  heading: 'Quiz game',
  details: 'Which City? involves browsing photos and trying to guess the city.',
  category: 'Game',
  languages: ['react','sass'],
  infoButtons: {
    play: 'https://which-city.herokuapp.com/',
    github: 'https://github.com/rolandjlevy/which-city'
  }
}));

window.projectData.sort((a, b) => (a.sortOrder > b.sortOrder) ? 1 : -1);

  // console.log(window.projectData);