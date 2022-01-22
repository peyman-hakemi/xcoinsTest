import {axios} from 'Api/Config';

const getCoinsList = async () => {
  const result = await new Promise((resolve, reject) => {
    axios
      .get('/latest?base=USD&symbols=USD,EUR,GBP')
      .then(response => {
        resolve(response.data.rates);
      })
      .catch(error => {
        reject(error);
      });
  });
  return result;
};

export {getCoinsList};
