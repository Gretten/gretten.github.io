const a = '2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199'
const letsFindNonSimples = (range) => {
    if(typeof range !== 'number') {
        return new Error('Тип аргумента range должен быть number');
    }
    if(range < 2) {
        return new Error('Диапазон не может быть меньше 2');
    }

    const map = new Map();
    const result = [];

    for(let i = 2; i <= range; i++) {
        for(j = i + 1; j <= range; j++) {
            if(!map.get(j) && !(j % i)) {
                map.set(j, j)
            } 
        }
        if(!map.get(i)) {
            result.push(i)
        }
    }
    return result;
}

console.log(letsFindNonSimples(2.5));


/*
    допустим, i = 2
    цикл проверяет, есть ли i в коллекции составных чисел
    если нет - добавляется в массив простых чисел
    цикл делает для i цикл от i до range
        если j делится на i без остатка, оно добавляется в коллекцию составных чисел

*/