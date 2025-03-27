function findLargest(a, b, c) {
  //your code here
	let largestNum=-Infinity;
	if(a>b && b>c){
		largestNum=a;
	}else if(b>a && a>c){
		largestNum=b
	}else if(c>b && b>a){
		largestNum=c
	}

	return largestNum

	
	 
}

const num1 = parseInt(prompt("Enter First Number."));
const num2 = parseInt(prompt("Enter Second Number."));
const num3 = parseInt(prompt("Enter Third Number."));
alert(findLargest(num1, num2, num3));
