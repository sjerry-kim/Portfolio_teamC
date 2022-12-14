import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../data/DataContext";

const MainComment = () => {
  const { state, action } = useContext(DataContext);
  const { id } = useParams();
  const date = new Date();
  const filteredMarket = state.comment.filter((f)=>(f.marketId == id))

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      {filteredMarket.map((c, i) => (
        <div key={i}>
          {c.name}
          {c.text}
          <br />
          <p style={{ fontSize: "0.9em", color: "gray" }}>
            {`${date.getFullYear()}.
                            ${date.getMonth() + 1 < 10
                ? `0${date.getMonth() + 1}`
                : date.getMonth() + 1
              }.
                            ${date.getDate() < 10
                ? `0${date.getDate()}`
                : date.getDate()
              }.　`}
            {/* {
                            `${date.getHours()} : ${date.getMinutes()<10 ? (`0${date.getMinutes()}`): date.getMinutes() }` 
                           } */}
          </p>
          <button
            onClick={() => {
              const deletedText = state.comment.filter(
                (d, index) => i != index
              );
              if (true) {
                action.setComment(deletedText);
              }
              console.log(state.comment);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainComment;
