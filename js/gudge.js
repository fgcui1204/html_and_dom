function Gudge(name,answer,scoreUnit){
    Topic.call(this,name,answer,scoreUnit);
}
Gudge.prototype=Object.create(Topic.prototype);
Gudge.prototype.constructor=Gudge;
Gudge.prototype.calculate=function(){
    var gudge=document.getElementsByName(this.name);
     var myanswer='';
    for(var i=0;i<gudge.length;i++){
        if(gudge[i].checked){
            myanswer+=gudge[i].value;
        }
    }
    if(myanswer===this.answer){
        return this.scoreUnit;
    }
    return 0;
}

