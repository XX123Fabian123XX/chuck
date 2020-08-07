const button  = document.getElementById("button");
const textField = document.getElementById("text");
const navigate = document.getElementById("navigate");

const fetchFacts  = async () => {
    const data = await (await fetch("https://api.chucknorris.io/jokes/random")).json();
    return data;
}

const updateFields = async () => {
    const data = await fetchFacts();
    console.log(data.value.length)
    if (data.value.length >= 300) {
        textField.style.fontSize = "2.5rem"
    } else if (data.value.length >= 400) {
        textField.style.fontSize = "2rem";
    } 
    else {
        textField.style.fontSize = "3rem";
    }

    // textField.textContent = data.value
    textField.textContent = data.value;
}

button.addEventListener("click", updateFields)

navigate.addEventListener("click",() => {
})

// generate a first random fact
updateFields();

// for(let i = 0;i<5000;i++) {
//     setTimeout(() => {
//         updateFields()
//     },50 * i);
// }







