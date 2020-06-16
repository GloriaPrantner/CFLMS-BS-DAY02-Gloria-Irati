$(document).ready(function () {

let series_array = JSON.parse(series)


for (i = 0; i < series_array.length; i++){
	if (i == 0){
	$("#v-pills-tab").append(`<a class="nav-link active" id="v_pills_0_tab" data-toggle="pill" href="#v_pills_0" role="tab" aria-controls="v_pills_0" aria-selected="true">${series_array[i].title}</a>`)
	$("#v-pills-tabContent").append(`<div class=" tab-pane fade show active" id="v_pills_0" 	 aria-labelledby="v_pills_0_tab"><h1 class = "h1">${series_array[i].title}</h1></div>`)

	} else {
		$("#v-pills-tab").append(`<a class="nav-link" id="v_pills_${i}_tab" data-toggle="pill" href="#v_pills_${i}" role="tab" aria-controls="v_pills_${i}" aria-selected="true">${series_array[i].title}</a>`)
		$("#v-pills-tabContent").append(`<div class="tab-pane fade" id="v_pills_${i}" role="tabpanel" aria-labelledby="v_pills_${i}_tab"><h1 class = "h1">${series_array[i].title}</h1></div>`)
	}

}

})