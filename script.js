$(function(){

	// Setting form variables
	var $citySearch = $("#citySearch");
	var $city = $("#citytag");

	// Setting event listener
	$citySearch.on('submit', function(event){
	  	event.preventDefault();
	  	var searchCity = $city.val();

	  // Test to make sure API call is going through correctly
	  $.ajax( "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + ",us&mode=json&units=imperial" )
	    .done(function() {
	      console.log( "API request successful" );
	    })
	    .fail(function() {
	      alert( "Mayday! Mayday! The server is down" );
	    })

	  // API request formatted in JSON 
		$.getJSON( "http://api.openweathermap.org/data/2.5/forecast?q=" + searchCity + ",us&mode=json&units=imperial", function(data) {

		  var city = [];
		  var cityName = data.city.name;

		  //if city does NOT exist, throw error
		  if (data === undefined || data === null){ 
		  	alert("No City Found!");
		  }else{
		  	city.push(cityName);
			};
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: city.join( "" )
		  }).appendTo( "#city" );

		  //Cycles through all of the weather codes and pushes 
		  //icon that is associated with its condition

		  var weather = []
		  var idToday = data.list[0].weather[0].id

		  if (idToday >= 200 && idToday <= 299){
		  	weather.push('<img src="img/thunderstorm.png">');
		  }else if (idToday >= 300 && idToday <= 399){
		  	weather.push('<img src="img/drizzle.png">');
		  }else if (idToday >= 500 && idToday <= 599){
		  	weather.push('<img src="img/rain.png">');
		  }else if (idToday >= 600 && idToday <= 699){
		  	weather.push('<img src="img/snow.png">');
		  }else if (idToday >= 700 && idToday <= 799){
		  	weather.push('<img src="img/atmosphere.png">');
		  }else if (idToday >= 800 && idToday <= 899){
		  	weather.push('<img src="img/clouds.png">');
			};
		  $( "<p/>", {
		    "class": "my-new-list",
		    html: weather.join( "" )
		  }).appendTo( "#icon" );
		  
		  //pushes todays temp onto the page

		  var tempToday = [];
		  tempToday.push(' ' + parseInt(data.list[0].main.temp) + '<img src="img/one.png">');

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: tempToday.join( "" )
		  }).appendTo( "#tempToday" );

		  //Cycles through all of the weather codes and pushes 
		  //icon that is associated with its condition

		  var icon1 = [];
			var idTomorrow = data.list[1].weather[0].id

			if (idTomorrow >= 200 && idTomorrow <= 299){
				icon1.push('<img src="img/thunderstorm.png">');
			}else if (idTomorrow >= 300 && idTomorrow <= 399){
				icon1.push('<img src="img/drizzle.png">');
			}else if (idTomorrow >= 500 && idTomorrow <= 599){
				icon1.push('<img src="img/rain.png">');
			}else if (idTomorrow >= 600 && idTomorrow <= 699){
				icon1.push('<img src="img/snow.png">');
			}else if (idTomorrow >= 700 && idTomorrow <= 799){
				icon1.push('<img src="img/atmosphere.png">');
			}else if (idTomorrow >= 800 && idTomorrow <= 899){
				icon1.push('<img src="img/clouds.png">');
			};		

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon1.join( "" )
		  }).appendTo( ".icon1" );

		  //pushes tomorrows temp onto the page

		  var one = []
		  one.push(' ' + parseInt(data.list[1].main.temp) + '<img src="img/two.png">');

		  $( "<p/>", {
		    "class": "one",
		    html: one.join( "" )
		  }).appendTo( "#one" );

		  //Cycles through all of the weather codes and pushes 
		  //icon that is associated with its condition

		  var icon2 = [];
		  var idDayAfter = data.list[2].weather[0].id

		  if (idDayAfter >= 200 && idDayAfter <= 299){
		  	icon2.push('<img src="img/thunderstorm.png">');
		  }else if (idDayAfter >= 300 && idDayAfter <= 399){
		  	icon2.push('<img src="img/drizzle.png">');
		  }else if (idDayAfter >= 500 && idDayAfter <= 599){
		  	icon2.push('<img src="img/rain.png">');
		  }else if (idDayAfter >= 600 && idDayAfter <= 699){
		  	icon2.push('<img src="img/snow.png">');
		  }else if (idDayAfter >= 700 && idDayAfter <= 799){
		  	icon2.push('<img src="img/atmosphere.png">');
		  }else if (idDayAfter >= 800 && idDayAfter < 899){
		  	icon2.push('<img src="img/clouds.png">');
		  };	

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon2.join( "" )
		  }).appendTo( ".icon2" );

		  //pushes day after tomorrows temp onto the page

		  var two = []
		  two.push(' ' + parseInt(data.list[2].main.temp) + '<img src="img/three.png">');
		  
		  $( "<p/>", {
		    "class": "two",
		    html: two.join( "" )
		  }).appendTo( "#two" );

		  //Cycles through all of the weather codes and pushes 
		  //icon that is associated with its condition

		  var icon3 = [];
		  var idDayFour = data.list[3].weather[0].id

		  if (idDayFour >= 200 && idDayFour < 300){
		  	icon3.push('<img src="img/thunderstorm.png">');
		  }else if (idDayFour >= 300 && idDayFour < 400){
		  	icon3.push('<img src="img/drizzle.png">');
		  }else if (idDayFour >= 500 && idDayFour < 600){
		  	icon3.push('<img src="img/rain.png">');
		  }else if (idDayFour >= 600 && idDayFour < 700){
		  	icon3.push('<img src="img/snow.png">');
		  }else if (idDayFour >= 700 && idDayFour < 800){
		  	icon3.push('<img src="img/atmosphere.png">');
		  }else if (idDayFour >= 800 && idDayFour < 900){
		  	icon3.push('<img src="img/clouds.png">');
		  };			

		  $( "<p/>", {
		    "class": "my-new-list",
		    html: icon3.join( "" )
		  }).appendTo( ".icon3" );

		  //pushes three days after temp onto the page

		  var three = []
		  three.push(' ' + parseInt(data.list[3].main.temp) + '<img src="img/four.png">');

		  $( "<p/>", {
		    "class": "three",
		    html: three.join( "" )
		  }).appendTo( "#three" );

		  // DATETIME SECTION

		  var oneSub = [];
		  var twoSub = [];
		  var threeSub = [];

		  // Grabs the weekday and stores them into an array

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
		  if (weekDay === undefined){
		  	weekDay = weekday[d.getDay()-6]
		  }
		  var weekDay2 = weekday[d.getDay()+2];
		  if (weekDay2 === undefined){
		  	weekDay2 = weekday[d.getDay()-5]
		  }
		  var weekDay3 = weekday[d.getDay()+3];
		  if (weekDay3 === undefined){
		  	weekDay3 = weekday[d.getDay()-4]
		  }

		  // Grabs each month and stores them into an array

		  var month = new Array(
		    	'Jan', 'Feb', 'Mar', 'Apr', 'May',
		    	'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 
		    	'Nov', 'Dec'
		    	);
		  var monthStr = month[d.getMonth()];
		  var monthStr2 = month[d.getMonth()];
		  var monthStr3 = month[d.getMonth()];
		  
		  // Sets days up to 3 days in the future

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

		}); //end of get request

		$citySearch[0].reset() //resets the form
		
	}); //end of on onSubmit
})

