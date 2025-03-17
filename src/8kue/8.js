
/*Oh no! Timmy hasn't followed instructions very carefully and ' +
'forgot how to use the new String Template feature, Help Timmy ' +
'with his string template so it works as he expects!*/
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}
buildString('frog')

/*
Replace all vowel(гласные) to exclamation mark (восклицательные знаки) in the sentence.
aeiouAEIOU is vowel.
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"*/

function replace(s) {
    const newS=s.split('')
    for (let i =0; i<newS.length; i++){
        if('aeiouAEIOU'.includes(newS[i])){
            newS[i]='!'
        }
    }
    return newS.join('')

}

//второй вариант
function replacee(s) {
    return s.replace(/[aeiou]/gi, '!'); // ✅ Replaces vowels with '!'
}
/*/[aeiou]/gi: Matches vowels (a, e, i, o, u)
g → Global (replaces all occurrences)
i → Case-insensitive (handles uppercase letters too)*/
replace("Hi!", "H!!")

/*

This function takes two numbers as parameters, the first number
 being the coefficient, and the second number being the exponent.
    Your function should multiply the two numbers, and then subtract
     1 from the exponent. Then, it has to return an expression (like 28x^7).
     "^1" should not be truncated when exponent = 2.

For example:

    derive(7, 8)
In this case, the function should multiply 7 and 8, and then subtract 1 from 8.
It should output "56x^7", the first number 56 being the product of the two numbers,
and the second number being the exponent minus 1.

*/
function derive(coefficient,exponent) {
    const newValue = coefficient*exponent
    const minus = exponent-1
    return newValue.toString()+'x^'+minus.toString()
}

function derive2(coefficient,exponent) {
    return `${coefficient*exponent}x^${exponent-1}`
}

derive(7,8)

/*Write a function that returns the total surface area and volume of a box.

    The given input will be three positive non-zero integers: width, height, and depth.*/

function getSize(width, height, depth){
    let volume = width*height*depth
    let surface = 2*(width * height+height * depth+depth *width)
    let arr = [surface, volume]
    return arr
}

/*Complete the function that receives as input a string, and produces outputs according to the following table:

    Input	Output
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"...*/
function getDrinkByProfession(param){

    switch (param.toLowerCase()){
        case 'jabroni':
            return "Patron Tequila"
            break;
        case "school counselor":
            return "Anything with Alcohol"
            break;
        case "programmer":
            return "Hipster Craft Beer"
            break;
        case "bike gang member":
            return "Moonshine"
            break;
        case "politician":
            return "Your tax dollars"
            break;
        case "rapper":
            return "Cristal"
            break;
        default:
            return "Beer"

    }
}

/*
You task is to implement an simple interpreter for the notorious esoteric language HQ9+ that will work for a single character input:

    If the input is 'H', return 'Hello World!'
If the input is 'Q', return the input
If the input is '9', return the full lyrics of 99 Bottles of Beer. It should be formatted like this:
*/
/*function HQ9(code) {
    let str =''
    switch (code){
        case 'H':
            return 'Hello World!'
            break;
        case 'Q':
            return code
            break;
        case '9':
            for( let i = 99; i>0;i--){
                if(i>1){
                    str = str + `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, ${i-1} bottles of beer on the wall.`
                } else{
                    str = str + `${i} bottles of beer on the wall, ${i} bottles of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
                }

            }
            return str
            break;
        default:
            return
    }
}*/
function HQ9(code) {
    switch (code){
        case 'H':
            return 'Hello World!'
            break;
        case 'Q':
            return code
            break;
        case '9':
            let str =''
            for (let i = 99; i > 0; i--) {
                str += `${i} bottle${i === 1 ? '' : 's'} of beer on the wall, ${i} bottle${i === 1 ? '' : 's'} of beer.\n`;
                str += `Take one down and pass it around, ${i - 1 > 0 ? i - 1 : 'no more'} bottle${i - 1 === 1 ? '' : 's'} of beer on the wall.\n`;
                if (i > 1) str += '\n';
            }
            str += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;

            return str

        default:
            return undefined
    }
}
//simple calculator

function calculator(a,b,sign){
    if (typeof a ==='number' && typeof b==='number'){
        switch (sign){
            case '+':
                return a+b;
            case '-':
                return a-b;
            case '*':
                return a*b;
            case '/':
                return a/b;
            default:
                return "unknown value"
        } }else {
        return "unknown value"
    }


}
/*Create a function that finds the integral of the expression passed.

    In order to find the integral all you need to do is add one to the exponent (the second argument), and divide the coefficient (the first argument) by that new number.

For example for 3x^2, the integral would be 1x^3: we added 1 to the exponent, and divided the coefficient by that new number).*/
function integrate(coefficient, exponent) {
    let result = ''
    let newExponent= exponent+1
    let newCoefficient = coefficient/newExponent
    return result = `${newCoefficient}x^${newExponent}`
}