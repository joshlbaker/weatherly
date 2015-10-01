$(function(){

	var $citySearch = $("#citySearch");
	var $city = $("#citytag");

	$citySearch.on('submit', function(event){
	  	event.preventDefault();
	  	var searchCity = $city.val();
	  	console.log(searchCity);

		$.getJSON( "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + ",us&mode=json&units=imperial", function(data) {
		  var city = [];
		  // cityName = data.city.name
		  if (data == undefined || data == null){
		  	alert("No City Found!");
		  }else{
		 		var cityName = data.city.name
		  	city.push(cityName);
			}
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: city.join( "" )
		  }).appendTo( "#city" );

		  var weather = []
		  var idToday = data.list[0].weather[0].id
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
		  }).appendTo( "#icon" );
		  
		  var tempToday = [];
		  tempToday.push(' ' + parseInt(data.list[0].main.temp) + '°');
		  // var tempWithDeg = (tempToday + ' o');
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: tempToday.join( "" )
		  }).appendTo( "#tempToday" );

		  var icon1 = [];
			var idTomorrow = data.list[1].weather[0].id
			if (idTomorrow >= 200 && idTomorrow <= 299){
				console.log('thunderstorm');
				icon1.push('<img src="img/thunderstorm.png">');
			}if (idTomorrow >= 300 && idTomorrow <= 399){
				console.log('drizzle');
				icon1.push('<img src="img/drizzle.png">');
			}else if (idTomorrow >= 500 && idTomorrow <= 599){
				console.log('rain');
				icon1.push('<img src="img/rain.png">');
			}else if (idTomorrow >= 600 && idTomorrow <= 699){
				console.log('snow');
				icon1.push('<img src="img/snow.png">');
			}else if (idTomorrow >= 700 && idTomorrow <= 799){
				console.log('clear skies')
				icon1.push('<img src="img/atmosphere.png">');
			}else if (idTomorrow >= 800 && idTomorrow <= 899){
				console.log('cloudy skies')
				icon1.push('<img src="img/clouds.png">');
			}else{
				// alert("No weather idTomorrow found");
			}				
			console.log(idTomorrow)
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon1.join( "" )
		  }).appendTo( ".icon1" );

		  var one = []
		  one.push(' ' + parseInt(data.list[1].main.temp) + '°');

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: one.join( "" )
		  }).appendTo( "#one" );

		  var icon2 = [];
		  var idDayAfter = data.list[2].weather[0].id
		  if (idDayAfter >= 200 && idDayAfter <= 299){
		  	console.log('thunderstorm');
		  	icon2.push('<img src="img/thunderstorm.png">');
		  }if (idDayAfter >= 300 && idDayAfter <= 399){
		  	console.log('drizzle');
		  	icon2.push('<img src="img/drizzle.png">');
		  }else if (idDayAfter >= 500 && idDayAfter <= 599){
		  	console.log('rain');
		  	icon2.push('<img src="img/rain.png">');
		  }else if (idDayAfter >= 600 && idDayAfter <= 699){
		  	console.log('snow');
		  	icon2.push('<img src="img/snow.png">');
		  }else if (idDayAfter >= 700 && idDayAfter <= 799){
		  	console.log('clear skies')
		  	icon2.push('<img src="img/atmosphere.png">');
		  }else if (idDayAfter >= 800 && idDayAfter < 899){
		  	console.log('cloudy skies')
		  	icon2.push('<img src="img/clouds.png">');
		  }else{
		  	// alert("No weather idDayAfter found");
		  }				
		  console.log(idDayAfter)

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon2.join( "" )
		  }).appendTo( ".icon2" );

		  var two = []
		  two.push(' ' + parseInt(data.list[2].main.temp) + '°');
		  
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: two.join( "" )
		  }).appendTo( "#two" );

		  var icon3 = [];
		  var idDayFour = data.list[3].weather[0].id
		  if (idDayFour >= 200 && idDayFour < 300){
		  	console.log('thunderstorm');
		  	icon3.push('<img src="img/thunderstorm.png">');
		  }if (idDayFour >= 300 && idDayFour < 400){
		  	console.log('drizzle');
		  	icon3.push('<img src="img/drizzle.png">');
		  }else if (idDayFour >= 500 && idDayFour < 600){
		  	console.log('rain');
		  	icon3.push('<img src="img/rain.png">');
		  }else if (idDayFour >= 600 && idDayFour < 700){
		  	console.log('snow');
		  	icon3.push('<img src="img/snow.png">');
		  }else if (idDayFour >= 700 && idDayFour < 800){
		  	console.log('clear skies')
		  	icon3.push('<img src="img/atmosphere.png">');
		  }else if (idDayFour >= 800 && idDayFour < 900){
		  	console.log('cloudy skies')
		  	icon3.push('<img src="img/clouds.png">');
		  }else{
		  	// alert("No weather idDayFour found");
		  }				
		  console.log(idDayFour)

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon3.join( "" )
		  }).appendTo( ".icon3" );

		  var three = []
		  three.push(' ' + parseInt(data.list[3].main.temp) + '°');

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: three.join( "" )
		  }).appendTo( "#three" );

		  var oneSub = [];
		  var twoSub = [];
		  var threeSub = [];

		  var d = new Date();
		  var weekday = new Array(7);
		  weekday[0]=  "Sun";
		  weekday[1] = "Mon";
		  weekday[2] = "Tue";
		  weekday[3] = "Wed";
		  weekday[4] = "Thu";
		  weekday[5] = "Fri";
		  weekday[6] = "Sat";

		  var weekDay = weekday[d.getDay()+1];
		  var weekDay2 = weekday[d.getDay()+2];
		  var weekDay3 = weekday[d.getDay()+3];


		  var month = new Array(
		    	'Jan', 'Feb', 'Mar', 'Apr', 'May',
		    	'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 
		    	'Nov', 'Dec'
		    	);
		  var monthStr = month[d.getMonth()+1];
		  var monthStr2 = month[d.getMonth()+1];
		  var monthStr3 = month[d.getMonth()+1];
		  
		  var myDate=new Date();
		  myDate.setDate(myDate.getDate()+1);
		  var myDate2=new Date();
		  myDate2.setDate(myDate2.getDate()+2);
		  var myDate3=new Date();
		  myDate3.setDate(myDate3.getDate()+3);
		  // format a date
		  var dt = weekDay + " " + monthStr + " " + myDate.getDate();
		  var dtt = weekDay2 + " " + monthStr2 + " " + myDate2.getDate();
		  var dttt = weekDay3 + " " + monthStr3 + " " + myDate3.getDate();

		  oneSub.push(dt);
		  twoSub.push(dtt);
		  threeSub.push(dttt);


		  $( "<p/>", {
		    "class": "my-new-list",
		    html: oneSub.join( "" )
		  }).appendTo( "#one-sub" );
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: twoSub.join( "" )
		  }).appendTo( "#two-sub" );
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: threeSub.join( "" )
		  }).appendTo( "#three-sub" );

		}); //end of get

		$city = " ";

	}); //end of on onSubmit

}) //end of it all

