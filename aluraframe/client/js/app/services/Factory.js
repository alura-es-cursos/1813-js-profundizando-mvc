class Factory {
    static create(object,props,action) {
        return new Proxy(object,{
            get: function(target, prop, receiver) { 
                if(props.includes(prop) && Factory.esFuncion(target[prop])) {
                    return function() {
                        console.log(`Interceptando dentro de función ${prop}`);
                        Reflect.apply(target[prop],target,arguments);
                        //self.#ventasView.update(target);
                        action(target)
                    }
                    
                }
                return Reflect.get(target, prop, receiver);
            },
            set: function(target, prop, value, receiver) { 
                if(props.includes(prop)) {
                    target[prop] = value;
                    action(target)
                }
                return Reflect.set(target, prop, value, receiver);
            },
            
        });
    }

    static esFuncion(func) {
        return typeof(func) == typeof(Function);
    }
}