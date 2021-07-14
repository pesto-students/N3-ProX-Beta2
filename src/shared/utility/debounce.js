const debounce = (func, time = 300) => {
  let timer;
  return function (...args) {
    const context = this;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, time);
  };
};

export default debounce;
