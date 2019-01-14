// @flow
const React = require('react');
const BrowserRouter = require('react-router-dom/BrowserRouter').default;
const Switch = require('react-router-dom/Switch').default;
const Route = require('react-router-dom/Route').default;
const loadable = require('react-loadable');

const Layout = require('./layout.jsx');

const LoadingComponent = () => <h1>Please wait...</h1>;

const HomePromise = () => {
	return Promise
		.all([
			import('./home.jsx'),
			(new Promise(resolve => setTimeout(() => resolve(), 1000))),
		])
		.then(data => data[0]);
};
const ContactsPromise = () => {
	return Promise
		.all([
			import('./contacts.jsx'),
			(new Promise(resolve => setTimeout(() => resolve(), 1000))),
		])
		.then(data => data[0]);
};

const AsyncHome = loadable({
	loader: HomePromise,
	loading: LoadingComponent,
});

const AsyncContacts = loadable({
	loader: ContactsPromise,
	loading: LoadingComponent,
});

module.exports = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route path="/" exact component={AsyncHome} />
				<Route path="/contacts" component={AsyncContacts} />
			</Switch>
		</Layout>
	</BrowserRouter>
);
