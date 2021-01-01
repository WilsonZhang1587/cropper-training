let inputVideo = document.querySelector("#inputVideo");

// 定義要取得的影音內容，包含影像和聲音
let constraints = {
  audio: true,
  video: true
};

// 請求開啟影音裝置
navigator.mediaDevices
  .getUserMedia(constraints)
  .then(function(stream) {
    // 取得當前裝置的影音串流（stream）
    // inputVideoURL = URL.createObjectURL(stream);
    // inputVideo.src = inputVideoURL;
    inputVideo.srcObject = stream;
    inputVideo.controls = false; // 要不要顯示播放控制器
  })
  .catch(function(error) {
    // 如果有錯誤發生
    console.log(error);
  });

/* 當媒體的 metadata 載入後即播放媒體 */
inputVideo.addEventListener("loadedmetadata", e => {
  inputVideo.play();
});
// --------------------------------------------------------------------------------------------
{
  /* <script type="text/javascript">
  var oCanvas = document.getElementById('canvas');
  var ctx = oCanvas.getContext('2d');
  var video = document.querySelector('video');
  var constraints = {
      audio: false,
      video: true
  }
  navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
          video.play();
      };
      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
      return imageCapture.getPhotoSettings();
  }).then(photoSettings => {
      oCanvas.width = photoSettings.imageWidth;
      oCanvas.height = photoSettings.imageHeight;
  })
  .catch(function(err) {
      console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.

  document.getElementById('btn').onclick = function() {
      ctx.drawImage(video, 0, 0);
  };
  document.getElementById('sendBtn').onclick = function() {
          let sendData = oCanvas.toDataURL("image/jpeg");
          $("#localImage").val(sendData);
          $("#myForm").submit();
  };
</script> */
}

// ----------------原本-----------------------------------------------------------------
{
  /* <script type="text/javascript">
  let sendLocalImageData;
  var oCanvas = document.getElementById('canvas');
  var ctx = oCanvas.getContext('2d');
  var video = document.querySelector('video');
  var constraints = {
      audio: false,
      video: true
  }
  navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
      video.srcObject = mediaStream;
      video.onloadedmetadata = function(e) {
          video.play();
      };
      const track = mediaStream.getVideoTracks()[0];
      imageCapture = new ImageCapture(track);
      return imageCapture.getPhotoSettings();
  }).then(photoSettings => {
      oCanvas.width = photoSettings.imageWidth;
      oCanvas.height = photoSettings.imageHeight;
  })
  .catch(function(err) {
      console.log(err.name + ": " + err.message);
      }); // always check for errors at the end.

  document.getElementById('btn').onclick = function() {
      ctx.drawImage(video, 0, 0);
      sendLocalImageData = video;
  };
  document.getElementById('sendBtn').onclick = function() {
          let sendData = canvas.toDataURL("image/jpeg");
          $("#localImage").val(sendData);
          $("#myForm").submit();
  };
</script> */
}
