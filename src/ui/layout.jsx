// @flow
const React = require('react');
const NavLink = require('react-router-dom/NavLink').default;
const Switch = require('react-router-dom/Switch').default;

type LayoutPropsType = {
	children: Switch
};

module.exports = (props: LayoutPropsType) => {
	const { children } = props;
	return (
		<div className="layout">
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
