import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../data/DataContext";

const Navbar = () => {
  const { action } = useContext(DataContext);

  return ( 
    <div style={{height:" 100px", backgroundColor:"transparent"}}>
      <Link to='/'>today design</Link>
      <Link to='/main/portfolio'>Portfolio</Link>
      <Link to='/main/estimation' onClick={()=>{action.setReciept([]);}}>Estimation</Link>
      <Link to='/main/map'>Map</Link>
    </div>
  );
}

export default Navbar;