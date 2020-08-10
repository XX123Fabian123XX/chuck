document.getElementById("button").addEventListener("click",async () => {
    displayFact( await getFact());
} )


const getFact = async () => {
    const data = await (await (await fetch("https://api.chucknorris.io/jokes/random")).json());
    console.log(data.value.length);
    return data.value;
}

const displayFact = fact => {
    const text = document.getElementById("text")
    if (fact.length > 400) {
        text.style.fontSize = "2.1"
    }
    else if (fact.length > 180) {
        text.style.fontSize = "2.5rem"
    } else {
        text.style.fontSize="3rem";
    }

    text.textContent = fact
}
