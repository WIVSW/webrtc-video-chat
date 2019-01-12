// @flow
import ReactDOM from 'react-dom';
import template from './index.jsx';

const root = document.getElementById('root');

if (root) {
	ReactDOM.render(template(), root);
}
