$(function(){

	var $citySearch = $("#citySearch");
	var $city = $("#citytag");


	$citySearch.on('submit', function(event){
	  	event.preventDefault();
	  	var searchCity = $city.val();
	  	console.log(searchCity);

		$.getJSON( "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + ",us&mode=json&units=imperial", function( data ) {
		  var city = [];
		  city.push(data.city.name);
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: city.join( "" )
		  }).appendTo( "#city" );
		  var weather = [];
		  var idToday = data.list[0].weather[0].id
		  weather.push(parseInt(data.list[0].main.temp));
		  if (idToday >= 200 && idToday <= 299){
		  	console.log('thunderstorm');
		  	weather.push('<img src="img/thunderstorm.png">');
		  }if (idToday >= 300 && idToday <= 399){
		  	console.log('drizzle');
		  	weather.push('<img src="img/drizzle.png">');
		  }else if (idToday >= 500 && idToday <= 599){
		  	console.log('rain');
		  	weather.push('<img src="img/rain.png">');
		  }else if (idToday >= 600 && idToday <= 699){
		  	console.log('snow');
		  	weather.push('<img src="img/snow.png">');
		  }else if (idToday >= 700 && idToday <= 799){
		  	console.log('clear skies')
		  	weather.push('<img src="img/atmosphere.png">');
		  }else if (idToday >= 800 && idToday <= 899){
		  	console.log('cloudy skies')
		  	weather.push('<img src="img/clouds.png">');
		  }else{
		  	// alert("No weather idToday found");
		  }				
		  console.log(idToday)

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: weather.join( "" )
		  }).appendTo( "#tempToday" );
		  var one = [];
			var idTomorrow = data.list[1].weather[0].id
			one.push(parseInt(data.list[1].main.temp));
			if (idTomorrow >= 200 && idTomorrow <= 299){
				console.log('thunderstorm');
				one.push('<img src="img/thunderstorm.png">');
			}if (idTomorrow >= 300 && idTomorrow <= 399){
				console.log('drizzle');
				one.push('<img src="img/drizzle.png">');
			}else if (idTomorrow >= 500 && idTomorrow <= 599){
				console.log('rain');
				one.push('<img src="img/rain.png">');
			}else if (idTomorrow >= 600 && idTomorrow <= 699){
				console.log('snow');
				one.push('<img src="img/snow.png">');
			}else if (idTomorrow >= 700 && idTomorrow <= 799){
				console.log('clear skies')
				one.push('<img src="img/atmosphere.png">');
			}else if (idTomorrow >= 800 && idTomorrow <= 899){
				console.log('cloudy skies')
				one.push('<img src="img/clouds.png">');
			}else{
				// alert("No weather idTomorrow found");
			}				
			console.log(idTomorrow)
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: one.join( "" )
		  }).appendTo( "#one" );
		  var two = [];
		  var idDayAfter = data.list[2].weather[0].id
		  two.push(parseInt(data.list[2].main.temp));
		  if (idDayAfter >= 200 && idDayAfter <= 299){
		  	console.log('thunderstorm');
		  	two.push('<img src="img/thunderstorm.png">');
		  }if (idDayAfter >= 300 && idDayAfter <= 399){
		  	console.log('drizzle');
		  	two.push('<img src="img/drizzle.png">');
		  }else if (idDayAfter >= 500 && idDayAfter <= 599){
		  	console.log('rain');
		  	two.push('<img src="img/rain.png">');
		  }else if (idDayAfter >= 600 && idDayAfter <= 699){
		  	console.log('snow');
		  	two.push('<img src="img/snow.png">');
		  }else if (idDayAfter >= 700 && idDayAfter <= 799){
		  	console.log('clear skies')
		  	two.push('<img src="img/atmosphere.png">');
		  }else if (idDayAfter >= 800 && idDayAfter < 899){
		  	console.log('cloudy skies')
		  	two.push('<img src="img/clouds.png">');
		  }else{
		  	// alert("No weather idDayAfter found");
		  }				
		  console.log(idDayAfter)

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: two.join( "" )
		  }).appendTo( "#two" );
		  var three = [];
		  var idDayFour = data.list[3].weather[0].id
		  three.push(parseInt(data.list[3].main.temp));
		  if (idDayFour >= 200 && idDayFour < 300){
		  	console.log('thunderstorm');
		  	three.push('<img src="img/thunderstorm.png">');
		  }if (idDayFour >= 300 && idDayFour < 400){
		  	console.log('drizzle');
		  	three.push('<img src="img/drizzle.png">');
		  }else if (idDayFour >= 500 && idDayFour < 600){
		  	console.log('rain');
		  	three.push('<img src="img/rain.png">');
		  }else if (idDayFour >= 600 && idDayFour < 700){
		  	console.log('snow');
		  	three.push('<img src="img/snow.png">');
		  }else if (idDayFour >= 700 && idDayFour < 800){
		  	console.log('clear skies')
		  	three.push('<img src="img/atmosphere.png">');
		  }else if (idDayFour >= 800 && idDayFour < 900){
		  	console.log('cloudy skies')
		  	three.push('<img src="img/clouds.png">');
		  }else{
		  	// alert("No weather idDayFour found");
		  }				
		  console.log(idDayFour)

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: three.join( "" )
		  }).appendTo( "#three" );



		  var oneSub = [];
		  var dayOne = data.list[1].dt_txt;
		  var st = dayOne;
		  var pattern = /(\d{2})\.(\d{4})/;
		  var dt = new Date(st.replace(pattern,'$3-$2-$1'));
		  // dt.slice(-4);
		  console.log(dt.slice(-4));

		  // oneSub.push(dt-4);

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: oneSub.join( "" )
		  }).appendTo( "#one-sub" );

		});
	});
})
































// $(function(){

// 	function Today(city,temp,weather,icon){
// 		this.city = city;
// 		this.temp = temp;
// 		this.weather = weather;
// 		this.icon = icon;

// 	}
// 	Today.all = []

// 	Today.prototype.save = function(){
// 		Today.all.push(this);
// 		console.log(Today.all);
// 	}

// 	Today.prototype.render = function(){
// 		var $weatherTodayTemplate = _.template($('#today-temp').html());
// 		var $todayTemp = ($weatherTodayTemplate(this));
// 		var index = Today.all.indexOf(this);
// 		$resultsToday.append($todayTemp);
// 	}


// 	var $resultsToday = $('#today');
// 	var $citySearch = $('#citySearch');
// 	$citySearch.on('submit', function(event){
// 		event.preventDefault();
// 		console.log($citySearch);



//   	});
//   });



