function modifyArray(array,callback){
    const newArry=[];
    for (let i = 0; i < array.length; i++){
        newArry.push(callback(array[i]));
    }
    return newArry;
}

function doSomething(num){
    return num*2;
}

console.log(modifyArray([1,2,3],doSomething));