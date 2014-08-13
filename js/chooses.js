function Check_chooses(name,answer,scoreUnit){
    Topic.call(this,name,answer,scoreUnit);
}
Check_chooses.prototype=Object.create(Topic.prototype);
Check_chooses.prototype.constructor=Check_chooses;
Check_chooses.prototype.calculate=function(){
    var chooses=document.getElementsByName(this.name);
    var myanswer='';
    for(var i=0;i<chooses.length;i++){
        if(chooses[i].checked){
            myanswer+=chooses[i].value;
        }
    }
    if(myanswer===this.answer){
        return this.scoreUnit;
    }
    return 0;
}