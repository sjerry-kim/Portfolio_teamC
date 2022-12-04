import { Link } from "react-router-dom";

const Navbar = () => {
  return ( 
    <div style={{height:" 100px", backgroundColor:"transparent"}}>
      <Link to='/home'>today design</Link>
      <Link to='/portfolio'>Portfolio</Link>
      <Link to='/estimation'>Estimation</Link>
    </div>
  );
}

export default Navbar;