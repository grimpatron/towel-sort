// module.exports = function towelSort(matrix) {
//     const result = [];

//     if (!matrix) return result;

//     for (let i = 0; i < matrix.length; i++) {
//         if (i % 2 == 0) {
//             for (; matrix[i].length > 0; ) {
//                 result.push(matrix[i].shift());
//             }
//         } else {
//             for (let j = 0; matrix[i].length > 0; j++)
//                 result.push(matrix[i].pop());
//         }
//     }
//     return result;
// };

module.exports = function towelSort(matrix) {
    let result = [];
    if (!matrix) return result;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 0) {
            result = result.concat(matrix[i]);
        } else if (i % 2 == 1) {
            result = result.concat(matrix[i].reverse());
        }
    }
    return result;
};
