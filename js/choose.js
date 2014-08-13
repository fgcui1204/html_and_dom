function Check_choose(name,answer,scoreUnit){
    Topic.call(this,name,answer,scoreUnit);
}
Check_choose.prototype=Object.create(Topic.prototype);
Check_choose.prototype.constructor=Check_choose;
Check_choose.prototype.calculate=function(){
    var choose=document.getElementsByName(this.name);
    var myanswer="";
    for(var i=0;i<choose.length;i++){
        if(choose[i].checked){
            myanswer+=choose[i].value;
        }
    }
    if(myanswer===this.answer){
        return this.scoreUnit;
    }
    return 0;
}