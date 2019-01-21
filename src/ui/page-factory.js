const {Component} = require('react');
const loadable = require('react-loadable');
const { LoadableComponent } = require('react-loadable');

const names = {
	HOME: 'home',
	CONTACTS: 'contacts',
};

const { HOME, CONTACTS } = names;

type PageName = HOME | CONTACTS;

class PageFactory {
	constructor(preloader : Component) {
		this._preloader = preloader;

		this._pagesMap = new Map();

		this.bind();
	}

	bind() {
		this.add(HOME, () => import('./pages/home.jsx'));
		this.add(CONTACTS, () => import('./pages/contacts.jsx'));
	}

	add(pageName : PageName, promise : LoadableComponent) {
		const loader = promise;
		const loading = this._preloader;
		this._pagesMap.set(
			pageName,
			loadable({
				loader,
				loading,
			}),
		);
	}

	loadPage(pageName: PageName) : LoadableComponent {
		return this._pagesMap.get(pageName);
	}
}

PageFactory.PageNames = names;

module.exports = PageFactory;
