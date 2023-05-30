class CreateImageNode {
    constructor(src,className,altText){
        this._img = document.createElement('img');
        this._img.classList.add(className);
        this._img.src = src;
        this._img.setAttribute('alt',altText);
    }

    get imageNode(){
        return this._img;
    }
}

export {
    CreateImageNode
}