import { useState } from 'react';
import { useNumArray } from './';

export const useStatistics = (initialDataSet = []) => {
  const [dataSet, setDataSet] = useState(initialDataSet);

  console.log('useStatistics', dataSet);

  const [mean, median, stdDev, mode] = useNumArray(dataSet);
  console.log('useStatistics', {
    dataSet,
    setDataSet,
    mean,
    median,
    stdDev,
    mode,
  });

  return { dataSet, setDataSet, mean, median, stdDev, mode };
};

export default useStatistics;
