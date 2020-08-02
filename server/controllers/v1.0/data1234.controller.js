const { getAxiosResponse, getAxiosErrorResponse } = require('../../utils/response');
const { getData1234 } = require('../../services/v1.0');

const getDataset = async (req, res) => {
  try {
    const data = getData1234();
    const response = getAxiosResponse({ data });
    return res.status(response.status).json(response);
  } catch (error) {
    const response = getAxiosErrorResponse(error);
    return res.status(response.status).json(response);
  }
};

module.exports = { getDataset };
