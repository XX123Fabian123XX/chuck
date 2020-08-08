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
    if (data.value.length >= 600) {
        textField.style.fontsSize = "1.7rem"
    }
     else if (data.value.length >= 500) {
        textField.style.fontSize = "2rem"
    } else if (data.value.length >= 400) {
        textField.style.fontSize = "2.2rem";
    } else if (data.value.length >=250) {
        textField.style.fontSize = "2.5rem"
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







