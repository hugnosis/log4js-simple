# log4js-simple

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
log.level = 3; // INFO;
```

## Change Levels
```js
var levels = ['ALL', 'ERROR', 'TEST'];
log.setLevels(levels, [level=0 [, displayCallstackLevel=1 [, displayErrorLevel=1]);

log.all('all message');
log.error('error message');
log.test('test message');
```

## Change prefix
```js
log.prefix = function(level) {
  return '[TEST PREFIX] ';
}
```

## Installation
```js
$ npm install log4js-simple
```
