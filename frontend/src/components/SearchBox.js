import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
const SearchBox = ({ history }) => {
	const [keyword, setKeyword] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()
		{
			keyword.trim() ? history.push(`/search/${keyword}`) : history.push('/')
		}
	}
	return (
		<Form onSubmit={submitHandler} inline>
			<Form.Control
				type="text"
				placeholder="Search Products..."
				className="mr-sm-2 ml-sm-5"
				name="q"
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			></Form.Control>
			<Button type="submit" variant="outline-success" className="p-2">
				Search
			</Button>
		</Form>
	)
}

export default SearchBox
