'use strict';


/**
 *
 */
module.exports = function() {
  const timer = {started: Date.now()};
  timer.time = () => Date.now() - timer.started;
  return Object.freeze(timer);
};
