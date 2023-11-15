"use strict";
console.log("Let's get this party started!");

async function getGiphy(event){
  event.preventDefault();
  console.log("test");
  const searchTerm = $("#searchBox").val();
  const params = new URLSearchParams({
    "q": searchTerm,
    "api_key": "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  });
  const fetchResponse = await fetch(`http://api.giphy.com/v1/gifs/search?${params}`);
  const fetchText = await fetchResponse.text();
  console.log("type= ", typeof(fetchText));
  console.log("response= ", fetchText);
}

$("form").on("submit", getGiphy);