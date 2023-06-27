const url= "https://api.api-ninjas.com/v1/quotes?category=happiness/X-Api-Key=VKr1OQI2V7LVeaabDKOCDjrJPQGBYWTQ9sVadyl9";
const aps = "VKr1OQI2V7LVeaabDKOCDjrJPQGBYWTQ9sVadyl9"

async function quote() {
    const response =await fetch(url);
    const data = await response.json();
    console.log(data);
}
quote();

var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'VKr1OQI2V7LVeaabDKOCDjrJPQGBYWTQ9sVadyl9'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
