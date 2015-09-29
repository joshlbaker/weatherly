$(function(){

	$.ajax({
      url: 'http://api.openweathermap.org/data/2.5/forecast?q=sanfrancisco',
      dataType: 'jsonp',
      success: function(response) {
      var data = response;
      		city = response.city.name;
      		temp = response.list[0].main.temp;
      		weather = response.list[0].weather[0].description;
      		// all temps need to be in F (imperial)
          console.log(weather);
          console.log(temp);
      }
  });
});