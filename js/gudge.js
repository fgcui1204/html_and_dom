var score=0;
function check_gudge(){
  var gudge_1=document.getElementsByName("gudge_1");
  var gudge_2=document.getElementsByName("gudge_2");
  if(gudge_1[1].checked){
    //alert(score);
    score+=10;
  }
  if(gudge_2[0].checked){
    score+=10;
  }
  return score;
}
