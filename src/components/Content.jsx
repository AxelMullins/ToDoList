import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main className='mt-5'>
            <h3>List</h3>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p className='mt-4'>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content