var score=0;
function check_q_a(){
  var content=document.getElementById("q_a");
  var text="模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。";
  if(content==text){
    score+=10;
  }
  return score;
}
