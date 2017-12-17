import { GR, PLN, THOUSANDS, MILLIONS } from '../common/dictionary'
import { INTEGERS, SEVERALS, TENS, HUNDREDS } from '../common/ordinals'
import Validation from './validation'

/* TODO
    0. get value from user (input, button)
        * validate data (digits + comma or dot only)
        * format user provided data: remove spaces
    1. separate PLN from GR into separate arrays
    2. GR limit to 2 digits after comma
    3. PLN to array
    4. reverse PLNarr
    5. combine into arrays of three
    6. reverse all arrs
    7. do the magic
    8. print output in container

*/

export default class MoneyFormat {

    constructor () {
        this.input = document.getElementById('cash');
        this.submit = document.getElementById('submit');
    }

    init () {

        this.submit.addEventListener('click', (event) => {
            event.preventDefault();

            let val = this.input.value;

            if (val.indexOf(',') < 0 || val.indexOf('.') < 0) {
                this.plnArrayHandle(val);
                // add 'zero groszy' to final string
                return;
            }

            this.formatCommas(val);
        });
    }

    formatCommas ( str ) {
        const fStr = str.replace('.', ',');

        this.separateDecimals (fStr);
    }

    separateDecimals ( str ) {
        const separated = str.split(',');

        this.limitDecimals(separated[1]);
        this.plnArrayHandle(separated[0]);

    }

    limitDecimals ( str ) {

        if (!str.length) {
            const limited = '00'
        } else if (str.length === 1) {
            const limited =+ '0'
        } else {
            const limited = str.slice(0, 2);
        }

        //call toStr function for limited

    }

    plnArrayHandle ( str ) {

        const reversed = str.split('').reverse();
        const grouped = createArr(reversed);
        const unreversed = grouped.reverse();

        function createArr(arr) {
            var separated = [];
            var i = 0;

            while (i < arr.length) {

                var firstArg = arr[i];
                var secArg = arr[i + 1] || '';
                var thirdArg = arr[i + 2] || '';
                var tempArr = [firstArg, secArg, thirdArg];

                separated.push(tempArr);
                i = i + 3;
            }

            return separated;
        }

        unreversed.forEach(element => {
            element.reverse();
        });

        //call toStr function for pln arrays

    }

    numToStr ( arr ) {

    }

}