var Logger = {};

Logger.install = function(Vue, options) {
	var level = 'debug';
	var logLevel = 0;

	var __getConsoleLevel = function(levelString) {
        
        var log_level = 0;

		switch (levelString) {
			case 'debug':
				return 'log';
			case 'info':
				return 'info';
			case 'warn':
				return 'warn';
			case 'error':
				return 'error';
			case 'fatal':
				return 'error';
			case 'exception':
				return 'error';
		}

		return 'log';
	};

	var __getLevel = function(levelString) {
		var log_level = 1;

		switch (levelString) {
			case 'debug':
				log_level = 1;
				break;
			case 'info':
				log_level = 2;
				break;
			case 'warn':
				log_level = 3;
				break;
			case 'error':
				log_level = 4;
				break;
			case 'fatal':
				log_level = 5;
				break;
			case 'exception':
				log_level = 5;
				break;
		}

		return log_level;
	};

	var __updateNumericLogLevel = function() {
		switch (level) {
			case 'debug':
				logLevel = 1;
				break;
			case 'info':
				logLevel = 2;
				break;
			case 'warn':
				logLevel = 3;
				break;
			case 'error':
				logLevel = 4;
				break;
			case 'fatal':
				logLevel = 5;
				break;
		}
	};

	/*
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};
    */

	var __message = function(ctx, args, level) {
		if (__getLevel(level) < logLevel || typeof console === 'undefined') {
			return;
		}

		var name = '';
		if (ctx.$options && ctx.$options.name) {
			name = ctx.$options.name;
			args.unshift('%c' + name, 'font-weight: bold; color: #2196F3');
		}

		//args.unshift(('[' + level + ']' + name).toUpperCase());
		if (console[__getConsoleLevel(level)]) {
			console[__getConsoleLevel(level)].apply(console, args);
		}

		//logger[prevStateLevel]('%c ' + __getConsoleLevel(level), 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);
	};

	if (options) {
		// Process options...
		if (options.level) {
			level = options.level;
		}
		__updateNumericLogLevel();
	}

	Vue.log = Vue.prototype.$log = function() {
		__message(this, Array.from(arguments), 'debug');
	};

	Vue.logDebug = Vue.prototype.$logDebug = function() {
		__message(this, Array.from(arguments), 'debug');
	};

	Vue.logInfo = Vue.prototype.$logInfo = function() {
		__message(this, Array.from(arguments), 'info');
	};

	Vue.logWarn = Vue.prototype.$logWarn = function() {
		__message(this, Array.from(arguments), 'warn');
	};

	Vue.logError = Vue.prototype.$logError = function() {
		__message(this, Array.from(arguments), 'error');
	};
};

export default Logger;
