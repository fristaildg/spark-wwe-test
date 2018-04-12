# Spark-WWE-TEST

## Stack
Webpack 4 (javascript and sass bundle)
SASS (styles pre-processor)
Vue.js (javascript framework)

## To run / build the project:
in project's root:
- npm install
- yarn dev / npm run dev:
- - runs a localhost:8080 with live-reload through webpack-dev-server
- yarn build / npm run build:
- - builds the project to the /dist folder

## Development folder structure:
src
- App (main component that renders the whole site )
- assets
- - images (static images go here)
- - styles (global styles go here)
- components
- - [ComponentName] (all reusable components that are rendered inside App (or inside other components). Inside each component's folder you will find a .vue file for the template, .scss for the styles, .js for the component's logic);
