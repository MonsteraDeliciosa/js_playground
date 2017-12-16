(function ( global, $ ) {
    'use strict';

    var Greetr = function( firstname, lastname, lang ) {
        return new Greetr.init( firstname, lastname, lang );
    }

    var supportedLanguages =  ['en', 'es'];

    var greetings = {
        en: 'Hi',
        es: 'Hola'
    };

    var formalGreetings = {
        en: 'Good morning',
        es: 'Saludos'
    };

    var logMsg = {
        en: 'Logged in',
        es: 'Inicio sesion'
    }

    Greetr.prototype = {

        fullName: function () {
            return this.firstname + ' ' + this.lastname;
        },

        validate: function () {
            if (supportedLanguages.indexOf(this.lang) < 0) {
                throw 'please enter valid language';
            } else {
                return true;
            }
        },

        greeting: function () {
            return greetings[this.lang] + ' ' +  this.firstname + '!';
        },

        formalGreeting: function () {
            return formalGreetings[this.lang] + ', ' + this.fullName();
        },

        greet: function( formal ) {
            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if (console) {
                console.log(msg);
            }

            return this;
        },

        log: function () {
            if (console) {
                console.log(logMsg[this.lang] + ': ' + this.fullName());
            }

            return this;
        },

        setLang: function( lang ) {

            this.lang = lang;
            this.validate();

            return this;
        },

        getGreeting: function ( formal ) {

            var msg;

            if (formal) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            return msg;

        },

        printGreeting: function ( selector, formal ) {

            if (!$) {
                throw 'jQuery not loaded';
            }

            if (!selector) {
                throw 'missing selector';
            }

            $(selector).html(this.getGreeting(formal));

            return this;
        }

    };


    Greetr.init = function(firstname, lastname, lang) {

        var _this = this;

        _this.firstname = firstname ? firstname : 'John';
        _this.lastname = lastname ? lastname : 'Doe';
        _this.lang = lang ? lang : 'en';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

})( window, jQuery );
