document.getElementById("submit-btn").addEventListener("click", answer);

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    answer();
  }
});

function answer() {
  var inputElement = document.getElementById("input");
  var inputValue = inputElement.value;

  if (inputValue.trim() === "") {
    return;
  }

  var chatLogs = document.querySelector(".chatlogs");

  var newChat = document.createElement("div");
  newChat.classList.add("chat", "user");

  var userPhoto = document.createElement("div");
  userPhoto.classList.add("user-photo");

  var chatMessage = document.createElement("p");
  chatMessage.classList.add("chat-message");
  chatMessage.textContent = inputValue;

  newChat.appendChild(userPhoto);
  newChat.appendChild(chatMessage);

  chatLogs.appendChild(newChat);
  inputElement.value = "";

  var answerChat = document.createElement("div");
  answerChat.classList.add("chat", "bot");

  var answerUserPhoto = document.createElement("div");
  answerUserPhoto.classList.add("user-photo");

  var answerChatMessage = document.createElement("p");
  answerChatMessage.classList.add("chat-message");
  answerChatMessage.textContent = "Vui lòng chờ...";

  answerChat.appendChild(answerUserPhoto);
  answerChat.appendChild(answerChatMessage);

  chatLogs.appendChild(answerChat);

  var xhr = new XMLHttpRequest();
  var url = "https://api.pearktrue.cn/api/gpt/?message=" + inputValue;

  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xhrStrgify = JSON.parse(xhr.responseText);
      var string = xhrStrgify.answer;
      var charsArray = string.split("");
      var i = 0;

      answerChatMessage.textContent = "";

      var intervalId = setInterval(function () {
        if (i < charsArray.length) {
          answerChatMessage.textContent += charsArray[i];
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);
    }
  };
}

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function() {
  const chatlogs = document.querySelector(".chatlogs");
  chatlogs.innerHTML = "";
});
