import isInteger from "lodash"

export default function add(num1, num2) {
    if (_.isInteger(num1) && _.isInteger(num2)) {
        return num1 + num2 ;
    } else {
        return NaN;
    }
};