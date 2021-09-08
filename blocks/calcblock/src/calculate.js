const calcBlock = document.querySelector('.wp-block-calc-block-calcblock');

/**
 * Function to calculate the final value when the button is clicked
 */
const calcButton = calcBlock.querySelector('.calc-block-exec-button');
let result = '';
calcButton.addEventListener('click', (event) => {
	let inputs = event.target.parentNode.querySelectorAll('input[type=number]');
	let total = [];
	for (let i = 0; i < inputs.length; i++) {
		total.push(inputs[i].value);
	}
	result = total.reduce((sum, val) => parseFloat(sum) + parseFloat(val));
	insertResult(result, calcBlock);
});

/**
 * Function to display the final result
 */
const insertResult = function (result, block) {
	const resultContainer = document.createElement('div');
	resultContainer.innerHTML = `The total is ${result}.`;
	block.append(result);
};
