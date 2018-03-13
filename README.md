# log4js-simple

[![NPM](https://nodei.co/npm/log4js-simple.png?downloads=true)](https://nodei.co/npm/log4js-simple/)

## Usage 
```js
var log = require('log4js-simple');

log.info('Hello %s', world);
log.warn('Hello %s', world);
log.error('Hello %s', world);
log.fatal('Hello %s', world);
```

## Log Format
[util.format](https://nodejs.org/api/util.html#util_util_format_format_args)

## Change Level
```js
/** ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'OFF'] */
log.level = 3; // INFO;
```

## Change Levels
```js
var levels = ['ALL', 'INFO', 'WARN', 'ERROR'];
log.setLevels(levels [, level=2 [, displayCallstackLevel=2 [, displayErrorLevel=3]);

log.all('all message'); // Not display
log.warn('call stack display ...');
log.error('error message');
```

## Change prefix
```js
log.prefix = function(level) {
  /** 2016-11-03T08:39:35.943Z INFO */
  return (new Date()).toISOString() + ' ' + levels[level];
}
```

## Installation
```js
$ npm i log4js-simple
```
