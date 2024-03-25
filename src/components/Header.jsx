const Header = ({ title }) => {
  /* props are used to pass data from parent to child component */
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

/* Default Props:- Default props allow us to set values for the props expected in the component.
If not provided default values will take over instead of receiving an error.
This is great thing to do when you are first designing the component where the data is note receiving which is
 expected from api/localstorage etc  */
Header.defaultProps = { title: "Default Title" };

export default Header;
