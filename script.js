function fibonacci(num) {
// your code here
	if(num==1)return 0;
	let first=0;
	let second=1;
	for(let i=2;i<num;i++){
		const temp=second;
		second=first+second;
		first=temp;
	}
	return second;
}

module.exports = fibonacci;