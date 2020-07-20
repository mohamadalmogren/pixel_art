// Select color input
// Select size input
const colorPicker=document.getElementById('colorPicker');
const pixelCanvas=document.getElementById('pixelCanvas');
const cellsNUM=document.getElementById('inputWidth');
const rowsNUM=document.getElementById('inputHeight');
const form=document.getElementById('sizePicker');


// When size is submitted by the user, call makeGrid()
form.addEventListener('submit',function(event){
    pixelCanvas.innerHTML='';
    event.preventDefault();
    makeGrid();
});


pixelCanvas.addEventListener('click',function(event){
    if (event.target.nodeName ==='TD') {
        event.target.style.backgroundColor =colorPicker.value;
    }
})
function makeGrid() {
for(let i=0;i<rowsNUM.value ;i++){
    const row=pixelCanvas.insertRow(0);
    for(let j=0;j<cellsNUM.value;j++){
        row.insertCell(0);
    }
};

}
