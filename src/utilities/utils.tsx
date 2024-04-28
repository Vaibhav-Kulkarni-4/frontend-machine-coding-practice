export function debounce(fn: Function, delay: number): Function {
  let timeoutID: NodeJS.Timeout;
  return (...args: any[]) => {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
