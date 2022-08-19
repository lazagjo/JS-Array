// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
// variable a is a String while variable b is an array

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

for(var i=0; i<a.length; i++)
{
	a[i] = a[i] * 2;
}

console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

var num = parseInt(prompt("Enter a number from 1 to 3"));
var outputArray = "";


switch(num){
	case 1:
		for(var i=0; i<colors.length; i++)
		{
			outputArray += colors[i] ;
			if(i!=colors.length-1)
			{
				outputArray += " ";
			}
		}
		break;
	case 2:
		for(var i=0; i<colors.length; i++)
		{
			outputArray += colors[i] ;
			if(i!=colors.length-1)
			{
				outputArray += "+";
			}
		}
		break;
	case 3:
		for(var i=0; i<colors.length; i++)
		{
			outputArray += colors[i] ;
			if(i!=colors.length-1)
			{
				outputArray += ",";
			}
		}
		break;
}

console.log(outputArray);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

a.sort(
	function(x,y)
	{
		return y-x;
	}
);

console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var common,temp,count= 0,countTemp = 0;

for(var i=0; i<a.length;i++)
{
	for(var j=0; j<a.length;j++)
	{
		if(a[j] == a[i])
		{
			count++;
		}
	}
	console.log(count);
	if(count>countTemp)
	{
		temp = a[i];
		countTemp = count;
	}
	count = 0;
}

common = temp;

console.log(common + " is the most frequent");