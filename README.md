# Stan Coding Challenge

## How did you decide on the technical and architectural choices used as part of your solution?
 - HTML Design: Grid + Flexbox
      - Allows app to be responsive on all devices
      - Simplifies design logic
      - Allows easy positioning and spacing of elements
 - CSS: BEM styling
      - Ensures CSS is easy to read and maintain
      - Can help avoid class name conflicts
 - Async, await with try catch for loading data
      - Makes data loading logic very easy to follow rather than nested callbacks for example

## Are there any improvements you could make to your submission?
 - Potentially make components load lazily, although not required for this app as it stands, if larger sized pages (and more of them) were used then it would be good to have
 - Could also lazily load images as they become visible, and utilise infinite scrolling for performance
 - Would like to split up tests into seperate modular files
 - Redux state management could be good also for a larger app and to give access to shared state across app
 - Code splitting: loading on demand
      - only loads what's required so first load of the app isn't slow for the user, better user experience


## What would you do differently if you were allocated more time?
 - Potentially look at different lazy loading or app structure/architecture approaches as well as other improvements mentioned above

 ## Notes:
 ### To serve from dist folder
 1. Run npm install -g serve
 2. Run serve -s dist