document.getElementById("button").addEventListener("click", async () => {
    const data = await (await (await fetch("https://api.chucknorris.io/jokes/random")).json());
    document.getElementById("text").textContent = data.value;
})
