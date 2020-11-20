//Method 0:Use Built in Functions - Not robust enough!

// Pass func a string
function reverseA(str){

    //str.split(""): Built-in func that will push str into an array
    //.reverse(): Built-in func that will reverse array
    //.join(""): Join array values back together into a string
    return str.split("").reverse().join("");
}

//Method 1: Use a for loop
/*
 Declare a for loop that loops over the incoming string variable in reverse
 reading out each character from the end to the beginning and insert
 characters into the reversed variable and prints it.
 */

//: Pass func a string
function reverseB(str) {
    //: Create a variable called reversed and set to an empty string
    let reversed = "";
    //for(let i = str.length-1: Creates loop for variable i(for our index)
    //= str.length-1: i = The length of string being passed in -1 as arrays start at 0 not 1
    //i >= 0; i--: While I is >= to 0 keep looping and every time we loop subtract 1
    for(let i = str.length-1; i >= 0; i--){
        //: Add str character that is at index i to reversed variable
        reversed += str[i];
    }
    //: Print out reversed string
    return reversed;
}


//Method 2: Use a substring to reverse
//TODO: Add solution description

// Pass func a string
function reverseC(str){
    //: Create a variable called reversed and set to an empty string
    let reversed = "";
    for(let i = str.length; i>=0; i--){
        reversed += str.substring(i,i-1);
    }
    //: Print out reversed string
    return reversed;
}

//Extra: Call and use created function to store the input string from user.

// Create a new func that we'll use to implement reverseA/B/C to test to see if it works
function reverseMe(){
    //: Create a variable called reversed and set to an empty string
    let reversed = "";
    //let str = document: Create variable called str that looks at the document i.e. text from user input in text box
    //.getElementById('value').value: Get document by element ID, with the ID named value (string input name from html file) and retrieve value from the text box
    let str = document.getElementById('value').value;
    //: reversed variable = Call previously created reverseB/C func and pass in str variable
    reversed = reverseB(str)
    //document.getElementById('result').innerHTML: Retrieve result variable from html using elementId
    //= reversed: Set retrieved result variable equal to reversed variable reversed variable
    document.getElementById('result').innerHTML = reversed;
}