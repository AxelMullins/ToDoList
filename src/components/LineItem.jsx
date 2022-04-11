import { Form, ListGroup } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <Form.Check>
        <Form.Check.Input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <Form.Check.Label
          style={
            item.checked
              ? { textDecoration: "line-through" }
              : null
          }
        >
          {item.item}
        </Form.Check.Label>
      </Form.Check>
      <FaTrashAlt
        onClick={() => handleDelete(item.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </ListGroup.Item>
  );
};

export default LineItem;
