import axios from 'axios';

axios.get(`https://www.gs1.org/services/verified-by-gs1/results?gtin=${String(data)}`)
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.log(error.message);
});