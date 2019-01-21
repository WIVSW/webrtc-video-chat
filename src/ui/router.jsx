// @flow
const React = require('react');
const BrowserRouter = require('react-router-dom/BrowserRouter').default;
const Switch = require('react-router-dom/Switch').default;
const Route = require('react-router-dom/Route').default;
const PageFactory = require('./page-factory');

const Layout = require('./layout.jsx');

const pn = new PageFactory(() => <h1>Please wait...</h1>);

module.exports = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route path="/" exact component={pn.loadPage(PageFactory.PageNames.HOME)} />
				<Route path="/contacts" component={pn.loadPage(PageFactory.PageNames.CONTACTS)} />
			</Switch>
		</Layout>
	</BrowserRouter>
);
