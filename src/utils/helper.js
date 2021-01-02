function debounce(func, wait) {
  let timeout;
  return function (...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      return func.apply(context, args);
    }, wait);
  };
}

export { debounce };
