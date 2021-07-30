// Функция должна сравнивать колличество символов в элементе массива ruText с элементом массива enStringIndex + enCommentIndex из enTextWithComments? Если да, то код работает не верно!
// При одинаковом числе символов был ruStringIndex !=== enStringIndex + enCommentIndex. 

// Оптимизация и корректировка функции.
function compare(ruText, enTextWithComments) {
    let equalPairs = [];
    let nonLetters = [' ', ',', '.', ':', '-', ';', '\'']
    for (let i = 0; i < ruText.length; i++) {
        let ruStringIndex = 0;
        let ruLetterIndex = 0.5;
        for (let j = 0; j < ruText[i].length; j++) {
            if (!nonLetters.includes(ruText[i][j])) {
                ruStringIndex += ruLetterIndex;
                ruLetterIndex += 1;
            }
        }
        for (let k = 0; k < enTextWithComments.length; k++) {
            let enStringIndex = 0;
            let enLetterIndex = 0.5;
            let enText = enTextWithComments[k].split('|')[0];
            let comment = enTextWithComments[k].split('|')[1];

            for(let n = 0; n < enText.length || n < comment.length; n++){
                if(enText.length && !nonLetters.includes(enText[n])) {
                    enStringIndex += enLetterIndex;
                    enLetterIndex++;
                }
                if(comment.length && !nonLetters.includes(comment[n])){
                    enStringIndex += enLetterIndex;
                    enLetterIndex++;
                }
            }
            if (comment.length) {
                if (ruStringIndex === enStringIndex) {
                    equalPairs.push({
                        ruText: ruText[i],
                        enText: enTextWithComments[k]
                    });
                }
            }
        }
    }
    return equalPairs;
}
