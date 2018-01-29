

class Calculator {
  add() {
    return Array.from(arguments).reduce((acc, cur) => acc + cur);
  }

  subtract() {
    return Array.from(arguments).reduce((acc, cur) => acc - cur);
  }

  multiply() {
    return Array.from(arguments).reduce((acc, cur) => acc * cur);
  }

  divide() {
    if (arguments[1] === 0) return NaN;
    return Array.from(arguments).reduce((acc, cur) => acc / cur);
  }
}

const extend = (a, b) => {
  for (var key in a) {
    b[key] = a[key];
  }
}

class ScientificCalculator extends Calculator {
  sin() {
    return Math.sin(arguments[0]);
  }

  cos() {
    return Math.cos(arguments[0]);
  }  

  tan() {
    return Math.tan(arguments[0]);
  }

  log() {
    return Math.log(arguments[0]);
  }

}


const withExponents = {
  pow: (a, b) => {
    return Math.pow(a, b);
  },

  multiplyExp: (a, b) => {
    return pow(a) * pow(b);
  },

  divideExp: (a, b) => {
    return pow(a) / pow(b);
  }
}

const delay = async (time, fn, method, args) => {
  return (new Promise((resolve, reject) => {
    if (!fn[method]) reject(new Error('Function does not exist'));

    
    let delayedFn = await setTimeout(() => {
      return fn[method].call(args);
    }, time)();

    resolve(delayedFn);
  }))();
}

module.exports.Calculator = Calculator;
module.exports.ScientificCalculator = ScientificCalculator;
module.exports.withExponents = withExponents;
module.exports.delay = delay;
