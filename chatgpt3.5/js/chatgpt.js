document.getElementById("submit-btn").addEventListener("click", answer);
document.addEventListener("keydown", function(event) {
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
  answerUserPhoto.classList.add("bot-photo");

  var answerChatMessage = document.createElement("p");
  answerChatMessage.classList.add("chat-message");
  answerChatMessage.textContent = "Vui lòng chờ...";

  var spinnerIcon = document.createElement("span");
  spinnerIcon.classList.add("spinner", "fas", "fa-spinner", "fa-pulse");

  var botNameSpan = document.createElement("span");
  botNameSpan.classList.add("bot-name");
  botNameSpan.textContent = "Bot"; // Tên bot của bạn

  answerChat.appendChild(answerUserPhoto);
  answerChat.appendChild(answerChatMessage);
  answerChat.appendChild(spinnerIcon);
  answerChat.appendChild(botNameSpan);

  chatLogs.appendChild(answerChat);

  var xhr = new XMLHttpRequest();
  var url = "https://api.pearktrue.cn/api/gpt/?message=" + inputValue;

  xhr.open("GET", url, true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var xhrStrgify = JSON.parse(xhr.responseText);
      var string = xhrStrgify.answer;
      var charsArray = string.split("");
      var i = 0;

      answerChatMessage.textContent = "";

      var intervalId = setInterval(function() {
        if (i < charsArray.length) {
          answerChatMessage.textContent += charsArray[i];
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 50);

      answerChat.removeChild(spinnerIcon); // Xóa biểu tượng spinner sau khi hoàn thành gửi tin nhắn
    }
  };

  inputElement.disabled = true; // Disable input while bot is answering
  document.getElementById("submit-btn").disabled = true; // Disable submit button while bot is answering

  setTimeout(function() {
    inputElement.disabled = false; // Enable input after bot has answered
    document.getElementById("submit-btn").disabled = false; // Enable submit button after bot has answered
  }, 2000); // Adjust the timeout value as needed
}

const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function() {
  const chatlogs = document.querySelector(".chatlogs");
  const chatMessages = chatlogs.querySelectorAll(".chat");

  chatMessages.forEach(function(chatMessage) {
    if (chatMessage.classList.contains("user") || chatMessage.classList.contains("bot")) {
      chatlogs.removeChild(chatMessage);
    }
  });
});

