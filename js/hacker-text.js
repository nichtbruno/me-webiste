const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321"

const elements = document.querySelectorAll('[id="hacker"]');

elements.forEach((element) => {
    element.addEventListener('mouseover', (event) => {
        let iterations = 0;
        const interval = setInterval(() => {
            event.target.innerText = event.target.innerText.split("")
                .map((letter, index) => {
                    if(letter === ".") return letter
    
                    if(index < iterations) {
                        return event.target.dataset.value[index];
                    }
    
                    return letters[Math.floor(Math.random() * 36)];
                })
                .join("");
            
            if(iterations >= event.target.dataset.value.length) clearInterval(interval);
            
            iterations += 1 / 3;
        }, 30);
    })
});