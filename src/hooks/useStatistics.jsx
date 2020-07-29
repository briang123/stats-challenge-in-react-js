import { useState } from 'react';
import { useNumArray } from './';

export const useStatistics = (initialDataSet = []) => {
  const [dataSet, setDataSet] = useState(initialDataSet);
  const [mean, median, stdDev, mode] = useNumArray(dataSet);
  return { dataSet, setDataSet, mean, median, stdDev, mode };
};

export default useStatistics;
