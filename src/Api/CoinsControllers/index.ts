import {axios} from 'Api/Config';
import store from 'Data/Store';

const getCoinsList = async (base: string) => {
  const result = await new Promise((resolve, reject) => {
    const symbolsInState = store.getState().coins.balance;
    const symbols = Object.keys(symbolsInState).join(',');
    axios
      .get(`/latest?base=${base}&symbols=${symbols}`)
      .then(response => {
        resolve(response.data.rates);
      })
      .catch(error => {
        console.log('error', error);
        reject(error);
      });
  });
  return result;
};

export {getCoinsList};
