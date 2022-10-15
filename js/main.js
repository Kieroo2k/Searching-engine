const search = document.querySelector('.search')
const drinks = document.querySelectorAll('li')

const searching = e => {
	const text = e.target.value.toLowerCase()

	drinks.forEach(drink => {
		if (drink.textContent.toLowerCase().indexOf(text) !== -1) {
			drink.style.display = 'block'
		} else {
			drink.style.display = 'none'
		}
	})
}

search.addEventListener('keyup', searching)

//rozwiązanie z RegExp

// const filterList = () => {
// 	drinks.forEach(drink => {
// 		const match = new RegExp(search.value, 'i').test(drink.textContent)

// 		if (!match) {
// 			drink.style.display = 'none'
// 		} else {
// 			drink.style.display = 'block'
// 		}
// 	})
// }

// search.addEventListener('keyup', filterList)
