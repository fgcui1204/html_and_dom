
function checkInfo(){
  var stu_Class=document.getElementById("stu_Class").value;
  var stu_Id=document.getElementById("stu_Id").value;
  var stu_Name=document.getElementById("stu_Name").value;
  if(stu_Class===""){
    alert("班级、学号、姓名不能为空");
    document.getElementById("error_Class").style.color = 'red';

  }else if(stu_Id===""){
    //alert("班级、学号、姓名不能为空");
    document.getElementById("error_Id").style.color = 'red';

  }else if(stu_Name===""){
    //alert("班级、学号、姓名不能为空");
    document.getElementById("error_Name").style.color = 'red';

  }
}
