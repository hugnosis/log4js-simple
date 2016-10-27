# log4js-simple

## Syntax
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
log.level = 3; // INFO;
```

## Change Levels
```js
var levels = ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'OFF'];
log.setLevels(levels, [level=3 [, displayCallstackLevel=4 [, displayErrorLevel=5]);
```

## Installation
```js
$ npm install log4js-simple
```
