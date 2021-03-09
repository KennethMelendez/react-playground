"use strict";

console.log("app.js loaded."); //npx babel src/app.js --out-file=public/scripts/app.js --presets="@babel/preset-env,@babel/preset-react"

var app = {
  title: 'This is my first JSX application',
  subtitle: 'Welcome to the appliucation',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app['title']), app['subtitle'] && /*#__PURE__*/React.createElement("p", null, app['subtitle']), app['options'].length > 0 ? /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")) : 'No options');
var userName = 'Kenneth Melendez Developer';
var userLocation = 'wooho';
var userAge = 292329392;
var user = {
  name: 'Kenneth',
  age: 15,
  location: 'weehoo'
};

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, " location: ", location);
  } else {
    return undefined;
  }
}

var template2 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user['name'] : 'Anonymous'), user['age'] && user['age'] >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user['age']), getLocation(user['location']));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
