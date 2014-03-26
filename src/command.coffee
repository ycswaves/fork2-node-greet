module.exports = () ->
	greet = require('../lib/index.js');
	parseArgs = require('minimist');
	args = parseArgs(process.argv.slice(2));
	console.log(greet(args._[0], args.drunk));