var answer = document.getElementById('answer');
var sendButton = document.getElementById('sendButton');
var result = document.getElementById('result');
sendButton.addEventListener('click', function () {
    var currentYear = "2024";
    if (answer.value == '') {
        return;
    }
    if (answer.value == currentYear) {
        result.innerHTML = "<div class=\"result-right\">\n        <p class=\"right-font\">\u041E\u0442\u0432\u0435\u0442 \u0432\u0435\u0440\u043D\u044B\u0439! :)</p>\n      </div>";
    }
    else {
        result.innerHTML = "<div class=\"result-wrong\">\n        <p class=\"wrong-font\">\u041E\u0442\u0432\u0435\u0442 \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 :(</p>\n      </div>";
    }
});
