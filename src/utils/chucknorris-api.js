import axios from 'axios';

const BASE_URL = 'http://localhost:3333';

//exportしてコンポーネントで使えるようにする
export {getFoodData, getCelebrityData};

//axiosはAPIのendpointsから、以下の関数を用いてデータを取ってきます。
function getFoodData() {
  const url = `${BASE_URL}/api/jokes/food`;
  return axios.get(url).then(response => response.data);
}

function getCelebrityData() {
  const url = `${BASE_URL}/api/jokes/celebrity`;
  return axios.get(url).then(response => response.data);
}
