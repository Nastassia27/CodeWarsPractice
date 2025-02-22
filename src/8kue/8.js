
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