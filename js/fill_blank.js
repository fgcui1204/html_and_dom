var score=0;
function check_fill_blank(){

  var fill_1=document.getElementsByName("fill_1");
  var fill_2=document.getElementsByName("fill_2");
  if("统一建模语言"===fill_1[0].value){
    score+=10;
  }
  if("封装性"===fill_2[0].value){
    score+=10;
  }
  if("多态性"===fill_2[1].value){
    score+=10;
  }
  if("继承性"===fill_2[2].value){
    score+=10;
  }
  return score;
  //alert(fill_1_1[0].value);
}
