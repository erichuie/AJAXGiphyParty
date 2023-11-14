"use strict";

console.log("Let's get this party started!");

/**getGiphy takes an event as input and calls the giphy API
 *  to search for whatever term is in the search input box
 * It gets back a JSON containing data on up to 50 images from giphy, picks
 * a random one, and appends it to the page
 */
async function getGiphy(event){
  event.preventDefault();
  console.log("test");

  const searchTerm = $("#searchBox").val();
  const params = new URLSearchParams({
    "q": searchTerm,
    "api_key": "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });

  const fetchResponse = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const fetchObject = await fetchResponse.json();
  //console.log("type= ", typeof(fetchText));
  console.log("response= ", fetchResponse);

  const arrayLength = fetchObject["data"].length;
  const index = Math.floor(Math.random() * arrayLength);
  console.log("array length" + arrayLength);
  const imgUrl = fetchObject["data"][index]["images"]["original"]["url"];

  $("#image_section").append(`<img src = "${imgUrl}">`)
}

$("form").on("submit", getGiphy);

$("#clear").on("click", function(){
  $("#image_section").empty();
});