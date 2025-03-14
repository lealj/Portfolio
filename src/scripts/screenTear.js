// Screen tear animation controller.
function addScreenTear() {
    const tear = document.createElement("div");
    tear.className = "screen-tear";
    tear.style.position = "fixed";
    tear.style.left = "0";
    tear.style.width = "100%";
    tear.style.height = "300px";
    tear.style.bottom = "-300px";
    tear.style.background = "linear-gradient(180deg, transparent 0%, rgba(75, 75, 75, 0.29) 80%, rgba(75, 75, 75, 0.34) 92%, transparent 100%)";

    tear.style.animation = "screenTear 3.5s linear";
    tear.style.pointerEvents = "none";

    document.body.appendChild(tear);

    setTimeout(() => {
        tear.remove();
        setTimeout(addScreenTear, 5000);
    }, 5000);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(addScreenTear, 1000);
});
