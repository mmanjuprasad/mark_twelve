const inputs = document.querySelectorAll('.area-input');
const areaBtn = document.querySelector('#area-btn');
const areaOutput = document.querySelector('#area-output');

function multiplyBaseAndHeight(base, height) {
	const multipliedOutput = base * height;
	return multipliedOutput;
}

function calculateArea() {
	const area = (inputs[0].value * inputs[1].value)/2
	const basexheight = multiplyBaseAndHeight(inputs[0].value, inputs[1].value);
	// const area = basexheight / 2;
	console.log({ area });
	areaOutput.innerText = "The area of the triangle is " + area + " cm2";
}

areaBtn.addEventListener('click', calculateArea);