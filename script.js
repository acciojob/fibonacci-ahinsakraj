function fibonacci(num) {
// your code here
	if(num == 0 || num == 1) {
		return 0;
	}
	let x = 0;
	let y = 1;
	for(let i = 2; i < num; i++) {
		let temp = x;
		x = y;
		y = x + y;
	}
	return y;
}

module.exports = fibonacci;