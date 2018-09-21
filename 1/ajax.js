/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
            sendAjaxFormDoc('ajax_form');
            sendAjaxForm('ajax_form', 'http://vip.demenibu.com/tracker_api');
			return false; 
		}
	);
});
$( document ).ready(function() {
    $("#btn1").click(
        function(){
            sendAjaxFormDoc1('ajax_form1');
            sendAjaxForm('ajax_form1', 'http://vip.demenibu.com/tracker_api');
            return false; 
        }
    );
});
 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	  console.log(response);
              window.location.href = "thank-you/index.html"

    	},
    	error: function(response) { // Данные не отправлены
           alert("error");
    	}
 	});
}
function sendAjaxForm(ajax_form1, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form1").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
           alert("error");
        }
    });
}
function sendAjaxFormDoc(ajax_form) {
    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSexToQiDqyeEM2BNSHcb-OCFPmPYfU9ZFQvpV9aeYAD9RaKPg/formResponse", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
            window.location.href = "thank-you/index.html"
        }
    });
}
function sendAjaxFormDoc1(ajax_form1) {
    $.ajax({
        url:     "https://docs.google.com/forms/d/e/1FAIpQLSexToQiDqyeEM2BNSHcb-OCFPmPYfU9ZFQvpV9aeYAD9RaKPg/formResponse", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "html", //формат данных
        data: $("#ajax_form1").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
            window.location.href = "thank-you/index.html"
        }
    });
}