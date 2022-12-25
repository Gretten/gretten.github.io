const findSimpleNumbersInRange = (range) => {
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
            result.push(i);
        }
    }
    return result;
}
