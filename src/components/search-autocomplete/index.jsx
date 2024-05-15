import { useEffect } from "react";
import { useState } from "react";
import ShowDropdown from "./show-dropdown";

export default function SearchAutocomplete() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [showProducts, setShowProducts] = useState(false);
  const [list, setList] = useState([]);

  async function getProductList() {
    try {
      const resp = await fetch(`https://dummyjson.com/products`);
      const data = await resp.json();

      if (data && data.products && data.products.length) {
        setProducts(data.products.map((item) => item.title));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  function handleChange(event) {
    const text = event.target.value.toLowerCase();
    setSearchText(text);
    if (text.length > 1) {
      const list =
        products && products.length
          ? products.filter((item) => item.toLowerCase().indexOf(text) > -1)
          : [];
      setList(list);
      setShowProducts(true);
    } else {
      setShowProducts(false);
    }
  }

  function handleClick(event) {
    setShowProducts(false);
    setSearchText(event.target.innerText);
    setList([]);
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <div className="search-autocomplete">
      <input
        type="text"
        name="search-products"
        placeholder="Search Products"
        value={searchText}
        onChange={handleChange}
      />
      {showProducts && <ShowDropdown onClick={handleClick} data={list} />}
    </div>
  );
}
