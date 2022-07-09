const C3 = new Audio ("C3-tab.mp3");
const Chash3 = new Audio ("Ch3-(1).mp3");
const D3 = new Audio ("D3-q.mp3");
const Dhash3 = new Audio ("Dh3-(2).mp3");
const E3 = new Audio ("E3-w.mp3");
const F3 = new Audio ("F3-e.mp3");
const Fhash3 = new Audio ("Fh3-(4).mp3");
const G3 = new Audio ("G3-r.mp3");
const Ghash3 = new Audio ("Gh3-(5).mp3");
const A3 = new Audio ("A3-t.mp3");
const Ahash3 = new Audio ("Ah3-(6).mp3");
const B3 = new Audio ("B3-y.mp3");
const C4 = new Audio ("C4-u.mp3");
const Chash4 = new Audio ("Ch4-(8).mp3");
const D4 = new Audio ("D4-i.mp3");
const Dhash4 = new Audio ("Dh4-(9).mp3");
const E4 = new Audio ("E4-o.mp3");
const F4 = new Audio ("F4-p.mp3");
const Fhash4 = new Audio ("Fh4-(a).mp3");
const G4 = new Audio ("G4-z.mp3");
const Ghash4 = new Audio ("Gh4-(s).mp3");
const A4 = new Audio ("A4-x.mp3");
const Ahash4 = new Audio ("Ah4-(d).mp3");
const B4 = new Audio ("B4-c.mp3");
const C5 = new Audio ("C5-v.mp3");
const Chash5 = new Audio ("Ch5-(g).mp3");
const D5 = new Audio ("D5-b.mp3");
const Dhash5 = new Audio ("Dh5-(h).mp3");
const E5 = new Audio ("E5-n.mp3");
const F5 = new Audio ("F5-m.mp3");
const Fhash5 = new Audio ("Fh5-(k).mp3");
const G5 = new Audio ("G5-comma.mp3");
const Ghash5 = new Audio ("Gh5-(l).mp3");
const A5 = new Audio ("A5-dot.mp3");
const Ahash5 = new Audio ("Ah5-semi.mp3");
const B5 = new Audio ("B5-slash.mp3");
const C6 = new Audio ("C6-shift.mp3");


function playsound(sound) {
    sound.play();
}

const C3key = document.querySelector(".C3");
const playC3 = () => {
    playsound(C3);
    C3key.classList.add("whiteShadow");
    setTimeout(() => { C3key.classList.remove("whiteShadow")},200); //setTimeout (function () {}, sec);
}
C3key.addEventListener("click", playC3 );

const Ch3key = document.querySelector(".Ch3");
const playCh3 = () => {
    playsound(Chash3);
    Ch3key.classList.add("blackPress");
    Ch3key.classList.add("blackShadow");
    setTimeout(() => { Ch3key.classList.remove("blackPress")},200);
    setTimeout(() => { Ch3key.classList.remove("blackShadow")},200);
}
Ch3key.addEventListener("click", playCh3 );

const D3key = document.querySelector(".D3");
const playD3 = () => {
    playsound(D3);
    D3key.classList.add("whiteShadow");
    setTimeout(() => { D3key.classList.remove("whiteShadow")},200);
}
D3key.addEventListener("click", playD3 );

const Dh3key = document.querySelector(".Dh3");
const playDh3 = () => {
    playsound(Dhash3);
    Dh3key.classList.add("blackPress");
    setTimeout(() => { Dh3key.classList.remove("blackPress")},200);
    Dh3key.classList.add("blackShadow");
    setTimeout(() => { Dh3key.classList.remove("blackShadow")},200);
}
Dh3key.addEventListener("click", playDh3 );

const E3key = document.querySelector(".E3");
const playE3 = () => {
    playsound(E3);
    E3key.classList.add("whiteShadow");
    setTimeout(() => { E3key.classList.remove("whiteShadow")},200);
}
E3key.addEventListener("click", playE3 );

