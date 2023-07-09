let ranking1 = ['Tymon', 'Marcel', 'Bruno', 'Ignacy', 'Adam', 'Franek', 'Edmund', 'Filip', 'Artur', 'Eryk', 'Jacek', 'Oliwier', 'Bernard', 'Hugo', 'Antoni', 'Szymon', 'Kuba', 'Tomek', 'Olaf', 'Marcin', 'Łukasz', 'Makary', 'Jan', 'Maurycy', 'Joachim', 'Staś', 'Stefan', 'Michał', 'Milan', 'Liam', 'Gabriel'];

let ranking2 = ['Ignacy', 'Tomek', 'Bernard', 'Antoni', 'Łukasz', 'Kuba', 'Michał', 'Stefan', 'Szymon', 'Maurycy', 'Adam', 'Staś', 'Marcel', 'Jan', 'Edmund', 'Jacek', 'Marcin', 'Joachim', 'Franek', 'Hugo', 'Eryk', 'Oliwier', 'Bruno', 'Olaf', 'Tymon', 'Filip', 'Makary', 'Gabriel', 'Liam', 'Artur', 'Milan'];


const compareArrays = (arr1, arr2) => {

    let resultArray = [];

    for (const element of arr1) {
        let index1 = arr1.indexOf(element);
        let index2 = arr2.indexOf(element);
        
        resultArray.push({
            name : element,
            score: Math.max(index1, index2)
        })
    }

    resultArray.sort((a,b) =>  a.score - b.score);
    console.log(resultArray);
}

compareArrays(ranking1, ranking2);