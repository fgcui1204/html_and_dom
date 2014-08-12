var score=0;
function check_choose(){
  var choose_1=document.getElementsByName("choose_1");
  var choose_2=document.getElementsByName("choose_2");

  if(choose_1[1].checked){
    score+=10;
  }
  if(choose_2[0].checked){
    score+=10;
  }
  return score;
}
