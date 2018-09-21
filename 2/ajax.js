/* Article FructCode.com */
$( document ).ready(function() {
    $("#btn").click(
		function(){
            console.log('4');
            //sendAjaxFormDoc('ajax_form');
            sendAjaxForm('ajax_form', 'http://vip.demenibu.com/tracker_api');
			console.log('5');
            return false; 
		}
	);
});

 
function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "jsonp", //формат данных
        data: $("#ajax_form").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
        	  console.log(response);
              window.location.href = "thank-you/index.html"

    	},
    	error: function(response) { // Данные не отправлены
           window.location.href = "thank-you/index.html"
           console.log('1');
    	}
 	});
}

$( document ).ready(function() {
    $("#btn1").click(
        function(){
            //sendAjaxFormDoc1('ajax_form1');
            sendAjaxForm1('ajax_form1', 'http://vip.demenibu.com/tracker_api');
            console.log('3');return false; 
        }
    );
});


function sendAjaxForm1(ajax_form1, url) {
    $.ajax({
        url:     "http://vip.demenibu.com/tracker_api", //url страницы (action_ajax_form.php)
        type:     "GET", //метод отправки
        dataType: "jsonp", //формат данных
        data: $("#ajax_form1").serialize(),  // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
              console.log(response);
              window.location.href = "thank-you/index.html"

        },
        error: function(response) { // Данные не отправлены
           window.location.href = "thank-you/index.html"

           console.log('2');
        }
    });
} 