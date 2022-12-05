import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div style={{height:" 100px", backgroundColor:"transparent"}}>
      <Link to='/'>today design</Link>
      <Link to='/main/portfolio'>Portfolio</Link>
      <Link to='/main/estimation'>Estimation</Link>
    </div>
  );
}

export default Navbar;