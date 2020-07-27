const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR, getStatusText } = require('http-status-codes');

const getAxiosResponse = ({ data, status = null, statusText = null }) => {
  if (data && status && statusText) return { data, status, statusText };

  if (Array.isArray(data)) {
    return data.length > 0 ? getOkResponse(data) : getNotFoundResponse(data);
  }

  return data ? getOkResponse(data) : getNotFoundResponse(data);
};

const getAxiosErrorResponse = (error) => ({
  error,
  status: INTERNAL_SERVER_ERROR,
  statusText: getStatusText(INTERNAL_SERVER_ERROR),
});

const getOkResponse = (data) => ({ data, status: OK, statusText: getStatusText(OK) });

const getNotFoundResponse = (data) => ({
  data,
  status: NOT_FOUND,
  statusText: getStatusText(NOT_FOUND),
});

module.exports = {
  getAxiosErrorResponse,
  getAxiosResponse,
  getOkResponse,
  getNotFoundResponse,
};
