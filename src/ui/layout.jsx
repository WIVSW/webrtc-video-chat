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
					<NavLink to="/" exact>Contacts</NavLink>
					<NavLink to="/chat">Chat</NavLink>
					<NavLink to="/settings">Settings</NavLink>
				</ul>
			</div>
			{children}
		</div>
	);
};