const F3key = document.querySelector(".F3");
const playF3 = () => {
    playsound(F3);
    F3key.classList.add("whiteShadow");
    setTimeout(() => { F3key.classList.remove("whiteShadow")},200);
}
F3key.addEventListener("click", playF3 );

const Fh3key = document.querySelector(".Fh3");
const playFh3 = () => {
    playsound(Fhash3);
    Fh3key.classList.add("blackPress");
    setTimeout(() => { Fh3key.classList.remove("blackPress")},200);
    Fh3key.classList.add("blackShadow");
    setTimeout(() => { Fh3key.classList.remove("blackShadow")},200);
}
Fh3key.addEventListener("click", playFh3 );

const G3key = document.querySelector(".G3");
const playG3 = () => {
    playsound(G3);
    G3key.classList.add("whiteShadow");
    setTimeout(() => { G3key.classList.remove("whiteShadow")},200);
}
G3key.addEventListener("click", playG3 );

const Gh3key = document.querySelector(".Gh3");
const playGh3 = () => {
    playsound(Ghash3);
    Gh3key.classList.add("blackPress");
    setTimeout(() => { Gh3key.classList.remove("blackPress")},200);
    Gh3key.classList.add("blackShadow");
    setTimeout(() => { Gh3key.classList.remove("blackShadow")},200);
}
Gh3key.addEventListener("click", playGh3);

const A3key = document.querySelector(".A3");
const playA3 = () => {
    playsound(A3);
    A3key.classList.add("whiteShadow");
    setTimeout(() => { A3key.classList.remove("whiteShadow")},200);
}
A3key.addEventListener("click", playA3 );

const Ah3key = document.querySelector(".Ah3");
const playAh3 = () => {
    playsound(Ahash3);
    Ah3key.classList.add("blackPress");
    setTimeout(() => { Ah3key.classList.remove("blackPress")},200);
    Ah3key.classList.add("blackShadow");
    setTimeout(() => { Ah3key.classList.remove("blackShadow")},200);
}
Ah3key.addEventListener("click", playAh3 );

const B3key = document.querySelector(".B3");
const playB3 = () => {
    playsound(B3);
    B3key.classList.add("whiteShadow");
    setTimeout(() => { B3key.classList.remove("whiteShadow")},200);
}
B3key.addEventListener("click", playB3 );

const C4key = document.querySelector(".C4");
const playC4 = () => {
    playsound(C4);
    C4key.classList.add("whiteShadow");
    setTimeout(() => { C4key.classList.remove("whiteShadow")},200);
}
C4key.addEventListener("click", playC4 );

const Ch4key = document.querySelector(".Ch4");
const playCh4 = () => {
    playsound(Chash4);
    Ch4key.classList.add("blackPress");
    setTimeout(() => { Ch4key.classList.remove("blackPress")},200);
    Ch4key.classList.add("blackShadow");
    setTimeout(() => { Ch4key.classList.remove("blackShadow")},200);
}
Ch4key.addEventListener("click", playCh4 );

const D4key = document.querySelector(".D4");
const playD4 = () => {
    playsound(D4);
    D4key.classList.add("whiteShadow");
    setTimeout(() => { D4key.classList.remove("whiteShadow")},200);
}
D4key.addEventListener("click", playD4);

const Dh4key = document.querySelector(".Dh4");
const playDh4 = () => {
    playsound(Dhash4);
    Dh4key.classList.add("blackPress");
    setTimeout(() => { Dh4key.classList.remove("blackPress")},200);
    Dh4key.classList.add("blackShadow");
    setTimeout(() => { Dh4key.classList.remove("blackShadow")},200);
}
Dh4key.addEventListener("click", playDh4 );

const E4key = document.querySelector(".E4");
const playE4 = () => {
    playsound(E4);
    E4key.classList.add("whiteShadow");
    setTimeout(() => { E4key.classList.remove("whiteShadow")},200);
}
E4key.addEventListener("click",playE4);

