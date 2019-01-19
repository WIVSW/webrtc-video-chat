// @flow
const React = require('react');
const Hello = require('../widgets/hello.jsx');
require('./home.scss');

module.exports = () => (
	<h1 className="title">
		<span>Hello, Home!</span>
		<Hello />
	</h1>
);
