var queryString = new Array();
$(document).ready(function() {
	function runExample3(receive_lat, receive_lng, receive_locaiton_name) {
		$("#custom-places").mapsed({
			showOnLoad: [
				// City Varieties
				/*
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				canEdit: false,
				lat: 53.798823,
				lng:-1.5426760000000286,
				reference: "CoQBfAAAAPw-5BTCS53grSLDwX8rwo5BnWnEWnA72lmOjxdgWg2ODGfC5lLjGyoz428IEaln1vJ6rq1jI96Npzlm-N-wmPH2jdJMGfOLxno_rmgnajAnMPzNzuI8UjexIOdHVZPBPvQGloC-tRhudGeKkbdTT-IWNP5hp4DIl4XOLWuYFOVYEhBxNPxaXZdW9uhKIETXf60hGhTc9yKchnS6oO-6z5XZJkK2ekewYQ"
			},
			 */

				// Random made up CUSTOM place
				{
					// flag that this place should have the tooltip shown when the map is first loaded
					autoShow: true,
					lat: receive_lat,
					lng: receive_lng,
					name: receive_locaiton_name,
					street: "Over the rainbow, Up high way",
					userData: receive_userdata
				}

			]

		});
	}



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

	}
	var url = "http://127.0.0.1/login/getData.php?userdata=" + receive_userdata + "&callback=?";
	$.getJSON(url, function(data) {
		var receive_lat = data.lat;
		var receive_lng = data.lng;
		var receive_locaiton_name = data.location_name;
		runExample3(receive_lat, receive_lng, receive_locaiton_name);
	})
});