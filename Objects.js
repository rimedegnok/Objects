function Product(id, name, des, price,
    brand, sizes, a_s, quan, images, id_r,
    author, comm, serv, price_r, value, quality){   
    this.ID = id,
    this.name = name,
    this.description = des,
    this.price = price,
    this.brand = brand,
    this.sizes = sizes,
    this.active_size = a_s,
    this.quantity = quan,
    this.images = images,
    this.date = new Date();
    this.rewievs = new Array(this.ID_r = id_r,
        this.author = author,
        this.date_r = new Date(),
        this.comment = comm,
        this.rating = new Array(this.service = serv, this.price_r = price_r, this.value = value, this.quality = quality)
    )                                   
} 

let guitar = new Product('293755', 'guitar', 'Custom shop with 3 humbuckers', 400,
 'Ibanez', ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 'L', 32, ['Im1', 'Im2', 'Im3'], '223142',
 'Roman', 'Zvuchki kitai!', 3, 5, 4, 5)

 let bass = new Product('493765', 'bass', '5 string bass', 500,
 'Fender', ['XS', 'S', 'M', 'L', 'XL', 'XXL'], 'M', 30, ['Im1', 'Im2', 'Im3'], '843142',
 'Alex', 'Top temka', 5, 5, 4, 5)

let new_review = new addReview('323145', 'Vasya', 'Kraska zhodut, A tak norm', 5, 5, 4, 4)

/* function getMyProperty(){
    let x = prompt("Enter key you want to see")
    return guitar[x]
}

function setMyProperty(){
    let x = prompt("Enter key you want to change")
    guitar[x] = prompt(`Enter new property for${x}`)
    return guitar[x]
}

///Возвращает объект "отзыв" по заданному ключу
function getReviewByID(){
    let x = prompt("Enter your key")
    for (let [key] in this.rewievs){
        if ([key] == x){
            return this.rewievs
        }
        else {
            continue
        }
    }
}

///Возвращает картинку по переданному параметру, если параметр не был передан то первую картинку из массива
function getImage(){
    let x = prompt("What image you want to see?")
    return (this.images[x])
}


///Добавляет новое значение в массив «sizes»
function addSize(){
    let x = prompt("What size you want to add?")
    this.sizes.push(x) 
    return this.sizes
}

///Удаляет значение из массива «sizes» по заданному ключу
function deleteSize(){
    let x = prompt("What size you want to delete?")
    delete this.sizes[x]
    return this.sizes
}

///Добавляет объект "отзыв" в массив «reviews» 
function addReview(id_r, author, comm, serv, price_r, value, quality){
    this.rewievs = new Array(this.ID_r = id_r,
    this.author = author,
    this.date_r = new Date(),
    this.comment = comm,
    this.rating = new Array(this.service = serv, this.price_r = price_r, this.value = value, this.quality = quality)
    )
    return this.rewievs              
}

///Удаляет объект "отзыв" из массива «reviews» по заданному ключу (ID)
function deleteReview(){
    let x = prompt("Enter ID you want to delete")
    for (let key in this.rewievs){
        if ([key] == x){
            delete this.rewievs
        }
        else {
            continue
        }
    }
    return guitar
}

///Возвращает средний рейтинг продукта
function getAverageRating(){
    return (this.service + this.price_r + this.value + this.quality) / 4
}
*/

let products = [guitar, bass]
let products_n = [guitar.name, bass.name]
///let search = prompt("Enter product you wanna find")
let s_p = []

function searchProducts(products_n, search){
    for (let i = 0; i < products.length; i++){
        if (products_n[i] == search){
            s_p.push(products[i])
        }
    }
    console.log(s_p)
}

function sortRule(a, b){
    if (a > b) return 1
    if (a == b) return 0
    if (a < b) return -1  
} 

let products_p = [guitar.price, bass.price]

function sortProducts(products_p, sortRule){
    products_p.sort(sortRule)
    return products_p
}
