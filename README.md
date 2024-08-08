# SSR 2

rendering the initial HTML on the server
instead of waiting for JS to be loaded in the browser, then rendering

## Tech

- esbuild 
  - faster than webpack



### esbuild test

./node_modules/.bin/esbuild src/App.jsx --bundle --outfile=out.js