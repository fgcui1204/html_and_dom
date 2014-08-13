$(document).ready(function(){
    //var stu_Class=document.getElementById("stu_Class").value;
    var stu_Class = $("#stu_Class");
    var stu_Id = $("#stu_Id");
    var stu_Name = $("#stu_Name");
    $('#ok_button').on('click',function(){
        if (stu_Class.val() === ''||stu_Id.val() === ''||stu_Name.val() === '') {
            $('#myModal').modal({keyboard: false});
            $('#error_Class').addClass('has-error');
            $('#error_Id').addClass('has-error');
            $('#error_Name').addClass('has-error');
        }else{
            $('#error_Class').removeClass('has-error');
            $('#error_Id').removeClass('has-error');
            $('#error_Name').removeClass('has-error');
        }
        var score=getScore();
        if(score!=0){
            $("#score_div").addClass('text-danger');
            $("#score").text(score+"分");
        }
        return false;
    });

});
