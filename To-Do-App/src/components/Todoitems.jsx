import { Item } from "./Item";

export let Todoitems = ({ item ,onDelete }) => {
  return (
    <>
      {item.map((items) => 
        (<Item
          key={items.todo}
          todoName={items.todo}
          todoDate={items.dueDate}
          onDelete={onDelete}
        ></Item>)
      )}
    </>
  );
};
