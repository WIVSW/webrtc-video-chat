// @flow
import type { ComponentType } from 'react';
import type { LoadableComponent } from 'react-loadable';

const loadable = require('react-loadable');

type PageName = 'home' | 'contacts';

class PageFactory {
	_preloader: ComponentType<{}>;

	_pagesMap: Map<PageName, LoadableComponent>;

	static PageNames: {[key: string]: PageName} = {
		HOME: 'home',
		CONTACTS: 'contacts',
	};

	constructor(preloader: ComponentType<{}>) {
		this._preloader = preloader;
		this._pagesMap = new Map();

		this._bind();
	}

	_bind() {
		const { HOME, CONTACTS } = PageFactory.PageNames;
		this._add(HOME, () => import('./pages/home.jsx'));
		this._add(CONTACTS, () => import('./pages/contacts.jsx'));
	}

	_add(pageName : PageName, promise : LoadableComponent) {
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

module.exports = PageFactory;
