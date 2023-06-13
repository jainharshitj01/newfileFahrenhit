let celsius = document.getElementById('celsius');
let fahrenhit = document.getElementById('fahrenhit');

celsius.oninput = () => {
    let output = (parseFloat(celsius.value)*9)/5+32;
    fahrenhit.value=parseFloat(output.toFixed(2));
};
fahrenhit.oninput = () => {
    let output = (parseFloat(fahrenhit.value)-32*5)/9;
    celsius.value=parseFloat(output.toFixed(2));
};
