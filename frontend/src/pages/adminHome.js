import { useEffect } from "react";
import { useItemsContext } from "../hooks/useItemsContext";

//components
import ItemDetails from "../components/ItemDetails";
import ItemForm from "../components/ItemForm";

const AdminHome = () => {
  const { items, dispatch } = useItemsContext();

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_ITEMS", payload: json });
      }
    };

    fetchItems();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="items">
        {items &&
          items.map((item) => <ItemDetails item={item} key={item._id} />)}
      </div>
      <ItemForm />
    </div>
  );
};

export default AdminHome;
