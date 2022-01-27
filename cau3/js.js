let vowelList = ['a', 'e', 'u', 'o', 'i', 'A', 'E', 'U', 'O', 'I'];
let vcount = 0;

function vowelCount(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelList.length; j++) {
            if (str[i] === vowelList[j]) {
                vcount += 1;
            }
        }

    }
    return vcount>0;
}
