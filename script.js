const buttons = document.querySelectorAll(".button");
const body = document.body;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const color = e.target.id;
        if (color) {
            body.style.backgroundColor = color;
            body.style.transition = "0.2s ease-in";
        }
    });
});
