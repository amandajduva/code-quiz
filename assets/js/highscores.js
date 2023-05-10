let highScores = JSON.parse(localStorage.getItem("scores")) || []
highScores.sort(function(a,b){
    return b.score - a.score
})

highScores.forEach(score => {
    let liEl = document.createElement("li");
    liEl.textContent = score.initals+" - " + score.score
    document.querySelector("ol").append(liEl)
});

document.querySelector("#clear").addEventListener("click", function(){
    localStorage.clear();
    document.location.reload();
})
