

export class Calculator {
  add() {
    return Array.from(arguments).reduce((acc, cur) => acc + cur);
  };

  subtract() {
    return Array.from(arguments).reduce((acc, cur) => acc - cur);
  };

  multiply() {
    return Array.from(arguments).reduce((acc, cur) => acc * cur);
  };

  divide() {
    let divisor = arguments[1];
    if (divisor === 0) return NaN;

    return Array.from(arguments).reduce((acc, cur) => acc / cur);
  };
};

export class ScientificCalculator extends Calculator {
  sin() {
    return Math.sin(arguments[0]);
  };

  cos() {
    return Math.cos(arguments[0]);
  }; 

  tan() {
    return Math.tan(arguments[0]);
  };

  log() {
    return Math.log(arguments[0]);
  };

};

export function withExponents(superclass) {
  return Object.assign({}, superclass, {
    pow(a, b) {
      return Math.pow(a, b);
    },

    multiplyExp(a, b) {
      return Math.pow(a[0], a[1]) * Math.pow(b[0], b[1]);
    },

    divideExp(a, b) {
      let divisor = Math.pow(b[0], b[1]);
      if (divisor === 0) return NaN;

      return Math.pow(a[0], a[1]) / divisor;
    }
  });
};

export const delay = (time, fn, method, args) => {
  return new Promise((resolve, reject) => {
    if (!fn[method]) reject(new Error('Function does not exist'));

    setTimeout(() => {
      resolve(fn[method].apply(null, args));
    }, time);
  });
};