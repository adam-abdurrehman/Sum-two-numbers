
{
 let sum = (a,b) =>{
   return a + b;
 }
 let n1 = prompt("Enter the first number:");
 n1 = parseInt(n1);
 console.log(typeof n1,n1);
 let n2 = prompt("Enter the second number:");
 n2 = parseInt(n2);
 console.log(typeof n2,n2);
 document.getElementById("Addition").innerHTML = `The sum of ${n1} and ${n2} is ${sum(n1,n2)}`
 console.log(`${sum(n1,n2)}`);
}