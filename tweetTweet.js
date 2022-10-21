//DOM selecetion
const form = document.querySelector("form");
const addTweetElm = document.querySelector(".addTweet");
const textInputElm = document.querySelector(".textInput");
const submitBtnElm = document.querySelector(".submit-btn button");
const showTweetsELm = document.querySelector(".showTweets");
const filterELm = document.querySelector("#filter");
const collectionElmUl = document.querySelector(".collection");
const msgElm = document.querySelector(".msg");

let texts = [];

function receiveInput() {
  const text = textInputElm.value;
  return { text };
}
function clearMessage() {
  msgElm.textContent = "";
}

function showMessage(msg, action = "success") {
  const textMsg = `<div class="alert alert-${action}" role="alert">
        ${msg}
      </div>`;
  msgElm.insertAdjacentHTML("afterbegin", textMsg);
  setTimeout(() => {
    clearMessage();
  }, 2000);
}

function showTextUI(textInfo) {
  const { id, text } = textInfo;
  console.log(id);
  console.log(textInfo);
  const elm = `<li class="list-group-item">
  <div class="tweet-info">
    <p>
      <strong><span>${id}</span></strong>
      <strong>${text}</strong>
      <button style="float: right">
        <i class="float-right">Delete</i>
      </button>
    </p>
  </div>
</li>`;

  collectionElmUl.insertAdjacentHTML("beforeend", elm);
  showMessage("Product added successfuly");
}

function validInput(text) {
  let isValid = true;
  if (text === "") {
    isValid = false;
    showMessage("Please Write Something First", "danger");
  }
  return isValid;
}

function resetInput() {
  textInputElm.value = "";
}

function addTweets(text) {
  const message = {
    id: texts.length + 1,
    text,
  };
  texts.push(message);
  console.log(texts.length);
  return message;
}

function handleFormSubmit(evt) {
  evt.preventDefault();

  // receiving input value
  const { text } = receiveInput();

  // checking validation
  const isValid = validInput(text);
  if (!isValid) return;

  // reset input value
  resetInput();

  // add TweetText
  const message = addTweets(text);
  // add input to UI
  showTextUI(message);
}
form.addEventListener("submit", handleFormSubmit);
