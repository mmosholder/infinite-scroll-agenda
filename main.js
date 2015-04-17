
$(document).on('ready', function() {

	var d = new Date();
	var weekdayArr = new Array(7);
		weekdayArr[0]=  "Sunday";
		weekdayArr[1] = "Monday";
		weekdayArr[2] = "Tuesday";
		weekdayArr[3] = "Wednesday";
		weekdayArr[4] = "Thursday";
		weekdayArr[5] = "Friday";
		weekdayArr[6] = "Saturday";



	$(window).scroll(function() {
		for(var i = 0; i < weekdayArr.length; i++) {
			var dayLabel = $('<h3>' + weekdayArr[i] + '</h3>');
			var dayItem = $('<div class="day"></div>');
			var addIcon = $('<i class="fa fa-plus"> Add Appointment</i>');

			dayLabel.append(addIcon);
			dayItem.append(dayLabel);
			$('.container').append(dayItem);
		}
	});


	$('.fa').on('click', function (){	
		console.log('click');
		var addAppointment = $('<form></form>');
		var appointmentTextArea = $('<input></input>');
		var submitButton = $('<button type="submit">Save</button>');
		var appointmentText = $('<p class="appointments"></p>');
		

		addAppointment.append(appointmentTextArea);
		dayItem.append(addAppointment).append(appointmentText);

		addAppointment.on('submit', function(e) {
			var textValue = appointmentTextArea.val();
			appointmentText.text(textValue);
			appointmentText.css('display', 'block');
			addAppointment.css('display', 'none');
			e.preventDefault();
		});
	});
});