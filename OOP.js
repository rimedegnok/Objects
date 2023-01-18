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
    getterSetter(characteristic, choice){
        if (choice == 'get'){
            return this.characteristic
        }
        if (choice == 'set'){
            this.characteristic = characteristic
        }
        else {
            return 'Error! There is no such option'
        }
    }
    
    ///Возвращает объект "отзыв" по заданному ключу
    getReviewByID(rev){
        for (let [key] in this.rewievs){
            if ([key] == rev){
                return this.rewievs
            }
            else {
                continue
            }
        }
    }
    
    ///Возвращает картинку по переданному параметру, если параметр не был передан то первую картинку из массива
    getImage(im){
        return (this.images[im])
    }
    
    
    ///Добавляет новое значение в массив «sizes»
    addSize(add_s){
        this.sizes.push(add_s) 
    }
    
    ///Удаляет значение из массива «sizes» по заданному ключу
    deleteSize(del_s){
        delete this.sizes[del_s]
    }
    
    ///Добавляет объект "отзыв" в массив «reviews» 
    addReview(id_r, author, comm, serv, price_r, value, quality){
        this.rewievs = new Array(this.ID_r = id_r,
        this.author = author,
        this.date_r = Date.now(),
        this.comment = comm,
        this.rating = new Array(this.service = serv, this.price_r = price_r, this.value = value, this.quality = quality)
        )
        return this.rewievs              
    }
    
    ///Удаляет объект "отзыв" из массива «reviews» по заданному ключу (ID)
    deleteReview(del_rev){
        for (let key in this.rewievs){
            if ([key] == del_rev){
                delete this.rewievs
            }
            else {
                continue
            }
        }
    }
    
    ///Возвращает средний рейтинг продукта
    getAverageRating(){
        return (this.service + this.price_r + this.value + this.quality) / 4
    }
    
    searchProducts(products_n, search){
        let s_p = []
        for (let i = 0; i < products.length; i++){
            if (products_n[i] == search){
                s_p.push(products[i])
            }
        }
        console.log(s_p)
    }
    
    sortRule(a, b){
        if (a > b) return 1
        if (a == b) return 0
        if (a < b) return -1  
    } 

    sortProducts(products_p, sortRule){
        products_p.sort(sortRule)
        return products_p
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
