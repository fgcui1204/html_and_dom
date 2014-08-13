function Q_a(name, answer, scoreUnit) {
    Topic.call(this, name, answer, scoreUnit);
}
Q_a.prototype = Object.create(Topic.prototype);
Q_a.prototype.constructor = Q_a;
Q_a.prototype.calculate = function () {
    var myanswer = document.getElementsByName(this.name);
    if (myanswer === this.answer) {
        return this.scoreUnit;
    }
    return 0;
}