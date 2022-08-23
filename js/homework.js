/*
    Exercise 1: Write a function called toCelcius that takes in a number representing 
    temperature in Fahrenheit and converts the number into Celcius.

    Ex 1. toCelcius(32) // 0
    Ex 2. toCelcius(212) // 100
    Ex 3. toCelcius(50) // 10
*/
console.log("=============== Question 1 ===================");
let conveterFtoC = degree=> (degree-32) * 5/9;

console.log(conveterFtoC(50)+"°");
console.log(conveterFtoC(77)+"°");

//-----------------------------------------------------------------------------------

/*
    Exercise 2: Create a class for a User that sets username and password property
    on creation. Add a method to change the user's password. The method should take in 
    the old password and new password. If the old password is wrong do not reset the password.
    Create an instance of the new user and then change their password using the method.
*/
console.log("=============== Question 2 ===================");
class User{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }

    updatePassword(currentPassword, newPassword){
        if(currentPassword === this.password){
            this.password = newPassword;
            console.log(`${this.username} 's password updated successfully`);
        }
        else
        console.log("current password is wrong !!");
    }
}

let tima = new User("Timur","12345");
console.log("user name = "+tima.username);
console.log("password = "+ tima.password);
tima.updatePassword("12345","98765");
console.log("new password = "+ tima.password);
tima.updatePassword("1234","4321");

//--------------------------------------------------------------------------------------
/*
    Exercise 3: Write a function that takes in an array of integers and returns
    an array of the negative integers squared using Array methods

    Ex 1. squareNegatives([-10, -3, 4, -2, 8, 9, -3]) // [100, 9, 4, 9]
    Ex 2. squareNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]) // [25, 16, 9, 4, 1]
    Ex 3. squareNegatives([2, 4, 6, 8, 10]) // []
*/

console.log("=============== Question 3 ===================");

function getNegatives(list){
    let negative=list.filter(num => num < 0);
    console.log(negative);
    return negative.map(num => num*num);
}

console.log(getNegatives([-10, -3, 4, -2, 8, 9, -3]));
console.log(getNegatives([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5]));
console.log(getNegatives([2, 4, 6, 8, 10]));