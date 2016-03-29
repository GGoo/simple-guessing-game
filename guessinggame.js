/**
 * Created by Gosia on 17/01/16.
 */


var monuments = ['Muzeum Narodowe', 'Muzeum Historyczne', 'Muzeum Szekspirowskie'];
var target;
var counter = 0;
var userGuess;

function playingGame() {
    monuments = monuments.sort(function (item1, item2) {
        var item1Lower = item1.toLowerCase();
        var item2Lower = item2.toLowerCase();
        return item1Lower < item1Lower ? -1 : item1Lower > item2Lower ? 1 : 0;

    });

    var monumentsToDisplay = monuments.map(function (element, index) {
        if (index == 0) {
            return element;
        }
        else {
            return " " + element;
        }
    });
    target = monuments[generateNumber()];
    alert(target);

    do {
        userGuess = prompt("What museum Im having im mind?");
        counter++;
    }
    while (userGuess != null && !check_guess());

    /*GENERATE NUMBER */
    function generateNumber() {
        var randomNumber = Math.floor(Math.random() * monuments.length);
        return randomNumber;

    }
    /* GUESS */
    function check_guess() {
        userGuess = userGuess.toLowerCase();
        target = target.toLowerCase();
        if (IfnotMonuments()) {
            alert("Sorry, I don't recognize your museum.\n\nPlease try again.")
            return false;
        } else if (userGuess > target) {
            alert("Sorry, your guess is not correct!\n\n Hint: your monument is alphabetically higher than mine\n\nPlease try again.");
            return false;
        } else if (userGuess < target) {
            alert("Sorry, your guess is not correct!\n\n Hint: your monument is alphabetically lower than mine\n\nPlease try again.");
            return false;
        } else {

            document.body.style.backgroundColor = userGuess;
            alert("Congratulations! You have guessed my museum!\n\nIt took you " + counter + " guesses!");
        return true;
        }
    }
    // ==CHECK IF USER INPUT IS A MUSEUM FROM ARRAY
    function IfnotMonuments() {
        var notMonuments = true;
        var i = 0;
        while (i < monuments.length) {
            if (userGuess.toLowerCase() == monuments[i].toLowerCase()) {
                notMonuments = false;
                break;
            }
            i++
        }
        return notMonuments;
    }
}