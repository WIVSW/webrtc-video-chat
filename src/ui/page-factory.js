// @flow
const loadable = require('react-loadable');

opaque type LoadableComponent<P> = Promise<{default: React$ComponentType<P>}>;
opaque type Loader<P> = () => LoadableComponent<P>;
opaque type PageNameValues = 'contacts' | 'chat' | 'settings';
type PageNameKeys = 'CONTACTS' | 'CHAT' | 'SETTINGS';

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
		const { CONTACTS, CHAT, SETTINGS } = PageFactory.PageNames;
		this._add(CONTACTS, () => import('./pages/contacts/contacts.jsx'));
		this._add(CHAT, () => import('./pages/chat/chat.jsx'));
		this._add(SETTINGS, () => import('./pages/settings/settings.jsx'));
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
	CONTACTS: 'contacts',
	CHAT: 'chat',
	SETTINGS: 'settings',
};

module.exports = PageFactory;
