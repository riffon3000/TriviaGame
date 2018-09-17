$(document).ready(function () {
    // initialize array of objects of questions and answers
    var questions = [
        {
            question: "What was the first full length CGI movie?",
            choices: ["A Bug's Life", "Monsters Inc.", "Toy Story", "The Lion King"],
            answer: "Toy Story",
            reference: "toy",
        },
        {
            question: "Which of these is NOT a name of one of the Spice Girls?",
            choices: ["Sporty Spice", "Fred Spice", "Scary Spice", "Posh Spice"],
            answer: "Fred Spice",
            reference: "fred",
        },
        {
            question: "Which NBA team won the most titles in the 90's?",
            choices: ["New York Knicks", "Portland Trailblazers", "Los Angeles Lakers", "Chicago Bulls"],
            answer: "Chicago Bulls",
            reference: "bulls",
        },
        {
            question: "Which group released the hit song, \"Smells Like Teen Spirit\"?",
            choices: ["Nirvana", "Backstreet Boys", "The Offspring", "No Doubt"],
            answer: "Nirvana",
            reference: "nirvana",
        },
        {
            question: "Which popular Disney movie featured the song, \"Circle of Life\"?",
            choices: ["Aladdin", "Hercules", "Mulan", "The Lion King"],
            answer: "The Lion King",
            reference: "king",
        },
        {
            question: "Finish this line from the Fresh Prince of Bel-Air theme song: \"I whistled for a cab and when it came near, the license plate said...\"",
            choices: ["Dice", "Mirror", "Fresh", "Cab"],
            answer: "Fresh",
            reference: "fresh",
        },
        {
            question: "What was Doug's best friend's name?",
            choices: ["Skeeter", "Mark", "Zach", "Cody"],
            answer: "Skeeter",
            reference: "skeeter",
        },
        {
            question: "What was the name of the principal at Bayside High in Saved By The Bell?",
            choices: ["Mr. Zhou", "Mr. Driggers", "Mr. Belding", "Mr. Page"],
            answer: "Mr. Belding",
            reference: "belding",
        },
    ]

    var start = $("#start-btn").on("click", function () {
        $("#start").hide();
        $("#trivia").show();
        counter(30);
        displayQuestions();
    });

    // countdown timer
    var counter = function (sec) {

        var timeRemaining = setInterval(function () {
            sec = sec--;
            $("#time-remaining").text("Time remaining: " + sec + " seconds");

            if (sec <= 0) {
                triviaResult();
                return;
            }
        }, 1000);

        // click event for submit button that stops timer
        $("#submit-btn").on("click", function () {
            clearInterval(timeRemaining);
        })
    };

    var displayQuestions = function () {
        $("#questions :not(\"#submit-btn\")").empty();

        // loops through questions
        for (var j = 0; j < questions.length; j++) {
            $("#questions").append("<div>" + questions[j].question + "</div>");
        }
        //   loops through choices
        for (var z = 0; z <= questions[z].choices.length; z++) {
            $("#questions").append("<input type=\"radio\" name=\"" + questions[z].reference + "value=\"" + questions[z].answer)
        }
    }

    var triviaResult = function() {
        $("#trivia").hide();
        var totalCorrect = 0;
        var totalWrong = 0;
        var totalUnanswered = questions.length - (totalCorrect + totalWrong);

        // loop through questions array to check answers
        for (var i = 0; i < questions.lenth; i++) {
            if ($("input:radio[name=\"" + questions[i].reference + "\"]:checked").val() === questions[i].answer) {
                totalCorrect++;
            }
            else {
                totalWrong++;
            };
        }
        $("#total-correct").append(totalCorrect);
        $("#total-wrong").append(totalWrong);
        $("#total-unanswered").append(totalUnanswered);
        $("#results").show();
        clearInterval(timeRemaining);
    }
});