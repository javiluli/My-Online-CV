// Import all filder from ./static/content/img/
const cache = {};
function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}
importAll(require.context("./static/img/", true, /\.(jpg|svg)$/));
// At build-time cache will be populated with all required modules.

//---------------------------------//

//---------------------------------//
// Import CSS, Normalize and fonts.css
import "./styles/style.scss";
import "./static/css/font-Confortaa.css";
import "./static/css/font-Montserrat.css";
import "./static/css/normalize.css";
//---------------------------------//

// Import CV.pdf
// import "./static/archive/cv.pdf";

//---------------------------------//
// Import fonts.ttf
import "./static/fonts/Comfortaa[wght].ttf";
import "./static/fonts/Montserrat-Regular.ttf";
import "./static/fonts/Montserrat-Medium.ttf";
import "./static/fonts/Montserrat-SemiBold.ttf";
//---------------------------------//

//---------------------------------//
import "./static/js/show_modal";
import "./static/js/change_darkMode";
import "./static/js/change_languages";
import "./static/js/btn-back-top";
import "./static/js/copyright";
//---------------------------------//