const F4key = document.querySelector(".F4");
const playF4 = () => {
    playsound(F4);
    F4key.classList.add("whiteShadow");
    setTimeout(() => { F4key.classList.remove("whiteShadow")},200);
}
F4key.addEventListener("click",playF4);

const Fh4key = document.querySelector(".Fh4");
const playFh4 = () => {
    playsound(Fhash4);
    Fh4key.classList.add("blackPress");
    setTimeout(() => { Fh4key.classList.remove("blackPress")},200);
    Fh4key.classList.add("blackShadow");
    setTimeout(() => { Fh4key.classList.remove("blackShadow")},200);
}
Fh4key.addEventListener("click",playFh4);

const G4key = document.querySelector(".G4");
const playG4 = () => {
    playsound(G4);
    G4key.classList.add("whiteShadow");
    setTimeout(() => { G4key.classList.remove("whiteShadow")},200);
}
G4key.addEventListener("click",playG4);

const Gh4key = document.querySelector(".Gh4");
const playGh4 = () => {
    playsound(Ghash4);
    Gh4key.classList.add("blackPress");
    setTimeout(() => { Gh4key.classList.remove("blackPress")},200);
    Gh4key.classList.add("blackShadow");
    setTimeout(() => { Gh4key.classList.remove("blackShadow")},200);
}
Gh4key.addEventListener("click",playGh4);

const A4key = document.querySelector(".A4");
const playA4 = () => {
    playsound(A4);
    A4key.classList.add("whiteShadow");
    setTimeout(() => { A4key.classList.remove("whiteShadow")},200);
}
A4key.addEventListener("click",playA4);

const Ah4key = document.querySelector(".Ah4");
const playAh4 = () => {
    playsound(Ahash4);
    Ah4key.classList.add("blackPress");
    setTimeout(() => { Ah4key.classList.remove("blackPress")},200);
    Ah4key.classList.add("blackShadow");
    setTimeout(() => { Ah4key.classList.remove("blackShadow")},200);
}
Ah4key.addEventListener("click",playAh4);

const B4key = document.querySelector(".B4");
const playB4 = () => {
    playsound(B4);
    B4key.classList.add("whiteShadow");
    setTimeout(() => { B4key.classList.remove("whiteShadow")},200);
}
B4key.addEventListener("click",playB4);

const C5key = document.querySelector(".C5");
const playC5 = () => {
    playsound(C5);
    C5key.classList.add("whiteShadow");
    setTimeout(() => { C5key.classList.remove("whiteShadow")},200);
}
C5key.addEventListener("click",playC5);

const Ch5key = document.querySelector(".Ch5");
const playCh5 = () => {
    playsound(Chash5);
    Ch5key.classList.add("blackPress");
    setTimeout(() => { Ch5key.classList.remove("blackPress")},200);
    Ch5key.classList.add("blackShadow");
    setTimeout(() => { Ch5key.classList.remove("blackShadow")},200);
}
Ch5key.addEventListener("click",playCh5);

const D5key = document.querySelector(".D5");
const playD5 = () => {
    playsound(D5);
    D5key.classList.add("whiteShadow");
    setTimeout(() => { D5key.classList.remove("whiteShadow")},200);
}
D5key.addEventListener("click",playD5);

const Dh5key = document.querySelector(".Dh5");
const playDh5 = () => {
    playsound(Dhash5);
    Dh5key.classList.add("blackPress");
    setTimeout(() => { Dh5key.classList.remove("blackPress")},200);
    Dh5key.classList.add("blackShadow");
    setTimeout(() => { Dh5key.classList.remove("blackShadow")},200);
}
Dh5key.addEventListener("click",playDh5);

const E5key = document.querySelector(".E5");
const playE5 = () => {
    playsound(E5);
    E5key.classList.add("whiteShadow");
    setTimeout(() => { E5key.classList.remove("whiteShadow")},200);
}
E5key.addEventListener("click",playE5);

