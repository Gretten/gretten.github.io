const findSimpleNumbersInRange = (range) => {
    try {
        if(typeof range !== 'number') {
            throw new Error('Тип аргумента range должен быть number');
        }
        if(range < 2) {
            throw new Error('Диапазон не может быть меньше 2');
        }

        const complexNumbers = new Map();
        const simpleNumbers = [];

        for(let i = 2; i <= range; i++) {
            for(j = i + 1; j <= range; j++) {
                if(!complexNumbers.get(j) && !(j % i)) {
                    complexNumbers.set(j, j);
                } 
            }
            if(!complexNumbers.get(i)) {
                simpleNumbers.push(i);
            }
        }
        return simpleNumbers;
    } catch(err) {
        console.log(err.message);
        return null;
    }
        
}
