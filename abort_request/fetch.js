var fetchBtn = document.querySelector('#fetch-request');
var abortFetchBtn = document.querySelector('#fetch-abort');

var controller = new AbortController();
var signal = controller.signal;

fetchBtn.addEventListener('click', startFetch);
abortFetchBtn.addEventListener('click', abortFetch);

/**
 * 开始 fetch 请求
 */
function startFetch() {
  var options = {
    method: 'POST',
    signal,
  }
  fetch(url, options).then(function (res) {
    res.text().then(function (text) {
      console.log('Fetch: ', text);
    });
  }).catch(function (error) {
    console.log(error);
  });
}

/**
 * 终止 fetch 请求
 */
function abortFetch() {
  console.log('尝试终止 fetch 请求');
  controller.abort();
}
