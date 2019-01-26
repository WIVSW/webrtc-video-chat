// @flow
const loadable = require('react-loadable');

opaque type LoadableComponent<P> = Promise<{default: React$ComponentType<P>}>;
opaque type Loader<P> = () => LoadableComponent<P>;
opaque type PageNameValues = 'home' | 'contacts';
type PageNameKeys = 'HOME' | 'CONTACTS';

class PageFactory {
	_preloader: React$ComponentType<{}>;

	_pagesMap: {[key: PageNameValues]: React$ComponentType<{}>};

	static PageNames: $ReadOnly<{[key: PageNameKeys]: PageNameValues}>;

	constructor(preloader: React$ComponentType<{}>) {
		this._preloader = preloader;
		this._pagesMap = {};

		this._bind();
	}

	_bind() {
		const { HOME, CONTACTS } = PageFactory.PageNames;
		this._add(HOME, () => import('./pages/home.jsx'));
		this._add(CONTACTS, () => import('./pages/contacts.jsx'));
	}

	_add(pageName : PageNameValues, loader: Loader<{}>) {
		const loading: React$ComponentType<{}> = this._preloader;
		this._pagesMap[pageName] = loadable({
			loader,
			loading,
		});
	}

	loadPage(pageName: PageNameValues) : React$ComponentType<{}> {
		return this._pagesMap[pageName];
	}
}

PageFactory.PageNames = {
	HOME: 'home',
	CONTACTS: 'contacts',
};

module.exports = PageFactory;
