var goHome = document.getElementById("go-home");
// var first = document.getElementById("first");
// var second = document.getElementById("second");
// var third = document.getElementById("third");
// var fourth = document.getElementById("fourth");
// var fifth = document.getElementById("fifth");

//Going back to home page
goHome.addEventListener("click", function(event) {
    window.location.href = "index.html";
  });

//Display high-scores
function displayScoreListitem(){
    var playerArray = localStorage.getItem("player-score"); 

    // first.textContent = "1. " + playerArray;

    // if (playerArray >= second.playerArray) {
    //         first.textContent = "1. " + playerArray;
    //     }

    // if (playerArray >= third.playerArray && playerArray < first.playerArray) {
    //         second.textContent = "2. " + playerArray;
    //     }
    
    // if (playerArray >= fourth.playerArray && playerArray < second.playerArray) {
    //         third.textContent = "3. " + playerArray;
    //     }
    
    // if (playerArray >= fifth.playerArray && playerArray < third.playerArray) {
    //         fourth.textContent = "4. " + playerArray;
    //     }
    
    // if (playerArray < fourth.playerArray && playerArray > playerArray) {
    //         fifth.textContent = "5. " + playerArray;
    //     }

    //Sort all scores in local storage in descending order
    playerArray = playerArray.sort((a, b) => {
        if (a.playerArray != b.playerArray) return b.playerArray - a.playerArray
        return 0
    })

    //Display only top 10 scores
    for (let i = 0; i < 10; i++) {
        let topTen = document.createElement("li");
        var newScore = document.createTextNode(playerArray); 
        topTen.appendChild(newScore);  

        var playerList = document.getElementById("players");
        playerList.appendChild(topTen); 
        console.log(playerArray[i]);
    }
}
displayScoreListitem()