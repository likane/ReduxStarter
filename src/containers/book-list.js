import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

 class Booklist extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
					<li 
					key={book.title} 
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
					</li>
				);
		});
	}


	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}


function mapStateToProps(state) {
	//whatever is returned will show up as props inside of booklist
	return {
		books:state.books
	}
}

//returned from this function will end up as sprops onthe booklist container
function mapDispatchToProps(dispatch ){

	//whenever selectbook is called, result should be passed to all reducers
	return bindActionCreators({selectBook: selectBook}, dispatch)
}

//promote booklist from a component to a container
export default connect (mapStateToProps, mapDispatchToProps)(Booklist);