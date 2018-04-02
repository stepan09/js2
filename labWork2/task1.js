class Book {

    constructor(){
        this._name = name;
        this._yearOfEdition = yearOfEdition;
        this._price = price;
        this._countOfPages = countOfPages;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get yearOfEdition() {
        return this._yearOfEdition;
    }

    set yearOfEdition(value) {
        this._yearOfEdition = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get countOfPages() {
        return this._countOfPages;
    }

    set countOfPages(value) {
        this._countOfPages = value;
    }

    priceS() {
        let price = this._price;
        let array = this._name.split(" ");
        console.log(array[0]);
        if (array[0] === "Програмування"){
            console.log("Ja");
            price *= 2;
        }
        return price;
    }

    countDays(){
        let date = new Date('2018, 3, 26');
        let dateNow = Date.now();
        let dayCount = this.yearOfEdition - dateNow;

        // 1000 * 60 * 60 * 24 = 86400000
        return dayCount /= 86400000;
    }

    info() {
        alert( "Name : " + this.name +
            "  Price : " + this.priceS() +
            "  Year of edition : " + this.yearOfEdition +
            "  count of pages : " + this.countOfPages +
            " count days : " + this.countDays());
    }
}

class Library extends Book {

    constructor(){
        super();
        this.saleInProcent = saleInProcent;
    }

    price(){
        let price = this.price;
        let array = this.name.split(" ");
        if (array[0]==="Програмування"){
            price *= 2;
        }
        sale = saleInProcent / 100;
        return price -= (price * sale);
    }
}

function submit() {
    let book1 = new Book();
    book1.name = document.getElementById("name").value;
    book1.price = document.getElementById("price").value;
    book1.yearOfEdition = document.getElementById("yearOfEdition").value;
    book1.countOfPages = document.getElementById("countOfPages").value;
    book1.info();
}

