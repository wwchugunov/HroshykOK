// function updateValue(sliderId, outputId, blockType) {
//     const slider = document.getElementById(sliderId);
//     const output = document.getElementById(outputId);
//     const creditBodyValue = document.getElementById('creditBodyValue');
//     const creditLineValue = document.getElementById('creditLineValue');
//     const creditPayValue = document.getElementById('creditPayValue');

//     output.innerText = slider.value;

//     // Обновляем соответствующие элементы в каждом блоке
//     if (blockType === 'creditinfoscoupe') {
//         if (outputId === 'output1') {
//             const creditAmount = parseFloat(slider.value);
//             const numberOfDays = parseFloat(document.getElementById('output2').innerText);
//             const annualInterestRate = 7; // 700% годовых
//             const interestAmount = (creditAmount * annualInterestRate * numberOfDays) / 360;
//             const totalAmount = creditAmount + interestAmount;
//             // const totalAmount = creditBodyValue * (1 + annualInterestRate)

//             creditBodyValue.innerText = slider.value + ' днів';
//             creditPayValue.innerText = totalAmount.toFixed(2) + ' грн';
//         } else if (outputId === 'output2') {
//             creditLineValue.innerText = slider.value + ' днів';
//             const creditAmount = parseFloat(document.getElementById('output1').innerText);
//             const numberOfDays = parseFloat(slider.value);
//             const annualInterestRate = 7; // 700% годовых
//             const interestAmount = (creditAmount * annualInterestRate * numberOfDays) / 365;
//             const totalAmount = creditAmount + interestAmount;

//             creditPayValue.innerText = totalAmount.toFixed(2) + ' грн';
//         }
//     }
// }



function updateValue(sliderId, outputId, blockType) {
    const slider = document.getElementById(sliderId);
    const output = document.getElementById(outputId);
    const creditBodyValue = document.getElementById('creditBodyValue');
    const creditLineValue = document.getElementById('creditLineValue');
    const creditPayValue = document.getElementById('creditPayValue');

    output.innerText = slider.value;

    // Обновляем соответствующие элементы в каждом блоке
    if (blockType === 'creditinfoscoupe') {
        if (outputId === 'output1') {
            const creditAmount = parseFloat(slider.value);
            const numberOfDays = parseFloat(document.getElementById('output2').innerText);
            const annualInterestRate = 7; // 700% годовых
            const interestAmount = (creditAmount * annualInterestRate * numberOfDays) / 360;
            const totalAmount = creditAmount + interestAmount;

            creditBodyValue.innerText = slider.value + ' днів';
            creditPayValue.innerText = totalAmount.toFixed(2) + ' грн';
        } else if (outputId === 'output2') {
            const creditAmount = parseFloat(document.getElementById('output1').innerText);
            const numberOfDays = parseFloat(slider.value);
            const annualInterestRate = 7; // 700% годовых
            const interestAmount = (creditAmount * annualInterestRate * numberOfDays) / 365;
            const totalAmount = creditAmount + interestAmount;

            creditLineValue.innerText = slider.value + ' днів';
            creditPayValue.innerText = totalAmount.toFixed(2) + ' грн';
        }
    }
}





