$(function() {

	$('.leads_li').css('transition', '0.5s');

	if ($('.leads').css('display') === 'block'){
		$(".leads_li").addClass('active');
	};

	$(".tabs_link").click(function(e) {

		var tabs_content, tabs_link;

		//Hide all content
		tabs_content = document.getElementsByClassName("tabs_content");
		for (var i = 0; i < tabs_content.length; i++) {
			$(tabs_content[i]).css ({display: 'none'});
		}

		// remove class active from links
		tabs_link = document.getElementsByClassName("tabs_link");
		for (var i = 0; i < tabs_link.length; i++) {
			$(tabs_link[i]).removeClass("active");
		}

		// Display tab content
		if ($(this).is("#leads_link")){
			$("#leads").css({display: 'block'});
		}
		else if ($(this).is("#calls_link")){
			$("#calls").css({display: 'block'});
		}
		else if ($(this).is("#appointments_link")){
			$("#appointments").css({display: 'block'});
		}
		else if ($(this).is("#accounts_link")){
			$("#accounts").css({display: 'block'});
		}
		
		// add class active to clicked link
		e.currentTarget.className += " active";

	}); // .tabs_link click function

	function required(form) {
		var valid;
		for(var i = 0; i<form.length; i++){
			if(!form[i].checkValidity) {
				valid = false;
				break;
			}
		}
		return valid;
	}

	// Add Lead
	$('.add_lead').on('click', function(e) {
		// Prevent page refresh
		e.preventDefault();
		var name = $('.lead_name').val();
		var number = $('.lead_number').val();

		// Validate required fields
		if (number !== "" && !$.isNumeric(number)) {
			alert("Please only use digits in the number field");
			$(".lead_number").val('');
		} else if (number !== "" && (number.length <10) ){
			alert("Please enter a valid phone number");
			$(".lead_number").val('');
		} else if (name !== "" && number !== "") {
			$('.lead_initial_row').remove();
			$('<div class="row">' + 
					'<div class="cell name">'+ name + '</div>' +
					'<div class="cell number">'
						+ number + 
						'<input type="button" class="edit" value="&#9998;">' +
					'</div>' +
					'<div class="cell update_number hide">' +
						'<input type="tel" name="update_number">' +
						'<input type="button" class="update" value="&#10003;">' +
						'<input type="button" class="cancel" value="&times;">' +
					'</div> ' +
					'<div class="cell">' +
						'<input type="submit" name="lead_to_account" value="Convert" class="lead_to_account">' +
						'<input type="submit" name="lead_to_account" value="&#43;" class="lead_to_account_small">' +
					'</div>' +
					'<div class="cell"><input type="button" class="remove" value="&times;"></div>' +
					'</div>' 
				).hide().appendTo('.lead_table').fadeIn('normal');
			$('.lead_name').val('');
			$('.lead_number').val('');
		}
	}); // End add lead

	// Add Call
	$('.add_call').on('click', function(e) {
		// Prevent page refresh
		e.preventDefault();
		var name = $('.call_name').val();
		var number = $('.call_number').val();
		var outcome = $('.call_outcome').val();

		// Validate required fields
		if (number !== "" && !$.isNumeric(number)) {
			alert("Please only use digits in the number field");
			$(".call_number").val('');
		} else if (number !== "" && (number.length <10) ){
			alert("Please enter a valid phone number");
			$(".call_number").val('');
		} else if (name !== "" && number !== "" && outcome !== "outcome") {
			$('.call_initial_row').remove();
			$('<div class="row">' +
					'<div class="cell name">'
						+ name + 
					'</div> '+
					'<div class="cell number">'
						+ number + 
					'<input type="button" class="edit" value="&#9998;">' +
					'</div>' +
					'<div class="cell update_number hide">' +
						'<input type="tel" name="update_number">' +
						'<input type="button" class="update" value="&#10003;">' +
						'<input type="button" class="cancel" value="&times;">' +
					'</div> ' +
					'<div class="cell outcome">'+ outcome + '</div> '+
					'<div class="cell">' +
					'<input type="button" class="remove" value="&times;">' +
					'</div>' +
					'</div>'
				).hide().appendTo('.call_table').fadeIn('normal');
			$('.call_name').val('');
			$('.call_number').val('');
		}
	}); // End add lead

	// Add Appointment
	$('.add_appointment').on('click', function(e) {
		// Prevent page refresh
		e.preventDefault();
		var name = $('.client_name').val();
		var date = $('.appointment_date').val();
		var time = $('.appointment_time').val();
		// Validate required fields
		if (name !== "" && date !== "" && time !== "") {
			$('.appointment_initial_row').remove();
			$('<div class="row"> '+
				'<div class="cell name">'+ name + '</div> '+
				'<div class="cell date">'+ date + '</div> '+
				'<div class="cell time">'+ time+ '</div> '+
				'<div class="cell">'+
				'<input type="button" class="remove" value="&times;">'+
				'</div>'+
				'</div>'
				).hide().appendTo('.appointment_table').fadeIn('normal');
			$('.client_name').val('');
			$('.appointment_date').val('');
			$('.appointment_time').val('');
		}
	}); // End add lead

	// Add Account
	$('.add_account').on('click', function(e) {
		// Prevent page refresh
		e.preventDefault();
		var name = $('.account_name').val();
		var number = $('.account_number').val();
		// Validate required fields
		if (number !== "" && !$.isNumeric(number)) {
			alert("Please only use digits in the number field");
			$(".account_number").val('');
		} else if (number !== "" && (number.length <10) ){
			alert("Please enter a valid phone number");
			$(".account_number").val('');
		} else if (name !== "" && number !== "") {
			$('.account_initial_row').remove();
			$('<div class="row">'+
				' <div class="cell account_name">'
					+ name + 
				'</div>'+
				' <div class="cell account_number">'
					+ number + 
					'<input type="button" class="edit" value="&#9998;">' +
				'</div>' +
				'<div class="cell update_number hide">' +
					'<input type="tel" name="update_number">' +
					'<input type="button" class="update" value="&#10003;">' +
					'<input type="button" class="cancel" value="&times;">' +
				'</div> '+
				'<div class="cell">'+
					'<input type="button" class="remove" value="&times;">'+
				'</div>'+
				'</div>'
				).hide().appendTo('.account_table').fadeIn('normal');
			$('.account_name').val('');
			$('.account_number').val('');
		}
	}); // End Add Account

	// Remove Row
	$(document).on('click', '.remove', function() {
			$(this).parent().parent().fadeOut('normal', function() {
				$(this).remove();
			});
		});

	//Convert Lead to Account
	$(document).on('click', '.lead_to_account', function() {
		var name = $(this).parent().prev().prev().prev().text();
		var number = $(this).parent().prev().prev().text();
		var row = $(this).parent().parent();
		$('.account_initial_row').remove();
		$('<div class="row">'+
			' <div class="cell account_name">'+ name + '</div> '+
			'<div class="cell account_number">'
			+ number + 
			'<input type="button" class="edit" value="&#9998;">' +
				'</div>' +
				'<div class="cell update_number hide">' +
					'<input type="tel" name="update_number">' +
					'<input type="button" class="update" value="&#10003;">' +
					'<input type="button" class="cancel" value="&times;">' +
				'</div> '+
			'<div class="cell">'+
			'<input type="button" class="remove" value="&times;">'+
			'</div>'+
			'</div>'
			).hide().appendTo('.account_table').fadeIn('normal');
		row.fadeOut('normal', function() {
			$(this).remove();
		});
	}); // End add lead

	//Convert Lead to Account Small
	$(document).on('click', '.lead_to_account_small', function() {
		var name = $(this).parent().prev().prev().prev().text();
		var number = $(this).parent().prev().prev().text();
		var row = $(this).parent().parent();
		$('.account_initial_row').remove();
		$('<div class="row">'+
			' <div class="cell account_name">'+ name + '</div> '+
			'<div class="cell account_number">'
			+ number + 
			'<input type="button" class="edit" value="&#9998;">' +
				'</div>' +
				'<div class="cell update_number hide">' +
					'<input type="tel" name="update_number">' +
					'<input type="button" class="update" value="&#10003;">' +
					'<input type="button" class="cancel" value="&times;">' +
				'</div> '+
			'<div class="cell">'+
			'<input type="button" class="remove" value="&times;">'+
			'</div>'+
			'</div>'
			).hide().appendTo('.account_table').fadeIn('normal');
		row.fadeOut('normal', function() {
			$(this).remove();
		});
	}); // End add lead

	// Update phone number
	$(document).on('click', '.edit', function() {
		$(this).parent().addClass('hide');
		$(this).parent().next().removeClass('hide');
		}); // update phone number

	// Cancel update phone number
	$(document).on('click', '.cancel', function() {
		$(this).parent().addClass('hide');
		$(this).parent().prev().removeClass('hide');
		}); // cancel update phone number

	$(document).on('click', '.update', function(e) {
		var new_number = $(this).prev().val();
		if (new_number !== "" && !$.isNumeric(new_number)) {
			alert("Please only use digits in the number field");
			$(this).prev().val('');
		} else if (new_number !== "" && (new_number.length <10) ){
			alert("Please enter a valid phone number");
			$(this).prev().val('');
		} else if (new_number !== "") {
			$(this).parent().prev().text(new_number);
			$('<input type="button" class="edit" value="&#9998;">').appendTo($(this).parent().prev());
			$(this).parent().prev().removeClass('hide');
			$(this).parent().addClass('hide');
		}
		}); // click update phone number

}); // end document ready



