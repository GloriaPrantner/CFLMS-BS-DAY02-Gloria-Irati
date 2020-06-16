$(document).ready(function(){
	let series_array = JSON.parse(series)

	for (i = 0; i < series_array.length; i++){
		$(".container").append(`<div class= "col-3 mt-5 mb-5"> <div class="h5">${series_array[i].title}</div> <img class="w-50" src="${series_array[i].src}"> <div class="p font-weight-bold"> ${series_array[i].rating}</div> </div>`)
	}
})