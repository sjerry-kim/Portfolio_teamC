import { NavLink } from "react-router-dom";

const MypageNavbar = () => {
  return (  
    <div>
      <NavLink to='/mypage/account'>My Account</NavLink>
      <NavLink to='/mypage/reciept'>My Reciept</NavLink>
    </div>
  );
}

export default MypageNavbar;