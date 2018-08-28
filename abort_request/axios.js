var axiosBtn = document.querySelector('#axios-request');
var abortAxiosBtn = document.querySelector('#axios-abort');

axiosBtn.addEventListener('click', axiosPost);
abortAxiosBtn.addEventListener('click', abortAxios);

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

/**
 * 开始一个 Axios Post 请求
 */
function axiosPost() {
  axios.post(url, undefined, {
    cancelToken: source.token,
  }).then(function(res) {
    console.log('Axios: ', res.data);
  }).catch(e => {
    console.log('Axios error: ', e);
  });
}

/**
 * 终止一个 Axios 请求
 */
function abortAxios() {
  console.log('尝试终止 axios 请求');
  source.cancel('axios 被终止');
}
