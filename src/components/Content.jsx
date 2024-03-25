import ItemList from "./ItemList";
const Content = ({ items, handleCheck, handleDelete }) => {
  /* Way to display a list in JSX it to work through it using "maps" */
  /* An item in the list needs to have a key attribute in react */

  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
  );
};

export default Content;
