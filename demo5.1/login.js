< script type = "text/javascript" >

    //$(document).on("pageinit","#page1",function(){
    function msg_submit() {
        val = $("#name")[0].value;
        validateName(val);
        val1 = $("#password")[0].value;
        validatePassword(val1);

        if ((send_user(val, val1)) == true) {
            window.location.href = 'activity_create.html';
        }

    }

function send_user(field, field1) {
    $.getJSON("http://127.0.0.1/login/login.php?name=" + field1 + "&password=" + field2 + "&callback=?",
        function(json) {
            //alert(field+" has login");
            return true;
        })
}


function msg_forget() {
    window.location.href = 'registered.html';
}



function validatePassword(field) {
    if (field == "") {
        alert("No Password was entered");
        reset_password();
    } else if (field.length < 6) {
        alert("Password must be at least 6 characters");
        reset_password();
    } else if (!/[a-z]/.test(field) || !/[A-Z]/.test(field) ||
        !/[0-9]/.test(field)) {
        alert("Password require one each of a-z,A-Z and 0-9");
        reset_password();
    }
}



function validateName(field) {
    if (field == "") {
        alert("No username input");
        msg_reset_name();
    }
}



function reset_password() {
    $("input:password").val("");
}



function msg_reset_name() {
    $("input:text").val("");
}



< /script>
