const left = document.querySelector(".live"),
    right = document.querySelector(".right"),
    bar = document.querySelector(".bar"),
    editor = document.querySelector(".editor"),
    run = document.querySelector(".btn-run"),
    iframe = document.querySelector(".iframe"),
    darkMode = document.querySelector(".btn-dark"),
    lightMode = document.querySelector(".btn-light");

const drag = (e) => {
    e.preventDefault();
    document.Selection ? document.Selection.empty() :
        window.getSelection().removeAllRangesRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) +
        "px";
    editor.resize();

}
bar.addEventlistener("mousedown", () => {
    document.addEventListener("mousemove", drag);
})
bar.addEventlistener("mouseup", () => {
    document.removeEventListener("mousemove", drag);
})

// Run Btn Event Listener
run.addEventListener("click", () => {
    const html = editor.textContent;
    iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
})

//Set Dark Mode
darkMode.addEventListener("click", () => {
        editor.style.backgroundcolor = "#363836";
        editor.style.color = "#eee";
    })
    //Set Light Mode
lightMode.addEventListener("click", () => {
    editor.style.backgroundcolor = "";
    editor.style.color = "";
})

//LIVE CODE
document.getElementById("live").onclick = function() {
    if (this.checked) {
        editor.addEventListener("keyup", () => {
            const html = editor.textContent;
            iframe.src = "data:text/html;charset=utf-8," + encodeURI(html);
        })

    }
}