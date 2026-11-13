let _age = [];
let _prompt;
let _count;

function arr(_prompt,_count,_age) {
    _prompt = parseInt(prompt("Enter number of tourists"));
    for (let i = 1; i <= _prompt; i++){
        _count = parseInt(prompt("Enter age of tourist"));
        _age.push(_count);
    }
    return _age;
}

arr(_prompt,_count,_age);

let elders = _age.filter(function(val){
    if (val >= 60){
        return true;
    }
})

let adults = _age.filter(function(val){
    if (val >= 18  && val <= 59){
        return true;
    }
})

let children = _age.filter(function(val){
    if (val >= 10 && val <= 17){
        return true;
    }
})

console.log(children)
console.log(adults)
console.log(elders)