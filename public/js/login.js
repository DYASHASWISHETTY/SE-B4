$('#login').click(() => {
    var data = { usn : $('#usn').val(), pass: $('#pass').val(),id:"student"};
    var url = `${location.protocol}//${location.host}/login/student`;
   
    // Function which displays whether the login password is right and takes actions accordingly
   
    displayMessage = (res) => {
        if(res==false)
        {
            $("#usn_response").html("<span class='exists'>Incorrect USN or password</span>");
        }
        else
        {
         html = $.parseHTML(res);
         $('body').html(html);
        }
    }
    
    // Ajax request to check the existence of USN
    $.ajax({
        url:url,
        data:data,
        method:'POST',
        success:displayMessage
    });
});