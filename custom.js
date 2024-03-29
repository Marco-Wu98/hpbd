window.onload = function () {
    var img = document.getElementById("img");
    var yesBtn = document.getElementById("yes-btn");
    var noBtn = document.getElementById("no-btn");
    noBtn.addEventListener("mouseover", function () {
        const x = Math.floor(Math.random() * (window.innerWidth - 150) / 2.2);
        const y = Math.floor(Math.random() * (window.innerHeight - 150) / 2.2);
        noBtn.style.left = `${x}px`;

        noBtn.style.top = `${y}px`;
    })
    yesBtn.addEventListener("click", function () {
        var pass = prompt("Enter your birth day (xxxx)");
        if (pass == "2803") {
            img.src = "dtt.jpg";
            var gift = document.getElementById("gift");
            gift.style.opacity = "1";
        } else if (pass == "2403") {
            img.src = "hha.jpg";
            var gift = document.getElementById("gift");
            gift.style.opacity = "1";
        }
        else{
            alert("Wrong pass-word!!!!");
        }
    })
}