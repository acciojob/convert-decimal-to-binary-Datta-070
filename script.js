function decimalToBinary(num) {
  // your code here
	let str='';
	while(num>0){
		str=num%2+str;
		num=Math.floor(num/2)
	}
	return str;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
