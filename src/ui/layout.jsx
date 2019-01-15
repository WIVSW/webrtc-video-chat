// @flow
const React = require('react');
const NavLink = require('react-router-dom/NavLink').default;
const Switch = require('react-router-dom/Switch').default;
const classNames = require('classnames/bind');
const styles = require('./layout.scss');

const cx = classNames.bind(styles);

type Props = {
	children: Switch
};

module.exports = (props: Props) => {
	const { children } = props;
	return (
		<div className={cx('layout')}>
			<div className="nav">
				<ul className="nav__list">
					<NavLink to="/" exact>Home</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</ul>
			</div>
			{children}
		</div>
	);
};
