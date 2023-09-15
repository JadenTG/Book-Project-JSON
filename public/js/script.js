function moreText() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
    }
}

function editDes() {
    let description = document.getElementById("des");
    let part1 = substring(0, 40);
    let part2 = substring(41);
}

// Use functions:
// substring() or splice()
// concat()