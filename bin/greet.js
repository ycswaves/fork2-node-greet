#!/usr/bin/env node
var greet = require("index");
//console.log(process.argv);
var parseArgs = require('minimist');
args = parseArgs(process.argv.slice(2));

console.log(greet(args._[0], args.drunk));