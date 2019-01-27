// @flow
const { render } = require('react-dom');
const template = require('./index.jsx');

const root: ?HTMLElement = document.getElementById('root');

if (root) {
	render(template(), root);
}
