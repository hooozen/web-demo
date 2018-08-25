var _fetchBtn = document.querySelector('#_fetch-request');
var _abortFetchBtn = document.querySelector('#_fetch-abort');

_fetchBtn.addEventListener('click', _startFetch);
_abortFetchBtn.addEventListener('click', _abortFetch);

/**
 * 封装一个模拟 abort 的 fetch
 * @param {接口地址} url 
 * @param {fetch 选项} options 
 */
function _fetch(url, options) {
  var abort = null;
  var abortPromise = new Promise(function(resolve, reject) {
    abort = reject;
  });
  var fetchPromise = fetch(url, options);
  var promise = Promise.race([abortPromise, fetchPromise]);
  promise.abort = abort;
  return promise;
}

var fetchAPI;

/**
 * 开始 fetch 请求
 */
function _startFetch() {
  fetchAPI = _fetch(url, { method: 'POST' });
  fetchAPI.then(function(res) {
    res.text().then(function(text) {
      console.log('_fetch: ', text);
    });
  }).catch(function(e) {
    console.log(e);
  });
}

/**
 * 跳过请求处理
 */
function _abortFetch() {
  console.log('"取消"_fetch请求');
  fetchAPI.abort('abort 竞速成功');
}
