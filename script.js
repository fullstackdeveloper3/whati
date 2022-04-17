let content = document.getElementById("content")
let button = document.getElementById("show-ost")
let mbutton = document.getElementById("mbutton")
let out = document.getElementById("out")

let barcontent = document.getElementById("barcontent")
let sidebar = document.getElementById("sidebar")

sidebar.onclick = function() {
    if (barcontent.className === "right") {
        barcontent.className = "left"
        sidebar.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }else {
        barcontent.className = "right"
        sidebar.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    }
}

button.onclick = function () {
    if (content.className === "one") {
        content.className = "zero"
    }else {
        content.className = "one"
    }
}

mbutton.onclick = function () {
    if (content.className === "one") {
        content.className = "zero"
    }else {
        content.className = "one"
    }
}
out.onclick = function () { 
    content.className = "zero"
}