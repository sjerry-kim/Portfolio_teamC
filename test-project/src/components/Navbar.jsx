import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div style={{height:" 100px"}}>
      <Link to='/'>today design</Link>
      <Link to='/main/test'>Test</Link>
      <Link to='/estimation'>Estimation</Link>
    </div>
  );
}

export default Navbar;