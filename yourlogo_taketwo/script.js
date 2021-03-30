const actualCopyright = document.getElementById('footerCopyright');
let newColor = '';

actualCopyright.onclick = () => {
    actualCopyright.innerHTML = 'actually made by max';
    actualCopyright.style.padding = '12px';
    newColor = `rgb(${Math.floor(Math.random()*257)}, ${Math.floor(Math.random()*257)}, ${Math.floor(Math.random()*257)})`;
    actualCopyright.style.color = newColor;
};