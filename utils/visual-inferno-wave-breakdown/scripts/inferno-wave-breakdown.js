//DOM elements
const previousWaveBtn = document.querySelector("#previousWaveBtn");
const nextWaveBtn = document.querySelector("#nextWaveBtn");
const imageContainer = document.querySelector("#imageContainer")
const currentWave = document.querySelector("#wave");
const waveInput = document.querySelector("#waveNumInput")
const waves = 
{
    "1": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }],
    "2": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }],
    "3": [{ "mob": "Nibbler", "num": "6" }],
    "4": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }],
    "5": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }],
    "6": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }],
    "7": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }],
    "8": [{ "mob": "Nibbler", "num": "6" }],
    "9": [{ "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "1" }],
    "10":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Meleer", "num": "1" }],
    "11":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Meleer", "num": "1" }],
    "12":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }],
    "13":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }],
    "14":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }],
    "15":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Meleer", "num": "1" }],
    "16":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "2" }],
    "17":[ { "mob": "Nibbler", "num": "6" }],
    "18":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Ranger", "num": "1" }],
    "19":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "20":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Ranger", "num": "1" }],
    "21":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "22":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "23":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "24":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Ranger", "num": "1" }],
    "25":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "26":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "27":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "28":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "29":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "30":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "31":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }],
    "32":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "2" }, { "mob": "Ranger", "num": "1" }],
    "33":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Ranger", "num": "2" }],
    "34":[ { "mob": "Nibbler", "num": "6" }],
    "35":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Mager", "num": "1" }],
    "36":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "37":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Mager", "num": "1" }],
    "38":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "39":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "40":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "41":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Mager", "num": "1" }],
    "42":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "43":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "44":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "45":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "46":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "47":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "48":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "49":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "2" }, { "mob": "Mager", "num": "1" }],
    "50":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "51":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "52":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "53":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "54":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "55":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "56":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "57":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "58":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "59":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "60":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "61":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "1" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "62":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Bat", "num": "2" }, { "mob": "Blob", "num": "1" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "63":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Blob", "num": "2" }, { "mob": "Meleer", "num": "1" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "64":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Meleer", "num": "2" }, { "mob": "Ranger", "num": "1" }, { "mob": "Mager", "num": "1" }],
    "65":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Ranger", "num": "2" }, { "mob": "Mager", "num": "1" }],
    "66":[ { "mob": "Nibbler", "num": "3" }, { "mob": "Mager", "num": "2" }],
    "67":[ { "mob": "Jad", "num": "1" }],
    "68":[ { "mob": "Jad", "num": "3" }],
    "69":[ { "mob": "Zuk", "num": "1" }]
}

function clearImages()
{
    imageContainer.replaceChildren();
}
function updateWave(waveCount)
{
    currentWave.replaceChildren();
    currentWave.appendChild(document.createTextNode(waveCount.toString()));
    waveInput.value = waveCount.toString();
}
function setImages(wave)
{
    wave.forEach(mob => {
        for(let i = 0; i<mob.num; i++)
        {
            let img = document.createElement("img");
            img.src = `images/mobs/${mob.mob}.webp`;
            img.alt = `${mob.mob}`;
            imageContainer.appendChild(img);
        }
    })
}
 
//init
let waveCount = 1;
updateWave(waveCount)
setImages(waves[waveCount]);

//'main'
previousWaveBtn.addEventListener("click",()=>{
    if(waveCount != 1)
    {
        clearImages()
        waveCount--;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})
nextWaveBtn.addEventListener("click",()=>{
    if(waveCount < 69)
    {
        clearImages()
        waveCount++;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})
waveInput.addEventListener("input",()=>{
    if(waveInput.value && (waveInput.value >0 && waveInput.value <70))
    {
        console.log("waveInput",waveInput.value)
        clearImages()
        waveCount = waveInput.value;
        updateWave(waveCount);
        setImages(waves[waveCount]);
    }
})