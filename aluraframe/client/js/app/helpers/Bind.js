class Bind {
    constructor(model,view,...props) {
        let factory = Factory.create(model,
            props,
            (model)=>view.update(model));

        view.update(model);
        
        return factory;
    }
}