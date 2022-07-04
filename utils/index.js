/**
 *
 * @param  callBack CallBack function to be executed
 * @param  delay Delay in ms
 * @returns Throttled function, function that will be executed every `delay`ms
 */

export const throttle = (callBack, delay) => {
    let timerId;

    const executor = (args) => {
        if (timerId) return;

        timerId = setTimeout(() => {
            callBack(args);
            timerId = undefined;
        }, delay);
    };

    executor.cancel = () => {
        if (!timerId) return;
        clearTimeout(timerId);
    };

    return executor;
};

/**
 *
 * @param  callBack CallBack function to be executed
 * @param  delay Delay in ms
 * @returns Debouncing function, function that will be executed after `delay`ms of the last call
 */

export const debounce = (callBack, delay) => {
    let timerId;

    const executor = (args) => {
        if (timerId) clearTimeout(timerId);

        timerId = setTimeout(callBack.bind(this, args), delay);
    };

    executor.cancel = () => {
        if (!timerId) return;
        clearTimeout(timerId);
    };

    return executor;
};
