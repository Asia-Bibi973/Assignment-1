// Search Function

function searchSite() {

    let searchValue = document.getElementById("search").value;

    if (searchValue.trim() === "") {

        alert("Please enter something to search!");

    } else {

        alert("Searching for: " + searchValue);

    }

}


// Download Button

let downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        console.log("Traffic Rider download page opened.");

    });

});