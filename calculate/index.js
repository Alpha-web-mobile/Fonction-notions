// GET DOCUMENT 

let radius = document.getElementById('radius').value;
let btn = document.getElementById('btn');
btn.addEventListener('click', e =>{
e.preventDefault();
   alert(radius)
});

// function calculate(area) {
    //   alert(radius)
    area = 3.1416 * radius * radius;
    alert("The area is equal to =  " + area)
// }