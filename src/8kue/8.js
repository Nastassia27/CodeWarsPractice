
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
