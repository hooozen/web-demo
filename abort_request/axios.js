var axiosBtn = document.querySelector('#axios-request');
var abortAxiosBtn = document.querySelector('#axios-abort');

axiosBtn.addEventListener('click', axiosPost);
abortAxiosBtn.addEventListener('click', abortAxios);

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

var axios = new axios.Axios({});

function axiosPost() {
  axios.post(url, undefined, {
    cancelToken: source.token,
  }).then(function(res) {
    console.log('Axios: ', res.data);
  }).catch(e => {
    console.log('Axios error: ', e);
  });
}

function abortAxios() {
  console.log('尝试取消 axios 请求');
  source.cancel('axios 被取消');
}
