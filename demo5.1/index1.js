< script type = "text/javascript" >

var queryString = new Array();
$(function() {

  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';'); //把cookie分割成组  
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]; //取得字符串  
      while (c.charAt(0) == ' ') { //判断一下字符串有没有前导空格  
        c = c.substring(1, c.length); //有的话，从第二位开始取  
      }
      if (c.indexOf(nameEQ) == 0) { //如果含有我们要的name  
        return unescape(c.substring(nameEQ.length, c.length)); //解码并截取我们要值  
      }
    }
    return false;
  }
  var username = getCookie('username'); //取得cookie的值，显示tank 
  /*
        //清除cookie  
        function clearCookie(name) {
        setCookie(name, "", -1);
        }

        //设置cookie  
        function setCookie(name, value, seconds) {
        seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个根php不一样。  
        var expires = "";
        if (seconds != 0) { //设置cookie生存时间  
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + escape(value) + expires + "; path=/"; //转码并赋值  
        }
        */


  //clearCookie("test");                           //删除cookie的值  
  //alert(getCookie('test')); 
  /*
        if (queryString.length == 0) {
                     if (window.location.search.split('?').length > 1) {
                        var params = window.location.search.split('?')[1].split('&');
                           for (var i = 0; i < params.length; i++) {
                           var key = params[i].split('=')[0];
                           var value = decodeURIComponent(params[i].split('=')[1]);
                           queryString[key] = value;
                        }//var username=getCookie('username');
                     }
               }
               if (queryString["userdata"] != null) {
                     var receive_userdata=queryString["userdata"];
                     //alert(receive_userdata);
                     //var data = "<br/><u>Values from QueryString<\/u><br /><br />";
                     //data += "<b>Name:<\/b> " + queryString["userdata"];
                     //$("#lblData").html(data);
               }
               if(queryString["date"]!=null){
                  var receive_datetime=queryString["date"];
               } 
        */


  if (queryString.length == 0) {
    if (window.location.search.split('?').length > 1) {
      var params = window.location.search.split('?')[1].split('&');
      for (var i = 0; i < params.length; i++) {
        var key = params[i].split('=')[0];
        var value = decodeURIComponent(params[i].split('=')[1]);
        queryString[key] = value;
      } //var username=getCookie('username');
    }
  }
  if (queryString["userdata"] != null) {
    var receive_userdata = queryString["userdata"];
    //alert(receive_userdata);
    //var data = "<br/><u>Values from QueryString<\/u><br /><br />";
    //data += "<b>Name:<\/b> " + queryString["userdata"];
    //$("#lblData").html(data);
  }
  if (queryString["date"] != null) {
    var receive_datetime = queryString["date"];
  }
  //alert(receive_datetime.toString());



  var url = "http://127.0.0.1/login/getData.php?userdata=" + receive_userdata + "&callback=?";
  $.getJSON(url, function(data) {
    if (data.lat != null) {
      var receive_lat = data.lat;
      var receive_lng = data.lng;
      var receive_location_name = data.location_name;
      //var receive_datetime=data.result;
      url1 = "http://127.0.0.1/demo5.1/full-example2.html?userdata=" + encodeURIComponent(receive_userdata) + "&lat=" + encodeURIComponent(receive_lat) + "&lng=" + encodeURIComponent(receive_lng) + "&location_name=" + encodeURIComponent(receive_location_name);
      $("#messageTxt").val("Hi, this is " + username + ", we gonna have an activity at:" + receive_datetime + " in here: " + url1);
    };
  });



  //leave empty for sending sms using default intent
  $("#send").click(function() {
    /*
                if (queryString.length == 0) {
                     if (window.location.search.split('?').length > 1) {
                        var params = window.location.search.split('?')[1].split('&');
                           for (var i = 0; i < params.length; i++) {
                           var key = params[i].split('=')[0];
                           var value = decodeURIComponent(params[i].split('=')[1]);
                           queryString[key] = value;
                        }//var username=getCookie('username');
                     }
               }
               if (queryString["userdata"] != null) {
                     var receive_userdata=queryString["userdata"];
                     //alert(receive_userdata);
                     //var data = "<br/><u>Values from QueryString<\/u><br /><br />";
                     //data += "<b>Name:<\/b> " + queryString["userdata"];
                     //$("#lblData").html(data);
               }
               if(queryString["date"]!=null){
                  var receive_datetime=queryString["datetime"];
               }
                */


    var number = $("#number").val();
    var message = $("#messageTxt").val();
    SmsPlugin.prototype.send(number, message, '',
      function() {
        alert('Message sent successfully');
      },
      function(e) {
        alert('Message Failed:' + e);
      }
    );
  });



});

< /script>