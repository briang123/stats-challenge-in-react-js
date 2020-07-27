const { getAxiosResponse, getAxiosErrorResponse } = require('../../utils/response');
const { getData4321 } = require('../../services/v1.0');

const getDataset = async (req, res) => {
  try {
    const data = getData4321();
    const response = getAxiosResponse({ data });
    res.status(response.status).json(response);
  } catch (error) {
    const response = getAxiosErrorResponse(error);
    res.status(response.status).json(response);
  }
};

module.exports = { getDataset };
