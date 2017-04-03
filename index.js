
'use strict';

/**
 * Module dependencies.
 */
const
  util = require('util');


/** LOG LEVEL & STRING */
var
  _LEVEL = 3,
  _LEVELS = ['ALL', 'TRACE', 'DEBUG', 'INFO', 'WARN', 'ERROR', 'FATAL', 'OFF'],
  _DISPLAY_CALLSTACK_LEVEL = 4,
  _DISPLAY_ERROR_LEVEL = 5;

/**
 * Log
 * @returns {Object} Log
 * @constructor
 */
function Log() {
  if (!(this instanceof Log)) {
    return new Log();
  }

  Object.defineProperties(this, {
    level: {
      /** getter */
      get: function() { return _LEVEL },

      /** setter */
      set: function(x) {
        /** validation */
        if (x < 0 || x >= _LEVELS.length)
          return;

        _LEVEL = x;

        /** define levelling log function */
        for (var _level = 0; _level < _LEVELS.length; _level++)
          this[_LEVELS[_level].toLowerCase()] = _wrapper.call(this, _level);
      },

      /** option */
      enumerable: true
    }
  });

  this.setLevels(_LEVELS, _LEVEL);
}

/**
 * Set Levels
 * @param levels {array} values: string
 * @param [level] {number}
 * @param [displayCallstackLevel] {number}
 * @param [displayErrorLevel] {number}
 * @returns {boolean}
 */
Log.prototype.setLevels = function (levels, level, displayCallstackLevel, displayErrorLevel) {
  if (levels instanceof Array && levels.every(function(elem) { return typeof elem == 'string'; })) {
    _LEVELS = levels;

    _DISPLAY_CALLSTACK_LEVEL = displayCallstackLevel || _DISPLAY_CALLSTACK_LEVEL;
    _DISPLAY_ERROR_LEVEL = displayErrorLevel || _DISPLAY_ERROR_LEVEL;

    this.level = level || _LEVEL;
    return true;
  } else {
    return false;
  }
};

/**
 * Get Prefix
 * @param level
 * @returns {string}
 */
Log.prototype.prefix = function (level) {
  return (new Date()).toISOString() + ' ' + _LEVELS[level];
};

/**
 * Fix reference problem
 * @param level
 * @returns {Function}
 * @private
 */
function _wrapper(level) {
  var self = this;
  if (level < _LEVEL)
    return function () {};
  else
    return function () { _log(level, self.prefix(level), Array.prototype.slice.call(arguments)) };
}

/**
 * Print log
 * @param level
 * @param prefix
 * @param args
 * @private
 */
function _log(level, prefix, args) {
  /** callstack */
  if (_DISPLAY_CALLSTACK_LEVEL <= level) {
    if (! args.some(function(elem) { return (elem instanceof Error) && elem.stack; })) {
      args.push('\n' + Error('dummy').stack.split('\n').slice(4).join('\n'));
    }
  }

  if (_DISPLAY_ERROR_LEVEL <= level) {
    console.error(prefix, util.format.apply(null, args));
  } else {
    console.log(prefix, util.format.apply(null, args));
  }
}

/**
 * Module exports.
 */
module.exports = Log();
