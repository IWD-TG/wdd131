const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]

/*console.log(articles[0].first);*/

let container = document.querySelector("#bookList")

articles.forEach(function(item) {

    let book = document.createElement("section")
    let html= 
		`<div class="secondContainer">
                <div class="aboutContainer">
                    <h4>${item.date}</h4>
                    <p>
                    ${item.ages}<br>
                    ${item.genre}<br>
                    ${item.stars}
                    </p>
                </div>
                <div class="bookContainer">
                    <h2>${item.title}</h2>
                    <img src="${item.imgSrc}" alt="${item.imgAlt}">
                    <p>${item.description}</p>
                </div>
            </div>`;
			
    book.innerHTML = html
    container.appendChild(book)
	/*<p>${item.first}</p>
    <p>${item.last}<p>*/
})
/*<div id="bookList">
        
            <div class="secondContainer">
                <div class="aboutContainer">
                    <h4>July 5, 2022</h4>
                    <p>
                    10–14<br>
                    Fantasy<br>
                    ★★★★
                    </p>
                </div>
                <div class="bookContainer">
                    <h2>Septimus Heap Book One: Magyk</h2>
                    <img src="https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg" alt="Book cover for Septimus Heap 1">
                    <p>If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.</p>
                </div>
            </div>*/