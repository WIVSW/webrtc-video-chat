const clean = require('./clean');
const hmr = require('./hmr');
const html = require('./html');
const scriptExt = require('./script-ext');
const asyncChunkNames = require('./async-chunk-names');
const sass = require('./sass');

module.exports = {
	clean,
	hmr,
	html,
	scriptExt,
	asyncChunkNames,
	sass,
};
