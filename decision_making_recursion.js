//decision making
function leap_year(year){
    if (year%4==0 && year%100!=0 && year%400==0){
        return `the year ${year} is a leap year`
    }else{
        return `theyear ${year} is not a leap year`
    }
}



function calculateTicketPrice() {
    const age = document.getElementById('age').value;
    let price;

    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    } else {
        price = "Invalid age";
    }

}

//Recursion

function fibonacci(n){
    return (n<=1)?    1:fibonacci(n-1)+fibonacci(n-2)
}


function palindrome(string){
    if (string.length<=1){
        return true
    }
    if (string[0]===string[string.length-1]){
        return palindrome(string.slice(1,-1))
    }
    return false

  
}


console.log(palindrome('popping'))