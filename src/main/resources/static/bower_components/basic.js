$(function() {

	// Begin 노출 리스트 수량
	if ($("#cookie_endRow").length) {

		$("#cookie_endRow").change(function() {
			Cookies.set('cookie_endRow', $(this).val(), {
				expires : 30
			});

			location.reload();
		});

		if (Cookies.get('cookie_endRow') != undefined) {
			$("#cookie_endRow").val(Cookies.get('cookie_endRow'));
		}

	}

	// End 노출 리스트 수량

});
