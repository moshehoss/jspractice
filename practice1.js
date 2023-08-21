//function to count the number of digits in a number
// let sum = 0;
// function sumOfDigits(number)
// {

//     number = Math.abs(number);
//     if(number < 10 && number >= 0)
//     {
//         return sum + 1;   
//     }
//     else return sumOfDigits((number / 10), sum+=1);
// }
// console.log(sumOfDigits(12345));
//triangular number sequence function
// function triangle(number)
// {
//     sequence = 1;
//     sequenceHop = 2;
//     for(let i = 1; i < number; i++)
//     {
//         sequence += sequenceHop;
//         sequenceHop++;
//     }
//     return sequence;
// }
// console.log(triangle(1));
//function to convert freedom time to metric time
// function convertTime(time)
// {
//     let timeframe = time.slice(-2);
//     let hour = parseInt(time.slice(0,2));
//     if(timeframe === "AM")
//     {
//         if(hour === 12)
//         {
//             hour = '00'
//         }
//     }
//     else if (timeframe === "PM")
//     {
//         if(hour !== 12)
//         {
//             hour += 12;
//             hour = hour.toString()
//         }
//     }
//     time = hour + time.slice(2,-2);
//     console.log(time);
// }
// convertTime('07:05:45PM') 
// convertTime('12:40:22AM') 
// convertTime('12:45:54PM') 
//function that gives an array with n-1 amount of free spots that are liked
// function availableSpots(arr, number)
// {
//     let goodSpots = 0;
//     if(!(number % 2))//even
//     {
//         for(let i=0; i<arr.length-1;i++)
//         {
//             if(!(arr[i]%2 != 0 && arr[i+1]%2 != 0))
//             {
//                 goodSpots++;
//             }
//         }
//     }
//     else//odd
//     {
//         for(let i=0; i<arr.length-1;i++)
//         {
//             if(!((arr[i]%2)==0 && (arr[i+1]%2)==0))
//             {
//                 goodSpots++;
//             }
//         }        
//     }
//     return goodSpots;
// }
// console.log(availableSpots([0, 4, 6, 8], 9)); //0
// console.log(availableSpots([0, 4, 6, 8], 12)); //3
// console.log(availableSpots([4, 4, 4, 4, 5], 7)); //1

//function to count minimum amount of numbers needed to make a string a palindrome
// function minPalindromeSteps(str) {
// 	let rev = [...str].reverse().join("");
// 	let i = str.length;
// 	while (!str.endsWith(rev.slice(0, i))) i--;
// 	return str.length - i;
// }
// console.log(minPalindromeSteps("smal"));

//function to check if when grouped if the numbers will be in ascending order
// function ascending(str) {
// 	let result = [];
// 	for(let i = 1; i<str.length;i++)
// 	{
// 		if(!(str.length%i))
// 		{
// 			for (let index = 0; index < str.length; index += i)
// 			{
// 				result.push(Number(str.slice(index, index + i)));
// 			}
// 			for(let index = 0; index<result.length-1;index++)
// 			{
// 				let val = result[index]+1;
// 				if(val != result[index+1])
// 				{
// 					result.length = 0;
// 				}
// 			}
// 			if(result.length>0) return true;
// 		}
// 	}
// 	return false;
// }
// console.log(ascending("1234567"));

//function to check how many iterations it takes to reach a single digit number
function additivePersistence(n)
{
	let iter = 0;
	return recursive(n, iter);
}
function recursive(n, iters)
{
	if(n < 10) return iters;
	return recursive(Array.from(String(n), Number).reduce((accumulator, curr) => accumulator+=curr), iters+=1);
}
