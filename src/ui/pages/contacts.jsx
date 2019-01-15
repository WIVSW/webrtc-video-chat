// @flow
const React = require('react');
const classNames = require('classnames/bind');
const Hello = require('../widgets/hello.jsx');
const styles = require('./contacts.scss');

const cx = classNames.bind(styles);

module.exports = () => (
	<h1 className={cx('contacts')}>
		<span>Hello, Contacts!</span>
		<Hello />
	</h1>
);
