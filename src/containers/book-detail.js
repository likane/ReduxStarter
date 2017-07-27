import React, {Component} from 'react';

import {connect} from 'react-redux';


export default class BookDetail extend Component {
	render() {
		if (!this.props.book){
			return <div>Select a book to get started.</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div>{this.props.book.title}</div>

			</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		book: state.activeBook
	}
}

export default connect(mapStateToProps)(BookDetail);