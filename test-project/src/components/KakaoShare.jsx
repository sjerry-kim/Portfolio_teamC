import {} from "../css/KakaoShare.css";
import { useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperclip
} from "@fortawesome/free-solid-svg-icons";


import { useContext, useState } from "react";
import DataContext from "../data/DataContext";
import { useParams } from "react-router-dom";





export default function KakaoShare() {

  const { id } = useParams();
  const { state } = useContext(DataContext);
  const shopShare = state.score.find(r => r.id == id);

	useEffect(() => {
    kakaoButton()
  }, [])

  const kakaoButton = () => {
    if (window.Kakao) {
      const kakao = window.Kakao
      if (!kakao.isInitialized()) {
        kakao.init('9604cba2c5ffd8ab855f73b47b31ee25')
      }
      kakao.Share.createDefaultButton({
        container: '#kakaotalk-sharing-btn',
        objectType: 'feed',
        content: {
          title: `${shopShare.name}`,
          imageUrl:
            `${shopShare.mainIMGSrc}`,
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '해당 사이트로 이동',
            link: {
              mobileWebUrl: 'https://developers.kakao.com',
              webUrl: 'https://developers.kakao.com',
            },
          },
        ],
      });
    }
  }
	
	return (
		<button className='shareBtn' id='kakaotalk-sharing-btn' >
      <FontAwesomeIcon icon={faPaperclip} 
        style={{
          height:"30px",
          width:"30px",
        }}/>
    </button>
	)
}