const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
//first make fruit array
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry',
	'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut',
	'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit',
	'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin',
	'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit',
	'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat',
	'Longan', 'Lychee', 'Mango'];

//click fruit and add to innertext
function fruitSuggestions(e) {
	suggestions.addEventListener('click', (e) => {
		if (e.target.tagName === 'LI') {
			const selectedFruit = e.target.innerText;

			input.value = selectedFruit;
		}
		suggestions.innerHTML = '';
	})
}
//clear the search box
function clearSuggestions() {
	suggestions.innerHTML = '';
}


//create li
function showSuggestions(res) {
	const createUl = document.createElement('ul');
	res.forEach(function (fruitName) {
		const suggestionLi = document.createElement('li');
		suggestionLi.textContent = fruitName;

		suggestionLi.addEventListener('mouseenter', () => {
			suggestionLi.classList.add('highlight');

		});

		suggestionLi.addEventListener('mouseleave', () => {
			suggestionLi.classList.remove('highlight');

		});

		createUl.append(suggestionLi)


	});
	suggestions.innerHTML = '';
	suggestions.append(createUl);

	fruitSuggestions();
}

function search(str) {

	const filteredFruit = fruit.filter(val => val.toLowerCase().includes(str));


	showSuggestions(filteredFruit);

}

const pressedKeys = [];

function searchHandler(e) {
	const searchBar = document.getElementById('fruit');
	let searchQuery = '';
	searchBar.addEventListener('input', function (e) {
		searchQuery = e.target.value.toLowerCase();

		if (searchQuery === '') {
			clearSuggestions();
		} else {
			search(searchQuery);
		}
	})
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', fruitSuggestions);