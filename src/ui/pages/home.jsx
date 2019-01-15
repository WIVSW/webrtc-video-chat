// @flow
const React = require('react');
const classNames = require('classnames/bind');
const Hello = require('../widgets/hello.jsx');
const styles = require('./home.scss');

const cx = classNames.bind(styles);

module.exports = () => (
	<h1 className={cx('title')}>
		<span>Hello, Home!</span>
		<Hello />
	</h1>
);
