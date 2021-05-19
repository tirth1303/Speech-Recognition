var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
var myRecognition = new SpeechRecognition();
const text = $("#text");
let content = "";
const instruction = $("#instruction");

myRecognition.continuous = true;
myRecognition.lang = "en-US";

$("#start-btn").click(function (event) {
  myRecognition.start(event);
  instruction.text("Recognition is started");
});

myRecognition.onresult = function (event) {
  var current = event.resultIndex;

  var transcript = event.results[current][0].transcript;
  content += transcript;

  text.val(content);
};

$("#reset-btn").click((event) => {
  text.val("");
});

$("#stop-btn").click((event) => {
  myRecognition.abort(event);
  instruction.text("Recognition is stopped");
});

$("#save-btn").click((event) => {
  $("#instruction").append(
    "<div class='notes'>This feature is under construction</div>"
  );
});
