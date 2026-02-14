function markComplete() {
    localStorage.setItem("progress", "100");
    alert("Course Completes!");
}

window.onload = function () {
    let progress = localStorage.getItem("progress");
    if  (progress) {
        document.getElementById("progress-fill").style.width = progress + "%";
        this.document.getElementById("progress-text").innerText = progress + "%";
    }
}