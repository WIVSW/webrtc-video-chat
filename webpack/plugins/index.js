const clean = require('./clean');
const hmr = require('./hmr');
const html = require('./html');
const scriptExt = require('./script-ext');
const asyncChunkNames = require('./async-chunk-names');

module.exports = {
	clean,
	hmr,
	html,
	scriptExt,
	asyncChunkNames
};
