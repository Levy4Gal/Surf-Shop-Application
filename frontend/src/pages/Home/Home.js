import { useEffect } from "react";
import { useItemsContext } from "../../hooks/useItemsContext";
//components
import ItemDetails from "../Home/components/ItemDetails";
import FilterBrand from "../Home/components/FilterBrand";
import FilterCategory from "../Home/components/FilterCategory";
import FilterPrice from "../Home/components/FilterPrice";
import FilterSearchBar from "../Home/components/FilterSearchBar";
// import ItemForm from "../components/ItemForm";
const Home = (props) => {
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
      <div className="filterBar">
        <FilterBrand />
        <FilterCategory />
        <FilterPrice />
        <FilterSearchBar />
      </div>
      <div className="items">
        {items &&
          items.map((item) => (
            <ItemDetails
              isLoggedIn={props.isLoggedIn}
              amountInCart={props.amountInCart}
              setAmountInCart={props.setAmountInCart}
              item={item}
              key={item._id}
              cart={props.cart}
              setCart={props.setCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;