import { Form } from "react-bootstrap"

const SearchItem = ({ search, setSearch }) => {
    return (
        <Form onSubmit={(e) => e.preventDefault()} className="my-2">
            <Form.Label htmlFor='search' hidden>Search</Form.Label>
            <Form.Control
                id='search'
                type='text'
                role='searchbox'
                placeholder='Search Items'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </Form>
    )
}

export default SearchItem