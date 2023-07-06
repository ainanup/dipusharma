function addContactButton() {
  var button = document.createElement("button");
  button.innerHTML = "Contact Us";
  button.onclick = function() {
    window.location.href = "mailto:carpentry@example.com";
  };
  document.body.appendChild(button);
}

function addGoogleMapsEmbed() {
  var embed = document.createElement("iframe");
  embed.src = "https://www.google.com/maps/embed/v1/place?q=carpentry&key=YOUR_API_KEY";
  embed.height = 400;
  embed.width = 600;
  document.body.appendChild(embed);
}
