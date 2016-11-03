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
var levels = ['ALL', 'ERROR', 'TEST', 'OFF'];
log.setLevels(levels [, level=1 [, displayCallstackLevel=1 [, displayErrorLevel=1]);

log.all('all message'); // Not display
log.error('error message');
log.test('test message');
```

## Change prefix
```js
log.prefix = function(level) {
  /** 2016-11-03T08:39:35.943Z INFO test message */
  return (new Date()).toISOString() + ' ' + levels[level];
}
```

## Installation
```js
$ npm install log4js-simple
```
