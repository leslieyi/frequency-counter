//given two positive integers, find out if the two numbers have the same frequence of digits 
//time of O(N)
//sameFrequency(182, 128) true
//sameFrequency(34,14) false


function sameFrequency(num1, num2) {
    let string1 = num1.toString();
    let string2 = num2.toString();
    if(string1.length !== string2.length) return false;

    let counter1 = {}
    let counter2 = {} 

    for(let val of string1) {
        counter1[val] = (counter1[val] || 0) +1
    }
    // for(let i = 0; i < string1.length; i++){
    //     counter1[string1[i]]= (counter1[string1[i]] || 0) +1
    // }

    for(let val of string2) {
        counter2[val] = (counter2[val] || 0) +1
    }
    // for(let i = 0; i < string2.length; i++){
    //     counter2[string2[i]]= (counter2[string2[i]] || 0) +1
    // }

    for(let key in counter1){
        if(counter1[key] !== counter2[key]) return false
    }
    return true


}