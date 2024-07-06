function insertAt(array, index, element){
    let newArray = new Array(array.length);

    for(let i=0; i<array.length; i++){
        if(i < index ){
            newArray[i] = array[i]
        }else if(i == index){
            newArray[i] = element
        }else{
            newArray[i] = array[i-1]
        }
    }
    return newArray;
}



const array = [1, 2, 3, 4, 5];
const index = 2;
const element = 99;
const newArray = insertAt(array, index, element);
console.log(newArray);