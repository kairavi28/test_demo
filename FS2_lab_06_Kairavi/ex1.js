let container = document.querySelector("#container");
let add = document.querySelector("#add");
let remove = document.querySelector("#remove");

add.addEventListener('click', event => {
    var p = document.createElement("p");
    p.textContent = "This is a paragraph!";
    p.className = "container-item";
    container.appendChild(p);
});
remove.addEventListener('click', event => {
    try {
        if (container.childNodes == "") throw "no child nodes";
        container.removeChild(container.lastElementChild);
    } catch (err) {
        alert("No paragraph element to delete");
    }
});