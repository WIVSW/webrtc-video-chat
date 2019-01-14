// @flow
const React = require('react');
const BrowserRouter = require('react-router-dom/BrowserRouter').default;
const Switch = require('react-router-dom/Switch').default;
const Route = require('react-router-dom/Route').default;

const Layout = require('./layout.jsx');

const Home = () => (<h1>Hello, Home!</h1>);
const Contacts = () => (<h1>Hello, Contacts!</h1>);

module.exports = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/contacts" component={Contacts} />
			</Switch>
		</Layout>
	</BrowserRouter>
);
