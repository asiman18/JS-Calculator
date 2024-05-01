let btonum = document.getElementById("btn")
    btonum.addEventListener("click", function() {
    let width = parseInt(document.getElementById("First").value);
    let height = parseInt(document.getElementById("Second").value);
    let backgroundColor = document.getElementById("Third").value;
    let borderRadius = parseInt(document.getElementById("the fifth").value);

    let netice = document.getElementById("Netice");

    netice.style.width = width + "px";
    netice.style.height = height + "px";
    netice.style.backgroundColor = backgroundColor;
    netice.style.borderRadius = borderRadius + "px";
});
