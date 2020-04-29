class rectangle{
    private _height:number;
    private _width:number;

    constructor(height:number,width:number) {
        this._height=height;
        this._width=width;
    }


    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    area(){
        return this._width*this._height;
    }
}

let firstRec=new rectangle(2,3);
console.log(firstRec.area());