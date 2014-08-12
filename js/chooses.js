var score=0;
function check_chooses(){
  var chooses_1=document.forms[0].chooses_1;
  var chooses_2=document.forms[0].chooses_2;

  if(chooses_1[0].checked&&chooses_1[1].checked&&chooses_1[3].checked){
    score+=10;
  }
  if(chooses_2[0].checked&&chooses_2[1].checked&&chooses_2[2].checked){
    score+=10;
  }
  return score;
//  alert(chooses_1[0].checked&&chooses_1[1].checked&&chooses_1[2].checked);
}
