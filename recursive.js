//Given a number if even, divide by 2 and if odd, multiply by 3 and add 1 until it becomes 1;

//Example input 5 
//Output "16->8->4->2->1"

//Example input 6
// Output "3->10->5->16->8->4->2->1"

function xFind(num) {
    if (num % 2 === 0) {
        num = num / 2;
    } else {
        num = (num * 3) + 1;
    }
    return num === 1 ? 1 : num + '->' + xFind(num);
}

console.log(xFind(15));