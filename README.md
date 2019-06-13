# My online CV
Mi CV online creado con Webpack y Git.

Pueder ver mi CV pinchando [aqui](https://javiluli.github.io/my-online-cv/)

## Este CV creado como sitio web contiene:
- Template engine for HTML: Pug
- CSS compiler: SCSS
- CSS Normalize
- Javascript pure
- Custom Fonts, icons and SVG

## Desde el Webpack.config.js puedes:
- Carga y compilar Pug a HTML y minificarlo
- Carga y compilar SCSS a CSS y minificarlo
- Carga tipografias woff, woff2, ttf & eot
- Carga imagenes gif, jpg y png y minifica el peso
- Carga archivos SVG


## `npm i`
- Instalar dependencias de node.js:

## Scripts creados para dev

- ### `npm run buid`
  - Reescribe los archivos en produccion:
  - `"build": "rimraf dist && webpack --config webpack/webpack.config.js -p",`

- ### `npm start`
  - Iniciar un servidor local para desarrollo:
  - `"start": "webpack-dev-server --config webpack/webpack.config.js -d"`
