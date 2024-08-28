const warningElement = document.querySelector("#warning");
const textarea = document.querySelector("#input-text");
const areaDefault = document.querySelector("#default");
const areaResult = document.querySelector("#result");
const textoOut = document.querySelector("#output-text");


const encryptBtn = document.querySelector('#encrypt-btn');
const decryptBtn = document.querySelector('#decrypt-btn');
const copyBtn = document.querySelector('#copy-btn');

const traduccion = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

function encriptar(traduccion) {
    const texto = textarea.value;
    warningElement.removeAttribute("style");

    if (texto && !/[^a-z ]/.test(texto)) {
        let out = texto.split('').map(char => traduccion[char] || char).join('');
        areaDefault.classList.add("hidden");
        areaResult.classList.remove("hidden");
        textoOut.value = out;
    } else {
        if (/[^a-z ]/.test(texto)) {
            warningElement.style.color = "red";
            warningElement.style.fontSize = "1rem";
        } else {
            areaDefault.classList.remove("hidden");
            areaResult.classList.add("hidden");
        }
    }
}

function desencriptar(traduccion) {
    let texto = textarea.value;
    warningElement.removeAttribute("style");

    if (texto && !/[^a-z ]/.test(texto)) {
        for (let key in traduccion) {
            texto = texto.replace(new RegExp(traduccion[key], "g"), key);
        }
        areaDefault.classList.add("hidden");
        areaResult.classList.remove("hidden");
        textoOut.value = texto;
    } else {
        if (/[^a-z ]/.test(texto)) {
            warningElement.style.color = "red";
            warningElement.style.fontSize = "1rem";
        } else {
            areaDefault.classList.remove("hidden");
            areaResult.classList.add("hidden");
        }
    }
}

function clipboard() {
    navigator.clipboard.writeText(textoOut.value);
}

encryptBtn.addEventListener('click', () => encriptar(traduccion));
decryptBtn.addEventListener('click', () => desencriptar(traduccion));
copyBtn.addEventListener('click', clipboard);

