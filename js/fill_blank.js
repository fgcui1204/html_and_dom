function Fill_blank(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}
Fill_blank.prototype = Object.create(Topic.prototype);
Fill_blank.prototype.constructor = Fill_blank;
Fill_blank.prototype.calculate = function () {
    var fill_answers = document.getElementsByName(this.name);
    var myanswer='';
    for(var i=0;i<fill_answers.length;i++){
        myanswer=fill_answers[i].value;
    }
    if (myanswer === this.answer) {
        return this.scoreUnit;
    }
    return 0;
}