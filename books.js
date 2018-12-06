var BookGenre;
(function (BookGenre) {
    BookGenre[BookGenre["historicalFiction"] = 0] = "historicalFiction";
    BookGenre[BookGenre["modernLiterature"] = 1] = "modernLiterature";
    BookGenre[BookGenre["novel"] = 2] = "novel";
    BookGenre[BookGenre["epicPoetry"] = 3] = "epicPoetry";
    BookGenre[BookGenre["play"] = 4] = "play";
})(BookGenre || (BookGenre = {}));
var BookLanguage;
(function (BookLanguage) {
    BookLanguage[BookLanguage["English"] = 0] = "English";
    BookLanguage[BookLanguage["French"] = 1] = "French";
    BookLanguage[BookLanguage["AncientGreek"] = 2] = "AncientGreek";
    BookLanguage[BookLanguage["Spanish"] = 3] = "Spanish";
    BookLanguage[BookLanguage["Russian"] = 4] = "Russian";
})(BookLanguage || (BookLanguage = {}));
;
let gastby = {
    title: "The Great Gastby",
    author: "F. Scott Fitzgerald",
    yearOfPublication: 1925,
    originalLanguage: BookLanguage.English,
    readBefore: true,
    originalTitle: "The Great Gatsby",
    genre: BookGenre.historicalFiction
};
let lostTime = {
    title: 'In Search of Lost Time',
    author: 'Marcel Proust',
    yearOfPublication: 1908,
    originalLanguage: BookLanguage.French,
    genre: BookGenre.modernLiterature,
    pageNum: 4215,
    originalTitle: 'À la recherche du temps perdu',
    readBefore: false
};
let donQuixote = {
    title: 'Don Quixote',
    author: 'Miguel de Cervantes',
    yearOfPublication: 1615,
    originalTitle: 'El Ingenioso Hidalgo Don Quijote de la Mancha',
    genre: BookGenre.novel,
    originalLanguage: BookLanguage.Spanish,
    readBefore: false
};
let ulysses = {
    title: 'Ulysses',
    author: 'James Joyce',
    yearOfPublication: 1922,
    pageNum: 730,
    readBefore: false,
    originalLanguage: BookLanguage.English
};
let hamlet = {
    title: 'Hamlet',
    author: 'William Shakespeare',
    genre: BookGenre.play,
    readBefore: true,
    yearOfPublication: 1603,
    originalLanguage: BookLanguage.English
};
let warPeace = {
    title: 'War and Peace',
    author: 'Leo Tolstoy',
    yearOfPublication: 1867,
    pageNum: 1225,
    originalTitle: 'Война и миръ',
    readBefore: false,
    originalLanguage: BookLanguage.Russian
};
let odyssey = {
    title: 'Odyssey',
    author: 'Homer',
    genre: BookGenre.epicPoetry,
    originalLanguage: BookLanguage.AncientGreek,
    readBefore: false,
};
let nineteen = {
    title: '1984',
    author: 'George Orwell',
    yearOfPublication: 1949,
    pageNum: 328,
    originalLanguage: BookLanguage.English,
    readBefore: false
};
class Library {
    constructor() {
        this.bookshelf = [];
    }
    addBook(book) {
        let found = false;
        for (let s = 0; s < this.bookshelf.length; s++) {
            if (this.bookshelf[s] == book) {
                found = true;
            }
        }
        if (found == false) {
            this.bookshelf.push(book);
        }
        else {
            console.log(found);
        }
    }
    removeBook(title) {
        let result;
        for (let s = 0; s < this.bookshelf.length; s++) {
            if (this.bookshelf[s].title == title) {
                result = this.bookshelf[s];
                this.bookshelf.splice(s, 1);
                return result;
            }
        }
    }
    editBook(title) {
    }
    search(title) {
        let found = false;
        for (let s = 0; s < this.bookshelf.length; s++) {
            if (this.bookshelf[s].title === title) {
                found = true;
                return found;
            }
        }
        return found;
    }
    find() {
        match = [];
        let val = String($(".search").val()).toLowerCase();
        for (let index = 0; index < this.bookshelf.length; index++) {
            if (this.bookshelf[index].title.toLowerCase().includes(val) || this.bookshelf[index].author.toLowerCase().includes(val)) {
                match.push(index);
            }
        }
        if (match.length > 1) {
            return true;
        }
        else {
            return false;
        }
    }
    organize(title, yearOfPublication) {
    }
}
var berkleysLibrary = new Library();
var match = [];
function init() {
    berkleysLibrary.addBook(gastby);
    berkleysLibrary.addBook(lostTime);
    berkleysLibrary.addBook(donQuixote);
    berkleysLibrary.addBook(ulysses);
    berkleysLibrary.addBook(hamlet);
    berkleysLibrary.addBook(warPeace);
    berkleysLibrary.addBook(odyssey);
    berkleysLibrary.addBook(nineteen);
    for (let b = 0; b < berkleysLibrary.bookshelf.length; b++) {
        let ot = (berkleysLibrary.bookshelf[b].originalTitle ? berkleysLibrary.bookshelf[b].originalTitle : "NA");
        let g = (berkleysLibrary.bookshelf[b].genre ? berkleysLibrary.bookshelf[b].genre : "NA");
        let pn = (berkleysLibrary.bookshelf[b].pageNum ? berkleysLibrary.bookshelf[b].pageNum : "NA");
        let yop = (berkleysLibrary.bookshelf[b].yearOfPublication ? berkleysLibrary.bookshelf[b].yearOfPublication : "NA");
        $(".window").append(`<div class="card" id="${b}">
        <p class="title">${berkleysLibrary.bookshelf[b].title}</p>
        <p class="author">${berkleysLibrary.bookshelf[b].author}</p>
        <p class="pagenum">${pn}</p>
        <p class="yop">${yop}</p>
        <p class="genre">${g}</p>
        <p class="ot">${ot}</p>
        </div>`);
    }
}
function findthisbook() {
    berkleysLibrary.find();
    console.log();
    $(".window").html('');
    for (let b = 0; b < match.length; b++) {
        let ot = (berkleysLibrary.bookshelf[match[b]].originalTitle ? berkleysLibrary.bookshelf[match[b]].originalTitle : "NA");
        let g = (berkleysLibrary.bookshelf[match[b]].genre ? berkleysLibrary.bookshelf[match[b]].genre : "NA");
        let pn = (berkleysLibrary.bookshelf[match[b]].pageNum ? berkleysLibrary.bookshelf[match[b]].pageNum : "NA");
        let yop = (berkleysLibrary.bookshelf[match[b]].yearOfPublication ? berkleysLibrary.bookshelf[match[b]].yearOfPublication : "NA");
        $(".window").append(`<div class="card" id="${match[b]}">
        <p class="title">${berkleysLibrary.bookshelf[match[b]].title}</p>
        <p class="author">${berkleysLibrary.bookshelf[match[b]].author}</p>
        <p class="pagenum">${pn}</p>
        <p class="yop">${yop}</p>
        <p class="genre">${g}</p>
        <p class="ot">${ot}</p>
        </div>`);
    }
}
(function () { init(); })();
//console.log(berkleysLibrary.search(gastby.title))
//console.log(berkleysLibrary.removeBook(gastby.title).title)
//console.log(berkleysLibrary);
