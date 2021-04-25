class View {
    #elemento;
    
    constructor(elemento) {
        if (this.constructor == View) {
            throw new Error ('No debe instanciar un objeto de la clase View');    
        }
        this.#elemento = elemento;
    }

    template(model) {
        throw new Error ('Debe implementar el método template en su vista');
    }

    update(model) {
        this.#elemento.innerHTML = this.template(model);
    }
}