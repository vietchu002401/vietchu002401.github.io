const kanaList = [
  "あ", "い", "う", "え", "お",
  "か", "き", "く", "け", "こ",
  "さ", "し", "す", "せ", "そ",
  "た", "ち", "つ", "て", "と"
];

const latinList = [
  "a", "i", "u", "e", "o",
  "ka", "ki", "ku", "ke", "ko",
  "sa", "shi", "su", "se", "so",
  "ta", "chi", "tsu", "te", "to"
];

const nameKana = document.getElementById("name-kana");
const nameLatin = document.getElementById("name-latin");
const btn = document.getElementById("next-btn");
let index = 0;
let previousIndex = 0;
let randomNum = 0;

const random = ()=>{
    while(randomNum === index || randomNum === previousIndex){
       randomNum = Math.floor(Math.random() * kanaList.length);
    }
    if (nameLatin.innerText !== "" || (nameLatin.innerText === "" && nameKana.innerText === "")){
        previousIndex = index;
        index = randomNum;
        nameLatin.innerText = "";
        nameKana.innerText = kanaList[index];
        console.log(randomNum);
        return;
    }

    nameLatin.innerText = latinList[index];
}

btn.addEventListener("click", random);