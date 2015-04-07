function init() {
    // the next line makes it impossible to see Contacts on the HTC Evo since it
    // doesn't have a scroll button
    // document.addEventListener("touchmove", preventBehavior, false);
   document.addEventListener("deviceready", myDeviceReadyListener, false);
   alert("hllo");
}

 	function myDeviceReadyListener(){

				var username, password, confirmpassword;
				username=$(document).getElementById("name").value;
				password=document.getElementById("password").value;
				confirmpassword=document.getElementByID("confirm_password").value;
				alert("hllooooo");
				
				function submit(username,password,confirmpassword){
					function validation(username,password,confirmpassword){
							fail=validation_username(username);
							fail+=validation_password(password);
							fail+=validation_confirmpassword(password,confirmpassword);
							
							if(fail=="") return true;
							else{
									alert(fail);return false;
								}
						}//end of validation
						
					}//end of submit
				
				function validation_username(field){
					return (field=="")?"No username was entered\n":""
					}
				function validation_password(field){
					return (field=="")?"NO password was entered\n":""
					}
				function validation_confirmpassword(field1,field2){
					return (field1=field2)?"you input the different password\n":""
					}
			}
function msg(){
				var username, password, confirmpassword;
				username=$("#name").value;
				password=$("#password").value;
				confirmpassword=$("#confirm_password").value;
	alert("hi");
	alert(username,password,confirmpassword);
	}