const F5key = document.querySelector(".F5");
const playF5 = () => {
    playsound(F5);
    F5key.classList.add("whiteShadow");
    setTimeout(() => { F5key.classList.remove("whiteShadow")},200);
}
F5key.addEventListener("click",playF5);

const Fh5key = document.querySelector(".Fh5");
const playFh5 = () => {
    playsound(Fhash5);
    Fh5key.classList.add("blackPress");
    setTimeout(() => { Fh5key.classList.remove("blackPress")},200);
    Fh5key.classList.add("blackShadow");
    setTimeout(() => { Fh5key.classList.remove("blackShadow")},200);
}
Fh5key.addEventListener("click",playFh5);

const G5key = document.querySelector(".G5");
const playG5 = () => {
    playsound(G5);
    G5key.classList.add("whiteShadow");
    setTimeout(() => { G5key.classList.remove("whiteShadow")},200);
}
G5key.addEventListener("click",playG5);

const Gh5key = document.querySelector(".Gh5");
const playGh5 = () => {
    playsound(Ghash5);
    Gh5key.classList.add("blackPress");
    setTimeout(() => { Gh5key.classList.remove("blackPress")},200);
    Gh5key.classList.add("blackShadow");
    setTimeout(() => { Gh5key.classList.remove("blackShadow")},200);
}
Gh5key.addEventListener("click",playGh5);

const A5key = document.querySelector(".A5");
const playA5 = () => {
    playsound(A5);
    A5key.classList.add("whiteShadow");
    setTimeout(() => { A5key.classList.remove("whiteShadow")},200);
}
A5key.addEventListener("click",playA5);

const Ah5key = document.querySelector(".Ah5");
const playAh5 = () => {
    playsound(Ahash5);
    Ah5key.classList.add("blackPress");
    setTimeout(() => { Ah5key.classList.remove("blackPress")},200);
    Ah5key.classList.add("blackShadow");
    setTimeout(() => { Ah5key.classList.remove("blackShadow")},200);
}
Ah5key.addEventListener("click",playAh5);

const B5key = document.querySelector(".B5");
const playB5 = () => {
    playsound(B5);
    B5key.classList.add("whiteShadow");
    setTimeout(() => { B5key.classList.remove("whiteShadow")},200);
}
B5key.addEventListener("click",playB5);

const C6key = document.querySelector(".C6");
const playC6 = () => {
    playsound(C6);
    C6key.classList.add("whiteShadow");
    setTimeout(() => { C6key.classList.remove("whiteShadow")},200);
}
C6key.addEventListener("click",playC6);


//Keyboard Event

document.addEventListener("keypress", (event) =>{
    keySound(event.key);
});


function keySound (key) {

    switch (key) {

        case "q":playD3();
            break;

        case "w": playE3();
        break;

        case "e":playF3();
        break;

        case "r":playG3();
        break;

        case "t":playA3();
        break;

        case "y":playB3();
        break;

        case "u":playC4();
        break;

        case "i": playD4();
        break;

        case "o": playE4();
        break;

        case "p": playF4();
        break;

        case "z": playG4();
        break;

        case "x":  playA4();
        break;

        case "c":playB4();
        break;

        case "v":  playC5();
        break;

        case "b":playD5();
        break;

        case "n": playE5();
        break;

        case "m": playF5();
        break;

        case ",": playG5();
        break;

        case ".": playA5();
        break;

        case "/": playB5();
        break;

        case "1": playCh3(); 
        break;

        case "2": playDh3(); 
        break;

        case "4": playFh3(); 
        break;

        case "5": playGh3(); 
        break;

        case "6": playAh3(); 
        break;

        case "8": playCh4(); 
        break;

        case "9": playDh4(); 
        break;

        case "a": playFh4(); 
        break;

        case "s": playGh4(); 
        break;

        case "d": playAh4(); 
        break;

        case "g": playCh5(); 
        break;

        case "h": playDh5(); 
        break;

        case "k": playFh5(); 
        break;

        case "l": playGh5(); 
        break;

        case ";": playAh5(); 
        break;

        default: console.log(key);
    }
}

