'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// main.js


// 発表カウントダウン

let countdown;
let time = 270; // タイマーの設定値

function startTimer() {
    document.getElementById('startButton').disabled = true;

    countdown = setInterval(function () {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;

        document.getElementById('timer').innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        if (time === 0) {
            clearInterval(countdown);
            document.getElementById('message').style.display = 'block';
        } else {
            time--;
        }
    }, 1000);
}



// YouTube埋め込み
// YouTubeの動画IDを指定
const youtubeVideoID = "Dal9doOyrhazhSNF";

// YouTubeプレーヤーの埋め込みコードを生成
const youtubeEmbedCode = `<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/Dal9doOyrhazhSNF"
    frameborder="0"
    allowfullscreen
></iframe>`;

// YouTubeプレーヤーをページに挿入
document.getElementById('youtubePlayer').innerHTML = youtubeEmbedCode;



// Google Map埋め込み
// Google Mapの初期化関数
function googleMap() {
    const map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: YOUR_LATITUDE, lng: YOUR_LONGITUDE}, // 地図の中心部の座標
        zoom: 15
    });
}


ログイン画面

const correctPassword = "password"; // 実際のパスワード設定

function validatePassword() {
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (passwordInput === correctPassword) {
        // パスワードが正しい場合はログイン成功
        errorMessage.textContent = "Login Successful!";
        errorMessage.style.color = "green";
    } else {
        // パスワードが正しくない場合はエラーメッセージを表示
        errorMessage.textContent = "Invalid Password. Please try again.";
        errorMessage.style.color = "red";
    }
}



// うどんの表示を行う関数
function gators() {
    const gatorCountInput = document.getElementById("gatorCount");
    const gatorContainer = document.getElementById("gatorBox");
  
     gatorContainer.innerHTML = '';
  
    const gatorCount = parseInt(gatorCountInput.value);

    if (!isNaN(gatorCount) && gatorCount > 0) {
    
      for (let i = 0; i < gatorCount; i++) {
  
        const gator = document.createElement("span");
 
        gator.textContent = '🍜';

        gatorContainer.appendChild(gator);
      }
    }
  }

function scrollToBottom() {
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.scrollHeight;

    window.scrollTo({
        top: bodyHeight - windowHeight,
        behavior: 'smooth'
    });
}


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // ユーザー名とパスワード
    var validUsername = "user";
    var validPassword = "password";
  
    if (username === validUsername && password === validPassword) {
      // ログイン成功
      alert("ログイン成功！");
      // 遷移するページのURL
      window.location.href = "index.html";
    } else {
      // ログイン失敗
      alert("ユーザー名またはパスワードが正しくありません。");
    }
  }

document.getElementById('redirectButton').addEventListener('click', function() {
    // ここで遷移したいページのURLを指定します
    window.location.href = "login.html";
  });
