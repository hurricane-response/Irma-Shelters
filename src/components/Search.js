import React, { Component } from 'react'
import * as SheltersApi from '../utils/SheltersApi';

class Search extends Component {
	state = {
		query: '',
		searched: [],
		errorMessage: ''
	}

	updateQuery = (query) => {
		this.setState({
			query: query
		})
		this.searchData(query)

	}

	searchData = (query) => {
		const { markerData, onInputSearch } = this.props;
		if (query.length > 1) {
			const matched = markerData.filter(
				data => data.shelter.toLowerCase().indexOf(query.toLowerCase()) > -1
			)
			this.setState({
				searched: matched
			})
			onInputSearch(matched)
		} else {
			this.setState({
				searched: []
			})
		}
	}

	handleCloseSearch = (data) => {
		const { onInputSearch } = this.props;
		this.setState({
			query: `${ data.shelter } at ${ data.address }, ${ data.city }`,
			searched: []
		})
	}

	render() {
		const { query, searched, errorMessage } = this.state;
		const { onClickSearch, } = this.props;
		return (
		<div className="search-data-container">
			<div className="search-data-bar">
			  <div className="search-data-input-wrapper">
			    <input
				    type="text"
				    placeholder="Search by Shelter"
				    value={query}
				    onChange={(e) => this.updateQuery(e.target.value)}
			    />
			  </div>
			</div>
			<div className="search-data-results">
				<ul>
					{searched.map((data, index) => (
						<li key={index} onClick={() => {
							this.handleCloseSearch(data)
							onClickSearch(data)
						}}>
							{`${ data.shelter } at ${ data.address }, ${ data.city }`}
						</li>
					))}
				</ul>
			</div>
		</div>
		)
	}
}

export default Search