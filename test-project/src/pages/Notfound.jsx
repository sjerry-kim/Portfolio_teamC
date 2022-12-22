import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const navigate = useNavigate();
  return ( 
    <div>
      <h1>404 Not found</h1>
      <button onClick={()=>{navigate('/')}}>홈으로 가기</button>
    </div>
  );
}

export default Notfound;