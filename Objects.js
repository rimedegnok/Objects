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

function getMyProperty(x_get){
    this[x_get]
}

function setMyProperty(x_set){
    this[x_set] = x_set
}

///Возвращает объект "отзыв" по заданному ключу
function getReviewByID(rev){
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
function getImage(im){
    return (this.images[im])
}


///Добавляет новое значение в массив «sizes»
function addSize(add_s){
    this.sizes.push(add_s) 
}

///Удаляет значение из массива «sizes» по заданному ключу
function deleteSize(del_s){
    delete this.sizes[del_s]
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
function deleteReview(del_rev){
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
function getAverageRating(){
    return (this.service + this.price_r + this.value + this.quality) / 4
}

function searchProducts(products_n, search){
    let s_p = []
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

function sortProducts(products_p, sortRule){
    products_p.sort(sortRule)
    return products_p
}
