"use strict";
$(document).ready(
		function() {
			// Minimum setup
			$('input[name="timedate"]').datetimepicker({
				format : 'HH:MM',
				icons : {
					time : "icofont icofont-clock-time",
					up : "icofont icofont-rounded-up",
					down : "icofont icofont-rounded-down",
					next : "icofont icofont-rounded-right",
					previous : "icofont icofont-rounded-left"
				}
			});
			$('input[name="timedate2"]').datetimepicker({
				format : 'HH:MM',
				icons : {
					time : "icofont icofont-clock-time",
					up : "icofont icofont-rounded-up",
					down : "icofont icofont-rounded-down",
					next : "icofont icofont-rounded-right",
					previous : "icofont icofont-rounded-left"
				}
			});

			$(function() {
				$('input[name="birthdate"]').daterangepicker({
					format: 'YYYY-MM-DD',
					singleDatePicker : true,
					showDropdowns : true
				}, function(start, end, label) {
					var years = moment().diff(start, 'years');
					// alert("You are " + years + " years old.");
				});

				$('input[name="birthdate2"]').daterangepicker({
					singleDatePicker : true,
					showDropdowns : true
				}, function(start, end, label) {
					var years = moment().diff(start, 'years');
					// alert("You are " + years + " years old.");
				});

				$('input[name="datefilter"]').daterangepicker({
					autoUpdateInput : false,
					locale : {
						cancelLabel : 'Clear'
					}
				});
				$('input[name="datefilter"]').on(
						'apply.daterangepicker',
						function(ev, picker) {
							$(this).val(
									picker.startDate.format('MM/DD/YYYY')
											+ ' - '
											+ picker.endDate
													.format('MM/DD/YYYY'));
						});

				$('input[name="datefilter"]').on('cancel.daterangepicker',
						function(ev, picker) {
							$(this).val('');
						});

				var start = moment().subtract(29, 'days');
				var end = moment();

				function cb(start, end) {
					$('#reportrange span').html(
							start.format('MMMM D, YYYY') + ' - '
									+ end.format('MMMM D, YYYY'));
				}

				$('.multiple-select').datepicker({
					todayBtn : true,
					clearBtn : true,
					multidate : true,
					keyboardNavigation : false,
					forceParse : false,
					todayHighlight : true,
					defaultViewDate : {
						year : '2017',
						month : '01',
						day : '01'
					}
				});

			});

			// Date-dropper js start

			$("#dropper-default").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c"
			}), $("#dropper-animation").dateDropper({
				dropWidth : 200,
				init_animation : "bounce",
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c"
			}), $("#dropper-format").dateDropper({
				dropWidth : 200,
				format : "F S, Y",
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c"
			}), $("#dropper-lang").dateDropper({
				dropWidth : 200,
				format : "F S, Y",
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				lang : "ar"
			}), $("#dropper-lock").dateDropper({
				dropWidth : 200,
				format : "F S, Y",
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				lock : "from"
			}), $("#dropper-max-year").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				maxYear : "2020"
			}), $("#dropper-min-year").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				minYear : "1990"
			}), $("#year-range").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				yearsRange : "5"
			}), $("#dropper-width").dateDropper({
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				dropWidth : 500
			}), $("#dropper-dangercolor").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#e74c3c",
				dropBorder : "1px solid #e74c3c",
			}), $("#dropper-backcolor").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				dropBackgroundColor : "#bdc3c7"
			}), $("#dropper-txtcolor").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#46627f",
				dropBorder : "1px solid #46627f",
				dropTextColor : "#FFF",
				dropBackgroundColor : "#e74c3c"
			}), $("#dropper-radius").dateDropper({
				dropWidth : 200,
				dropPrimaryColor : "#1abc9c",
				dropBorder : "1px solid #1abc9c",
				dropBorderRadius : "0"
			})
			// Date-dropper js end
 
		});