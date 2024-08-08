# SSR 2

rendering the initial HTML on the server
instead of waiting for JS to be loaded in the browser, then rendering

## Tech

- esbuild 
  - faster than webpack

### esbuild test

./node_modules/.bin/esbuild src/App.jsx --bundle --outfile=out.js

# NO SSR

- Node-express serves React app on public/index.html, which requests script bundle.js
- bundle.js contains React app, built using esbundle

- `npm run dev-no-ssr`