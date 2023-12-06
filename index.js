

function outcome() { //função para fazer com que o botão funcione

    let num1 = Number(document.getElementById('num-one').value) //pega o valor da primeira caixinha
    let num2 = Number(document.getElementById('num-two').value) //pega o valor da segunda caixinha
    let total = 0

    if (document.getElementById('box1').checked) //verifica se a box1 está marcada
        total = num1 + num2
    else if (document.getElementById('box2').checked) //verifica se a box2 está marcada
        total = num1 - num2
    else if (document.getElementById('box3').checked) //verifica se a box3 está marcada
        total = num1 * num2
    else //verifica se a box4 está marcada
        total = num1 / num2
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total) //retorna o valor dos cálculos
