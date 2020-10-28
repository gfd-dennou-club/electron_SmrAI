
// チャンネル 'asynchronous-reply' で非同期メッセージの受信を待機
window.ipc.on('asynchronous-reply', (arg) => {
  // 受信時のコールバック関数
  //console.log(arg) // pong
  const div = document.getElementById('box11');
  const p = document.createElement('p');
  p.textContent += arg;
  p.textContent += "<br>";
  div.innerHTML = p.textContent; 
});

// 非同期メッセージの送信
window.ipc.send('asynchronous-message')

// チャンネル 'test-exec' で非同期メッセージの受信を待機
/*window.ipc.on('test-exec', (arg) => {
    // 受信時のコールバック関数
    console.log(arg) // poing

    // 非同期メッセージの送信
    window.ipc.send('asynchronous-message', 'ping')
});*/
