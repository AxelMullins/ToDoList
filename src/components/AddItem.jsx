import { FaPlus } from "react-icons/fa";
import { useRef } from "react";
import { Button, Form } from "react-bootstrap";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  const inputRef = useRef();

  return (
    <Form onSubmit={handleSubmit} className="d-flex mt-5">
        <Form.Label htmlFor="addItem" hidden>Add Item</Form.Label>
        <Form.Control
          autoFocus
          ref={inputRef}
          id="addItem"
          type="text"
          placeholder="Add Item"
          required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <Button
          variant="success"
          type="submit"
          aria-label="Add Item"
          onClick={() => inputRef.current.focus()}
        >
          <FaPlus />
        </Button>
    </Form>
  );
};

export default AddItem;
