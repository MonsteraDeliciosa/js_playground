/* TODO
    * validate data:
        * digits + comma and dot only
        * remove spaces


*/

export default class Validation {

    constructor ( opts ) {
        this.input = document.getElementById('cash');
    }

    init () {
        this.validate(this.input);
    }

    valdate ( input ) {

        const pattern = new RegExp('^([1-9]){1}\d{0,}([\.,])?\d{0,2}$');
        
    }

}