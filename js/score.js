 function getScore() {
        var answers = Answers();
        var score = 0;
        for(var i=0;i<answers.length;i++){
            score+=answers[i].calculate();
        }
        return score;
 }

