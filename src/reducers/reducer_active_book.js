export default function(state=null, action) {

	switch(action.type) {
		case 'BOOK_SELECTED':
		return action.payload;
	}
	return state;
}

//reducers get 2 argumetns
//state argument is not applciation state, only the stae the reducer is responsible for.