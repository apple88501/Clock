$(function () {
    setInterval(function () {
        let date = new Date();
        $("#hour").html(date.getHours().toString().padStart(2,'0'));
        $("#minute").html(date.getMinutes().toString().padStart(2,'0'));
        $("#second").html(date.getSeconds().toString().padStart(2,'0'));
       // alert(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds())

    },1000);

})
