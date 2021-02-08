/** @format */

// buttons
let nextBtn = document.getElementById("next-btn");
let prevBtn = document.getElementById("prev-btn");

nextBtn.onclick = function () {
	let currentSlide = document.querySelector(".current-slide");
	let nextSlide = currentSlide.nextElementSibling;
	let prevSlide = currentSlide.previousElementSibling;

	if (nextSlide) {
		currentSlide.classList.remove("current-slide");
		currentSlide.classList.add("prev-slide");
		nextSlide.classList.remove("next-slide");
		nextSlide.classList.add("current-slide");
	}
};

prevBtn.onclick = function () {
	let currentSlide = document.querySelector(".current-slide");
	let nextSlide = currentSlide.nextElementSibling;
	let prevSlide = currentSlide.previousElementSibling;
	console.log(currentSlide, nextSlide, prevSlide);
	if (prevSlide) {
		currentSlide.classList.remove("current-slide");
		currentSlide.classList.add("next-slide");
		prevSlide.classList.remove("prev-slide");
		prevSlide.classList.add("current-slide");
	}
};

// fetch
// get data
async function getBooks(page) {
	let books = await fetch(`http://localhost:3000/books?_page=page&_limit=8`);
	return books.json();
}
