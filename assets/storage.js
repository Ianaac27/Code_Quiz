var goHome = document.getElementById("go-home");

//Going back to home page
goHome.addEventListener("click", function(event) {
    window.location.href = "index.html";
  });

//Display high-scores
function displayScoreListitem(){
    var playerArray = localStorage.getItem("player-score"); 

    //Display only top 10 scores
    // for (let i = 0; i < 10; i++) {
        let topTen = document.createElement("li");
        var newScore = document.createTextNode(playerArray); 
        topTen.appendChild(newScore);  

        var playerList = document.getElementById("players");
        playerList.appendChild(topTen); 
        console.log(playerArray);
    }// }

displayScoreListitem()