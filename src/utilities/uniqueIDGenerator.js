let uId=100;
let instance;
class GenerateUniqueId {
    constructor(){
        if(instance){
            throw new Error('New instance cannot be created');
        }
        instance = this;
    }

    get uniqueId(){
        return ++uId
    }
}

export default Object.freeze(new GenerateUniqueId()); 