let condition = true;

if (condition){
    console.log("code executed")
};

let age = 15;

if (age >=18)
    {
        console.log("drinking is allowed")
    }
    else {console.log("drinking is NOT allowed")};

    let time =19;

    if (time <10)
    {
        console.log("good morning!")
    }
    else if (time <18)
    {
        console.log("good day!") 
    }
    else {console.log("good evening!")};

let condition2 = true;

console.log(condition ? "statement1" : "statement2");

if (condition2 = false)
{
    console.log("statement1")
}
else console.log("statement2");

let number = -5;
let abs = number >= 0 ? number : -number;
console.log(abs);

let browser = "IE";
switch(browser)
{
    case "Chrome":
    console.log("Opening Chrome");
    break;
    case "IE":
    console.log("Opening IE");
    break; 
    case "Opera":
    console.log("Opening Opera");
    break;
    default:
        console.log("Browser is not supported");
        break;
}

//loops
let i = 0;
for (; ;i ++ )
{
    console.log(i);
    if (i == 10) {
        break;
    }
}



let object ={
    a: 1,
    b: String,
    c: 12.2
}
//for (property in object){
//    console.log(property);
//}
for (property in object){
    console.log(property + ":" + object[property]);
}

let array = [5, 3, 2, 15, 22, 65]
for(idx in array){
    console.log(idx + ":" + array[idx]);
}

let browsers = ["Chrome", "IE", "Opera", "Safari"];
for (let browser of browsers) {
    console.log(browser);
}

i = 0;
while (i < 10) {
    console.log(i);
    i++;

    if (i === 2){
        break;

    }
    
}

i = 0;
    do {
    console.log("code executed")
} while (i > 1);

//вывести все числа от 0 до 10, которые при делении на 2 дают остаток 0
 for( let i=1; i<10; i++) {
    if (i % 2 ===0){
        console.log(i);
    }

}

let arr = [5, 61, 1, 55, 60, 120, 3, 1, 14]

for (let i = 0; i < arr.length; ++i)
    {
        for(let j = 0; j < arr.length - i - 1; ++j)
        {if 
            (arr[j+1] < arr [j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
            console.log(" i = " + i + " j = " + j + " " + arr);
        }
    }
console.log(arr);

