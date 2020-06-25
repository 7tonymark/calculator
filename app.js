var nr1 = 1;
var nr2 = 2;
var nr3 = 3;
var nr4 = 4;
var nr5 = 5;
var nr6 = 6;
var nr7 = 7;
var nr8 = 8;
var nr9 = 9;
var nr0 = 0;
var dot = '.';
var plus = '+';
var minus = '-';
var multiply = '*';
var divide = '/';



document.querySelector('.one').addEventListener('click', function (){
document.querySelector('.current-operand').textContent += nr1;
});
document.querySelector('.two').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr2;
});
document.querySelector('.three').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr3;
});
document.querySelector('.four').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr4;
});
document.querySelector('.five').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr5;
});
document.querySelector('.six').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr6;
});
document.querySelector('.seven').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr7;
});
document.querySelector('.eight').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr8;
});
document.querySelector('.nine').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr9;
});
document.querySelector('.zero').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += nr0;
});
document.querySelector('.dot').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += dot;
});
document.querySelector('.plus').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += plus;
});
document.querySelector('.minus').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += minus;
});
document.querySelector('.divide').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += divide;
});
document.querySelector('.multiply').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent += multiply;
});
document.querySelector('.equal').addEventListener('click', function (){
document.querySelector('.current-operand').textContent = eval(document.querySelector('.current-operand').textContent);
});
document.querySelector('.ac').addEventListener('click', function (){
    document.querySelector('.current-operand').textContent = null;
});



