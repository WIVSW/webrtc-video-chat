// @flow
const { render } = require('react-dom');
const template = require('./router.jsx');

const root: ?HTMLElement = document.getElementById('root');

if (root) {
	render(template(), root);
}
