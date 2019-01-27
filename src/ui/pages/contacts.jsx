// @flow
const React = require('react');
const Hello = require('../widgets/hello.jsx');
require('./contacts.scss');

module.exports = () => (
	<h1 className="contacts">
		<span>Hello, Contacts!</span>
		<Hello />
	</h1>
);
