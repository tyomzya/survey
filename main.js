var answerNode = document.getElementById('answer');
var sendButtonNode = document.getElementById('sendButton');
var resultNode = document.getElementById('result');
sendButtonNode.addEventListener('click', function () {
    var currentYear = "2024";
    if (answerNode.value == '') {
        return;
    }
    if (answerNode.value == currentYear) {
        resultNode.innerHTML = "<div class=\"result-right\">\n        <p class=\"right-font\">\u041E\u0442\u0432\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439! :)</p>\n      </div>";
    }
    else {
        resultNode.innerHTML = "<div class=\"result-wrong\">\n        <p class=\"wrong-font\">\u041E\u0442\u0432\u0435\u0442 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 :(</p>\n      </div>";
    }
});
