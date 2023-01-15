class AbstractProduct{
    constructor(id, name, description, price, amount, rewiev, image, brand){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.amount = amount;
        this.rewiev = rewiev;
        this.image = image;
        this.date = new Date();
        this.brand = brand
    }
    getFullInformation(){
        return [this.id]/n[this.name]/n[this.description]/n[this.price]/n[this.amount]/n[this.rewiev]/n[this.image]/n[this.date]/n[this.brand]
    }
    getPriceForQuantity(){
        return '$' + this.price
    }
    getterSetter(characteristic){
        let choice = prompt('get or set?')
        if (choice == 'get'){
            return this.characteristic
        }
        if (choice == 'set'){
            let newchar = prompt('How you want to change it?')
            this.characteristic = newchar
        }
        else {
            return 'Error! There is no such option'
        }
    }
}

class Clothes extends AbstractProduct{
    constructor(material, color){
        this.material = material;
        this.color = color
    }

    get material(){
        return this.material
    }
    set material(material){
        this.material = material
    }

    get color(){
        return this.color
    }
    set color(color){
        this.color = color
    }
}

class Electronics extends AbstractProduct{
    constructor(warranty, power){
        this.warranty = warranty;
        this.power = power
    }
    get warranty(){
        return this.warranty
    }
    set warranty(warranty){
        this.warranty = warranty
    }

    get power(){
        return this.power
    }
    set power(power){
        this.power = power
    }
}

let guitar = new AbstractProduct('889597', 'Guitar', 'electric guitar with 2 humbuckers', 32.5, 3, 'Good for playing black metal', '36246246', 'Ibanez')

let characteristic = prompt('Enter your characteristic')
guitar.getterSetter(characteristic)
