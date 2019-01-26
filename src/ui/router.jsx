// @flow
const React = require('react');
const BrowserRouter = require('react-router-dom/BrowserRouter').default;
const Switch = require('react-router-dom/Switch').default;
const Route = require('react-router-dom/Route').default;
const PageFactory = require('./page-factory');

const Layout = require('./layout.jsx');
const Preloader = require('./preloader.jsx');

const { HOME, CONTACTS } = PageFactory.PageNames;
const pn: PageFactory = new PageFactory(Preloader);

module.exports = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route path="/" exact component={pn.loadPage(HOME)} />
				<Route path="/contacts" component={pn.loadPage(CONTACTS)} />
			</Switch>
		</Layout>
	</BrowserRouter>
);
