console.log("yoyoyo");

var xhr = new XMLHttpRequest();
xhr.open("GET", "/home/");
xhr.onreadystatechange = function (data) {
    if(xhr.readyState == 4){
      var status = xhr.status
      if(status === 0 || (status >= 200 && status < 400)){
        $("nav").after(xhr.response);
      }else{
        console.log('Error - XMLHttpRequest status: '+xhr.status);
      }
    }
  };
xhr.send();

//var request = $.ajax({
//    url: "/home.html",
//    method: "GET",
//    dataType: "html",
//    success: function(data, textStatus, jqXHR) {
//
//    },
//    error: function(jqXHR, textStatus, errorThrown) {
//        console.log("Text Status: " + textStatus);
//        console.log("Error Thrown: " + errorThrown);
//        if(jqXHR.status==404) {
//            alert(errorThrown);
//        }
//    }
//});

console.log("exiting page change script");



