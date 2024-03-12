import { RiDeleteBin6Line } from "react-icons/ri";
import styles from './Item.module.css'

export function Item({ todoName, todoDate, onDelete }) {
  return (
    <>
      <div className={"item"}>
        <div className="row items">
          <div className="col-4">
            <p>{todoName}</p>
          </div>
          <div className="col-4">
            <p>{todoDate}</p>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger btn-sm btn-action"
              onClick={() => onDelete(todoName)}
            >
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
