
/*  
*   @desc Sum
*   @return {Number}
*/

function sum(a, b, ...rest) {
    return rest.reduce((gen, val) => {
        return gen + val
    }, a + b ) 
}


exports.sum = sum;
/*  
todo same export:
*   module.exports = { sum }
*/


/*
todo: another export:
* export sum = function(a, b, ...rest) {...}
 */