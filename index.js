function outcome(){
    num1 = Number(document.getElementById('num-one').value)
    num2 = Number(document.getElementById('num-two').value)
    total = 0

    if (document.getElementById('box1').checked)
       total = num1 + num2
    else if (document.getElementById('box2').checked)
       total = num1 - num2
    else if (document.getElementById('box3').checked)
       total = num1 * num2
    else if (document.getElementById('box4').checked)
       total = num1 / num2
    else
       total = num1 * num2/100
    document.getElementById('resultArea').innerHTML = 'Resultado: ' + String(total)
}   
