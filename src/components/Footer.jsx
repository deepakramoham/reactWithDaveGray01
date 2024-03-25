
const Footer = ({length}) =>{

  const date = new Date();
  return(<footer>
    <p>{length} List {length === 1 ? "item":"items"} </p>
  </footer>)
}

export default Footer;