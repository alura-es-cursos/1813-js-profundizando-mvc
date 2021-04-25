// aluraframe/client/js/app/polyfill/es6.js

if(!Array.prototype.includes) {

    // Si no existe se agrega

    console.log('Polyfill para Array.includes implementado.');

    Array.prototype.includes = function(elemento) {
        return this.indexOf(elemento) != -1;
    };
}