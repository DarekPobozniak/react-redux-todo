/**
 * Defines a custom response handler for window.fetch
 * @type {Object}
 */
export const Fetch = {
  /**
   * Rejects Promise on HTTP non-2xx error statuses
   * @param  {object} response Contains: type, url, useFinalURL, status, ok, statusText, headers
   * @return {object}          Response object or an error object
   */
  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    }

    const error = new Error(`${response.statusText} (${response.status})`);
    error.response = response;
    throw error;
  },

  /**
   * Converts the raw data to JavaScript object
   * @param  {object} response Response object
   * @return {object}          JSON object
   */
  parseJSON(response) {
    return response.json();
  },
};

/**
 * Wraps native console method to avoid ESLint no-console error.
 * Does not show logs on development environment
 */
(function setDebug() {
  if (__DEV__) {
    window.debug = {
      log: window.console.log.bind(window.console),
      error: window.console.error.bind(window.console, 'error: %s'),
      info: window.console.info.bind(window.console, 'info: %s'),
      warn: window.console.warn.bind(window.console, 'warn: %s'),
    };
  } else {
    const noOp = () => undefined;

    window.debug = {
      log: noOp,
      error: noOp,
      warn: noOp,
      info: noOp,
    };
  }
}());
