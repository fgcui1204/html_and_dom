function getScore(){
  //alert(check_fill_blank());
  // alert(check_choose());
  // alert(check_chooses());

  var score = check_fill_blank()+check_choose()+check_chooses()+check_gudge();
  // alert(score);
  document.getElementById("score").innerHTML=score;
}
