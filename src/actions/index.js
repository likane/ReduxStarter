//contain action creators

export function selectBook(book) {
	//selectbook is an actioncreator, needs to return an action, object w/ type property
	return {
		type:'BOOK_SELECTED',
		payload: book
	};
}