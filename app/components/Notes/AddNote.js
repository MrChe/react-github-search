import React from 'react';

const AddNote = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired
	},
	setRef(ref) {
		this.note = ref;
	},
	handleSubmit() {
		const newNote = this.note.value;
		this.note.value = '';
		this.props.addNote(newNote);
	},
	render() {
		return (
			<div className="input-group">
				<input
					type="text"
					className="form-control"
				    placeholder="Add New Note"
				    ref={this.setRef}
				/>
				<div className="input-group-btn">
					<button
						className="btn btn-default"
					    type="button"
					    onClick={this.handleSubmit}>
					Submit
					</button>
				</div>
			</div>
		)
	}
});

export default AddNote