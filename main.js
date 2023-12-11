// let result = (string,valuetoreplace,valuetoreplacewith) => {
//     let index = string.indexOf(valuetoreplace)
//     let string2 = string
//                   .substr(0, index)
//                   + valuetoreplacewith
//                   + string.substr(index + valuetoreplace.lenght)
//     return string2
// }

// console.log(result("one","two","three"))


////////////////////////////////////////////////////////////


// function result(word){
//     const sentences = word.split(' ')
//     const  result = sentences 
//                     .map(sentence => 
//                         sentence.charAt(0).toUpperCase() + sentenceslice(1))
//          return result.join(' ')
// }

////////////////////////////////////////////////////////////

const user = [
    {name: 'Lasha', age: 30}, 
    {name: 'Saba', age: 20}
]

function sort(users){
    return users.slice().sort((a, b) => a.age - b.age)
}

console.log(sort(user))
