import Header from "./components/Header";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const API_URL = "http://localhost:3500/itemss"; //error handling with wrong address
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        console.log(err.stack);
        setFetchError(err.message);
      }
    };
    (async () => await fetchItems())();
    //fetchItems does not return a value. Therefore, this async IIFE (instantly invoked function expression) is not required.
    //You can just make a call to fetchItems()
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);
  };
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); /* this is done to prevent the page reload while the form  submission */
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Grocery List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {fetchError && <p style={{ color: "red" }}>{`Error:${fetchError}`}</p>}
        {!fetchError && (
          <Content
            items={items.filter((item) =>
              item.item.toLowerCase().includes(search.toLowerCase())
            )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </div>
  );
}

Header.default;
export default App;
