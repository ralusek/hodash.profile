'use strict';


/**
 *
 */
module.exports = function(name) {
  return new Timer(name);
};



// This establishes a private namespace.
const namespace = new WeakMap();
function p(object) {
  if ( namespace.has(object)) namespace.set(object, {});
  return namespace.get(object);
}



/**
 *
 */
class Timer {
  constructor(name) {
    p(this).name = name;

    p(this).start = Date.now()
  }

  /**
   *
   */
  end() {
    if(!p(this).end) {
      (p(this).end = Date.now());
      p(this).timeTaken = p(this).end - p(this).start;
    }
  }

  /**
   *
   */
  output() {
    const output = {
      start: p(this).start,
      end: p(this).end,
      timeTaken: p(this).timeTaken
    };

    if (p(this).name) output.name = p(this).name;

    return output;
  }
}
