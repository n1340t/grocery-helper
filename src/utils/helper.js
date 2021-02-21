function debounce(func, wait) {
  let timeout;
  return function wrapper(...args) {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), wait);
  };
}

export default { debounce };
