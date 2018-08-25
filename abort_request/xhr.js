var xhrRequestBtn = document.querySelector('#xhr-request');
var xhrAbortBtn= document.querySelector('#xhr-abort');

var xhr = new XMLHttpRequest();

xhrRequestBtn.addEventListener('click', sendXHRRequest);
xhrAbortBtn.addEventListener('click', abortXHRRequest);

/**
 * 发送 XHR 请求
 */
function sendXHRRequest() {
  xhr.open('POST', url);
  xhr.onreadystatechange = function()  {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('XHR: ', xhr.responseText);
    }
  }
  xhr.send(JSON.stringify(data));
}

/**
 * 取消 XHR 请求
 */
function abortXHRRequest() {
  console.log('尝试取消 XHR 请求');
  xhr.abort();
}