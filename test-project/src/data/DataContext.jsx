import { createContext, useState } from "react";

import zipdak  from '../img/zipdak.jpg';
import modun from '../img/modun.jpg';
import zipdak3  from '../img/zipdak3.jpg';
import zipdak4  from '../img/zipdak4.jpg';
import zipdak5  from '../img/zipdak5.jpg';
import zipdak6  from '../img/zipdak6.jpg';
import zipdak7  from '../img/zipdak7.jpg';
import zipdak8  from '../img/zipdak8.jpg';
import { useNavigate } from "react-router-dom";


const DataContext = createContext();

const DataProvider = (({children}) => {

    // Portfolio & Product 
    const [comment, setComment] = useState([]);


    // Estimation
    // 간편견적 결과 페이지 이동
    const navigate = useNavigate();

    // Receipt 리스트 정보
    const [reciept, setReciept] = useState([]);

    // question 정보
    const [question, setQuestion] = useState([
        {
            id:1,
            title: "건물 유형 선택",
            answera: "아파트",
            answerb: "빌라",
            answerc: "단독주택",
            answerd: "원룸/오피스텔",
            answere: "상가",
            type: "Aa",
        },
        {
            id:2,
            title: "도배 시공",
            answera: "해당 없음",
            answerb: "실크",
            answerc: "합지",
            answerd: "대리석",
            answere: "기타",
            type: "Aa",
        },
        {
            id:3,
            title: "샷시 시공",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "Aa",
        },
        {
            id:4,
            title: "바닥 시공",
            answera: "사제",
            answerb: "브랜드",
            answerc: "도기",
            answerd: "타일",
            answere: "기타",
            type: "Bb",
        },
        {
            id:5,
            title: "베란다 시공",
            answera: "해당 없음",
            answerb: "거실 확장",
            answerc: "방 확장",
            answerd: "단올림",
            answere: "기타",
            type: "Bb",
        },
        {
            id:6,
            title: "방문보수/교체",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "Bb",
        },
        {
            id:7,
            title: "현관문 시공",
            answera: "해당 없음",
            answerb: "신발장",
            answerc: "타일",
            answerd: "중문",
            answere: "기타",
            type: "Cc",
        },
        {
            id:8,
            title: "조명 시공",
            answera: "해당 없음",
            answerb: "전체 교체",
            answerc: "등",
            answerd: "스위치",
            answere: "기타",
            type: "Cc",
        },
        {
            id:9,
            title: "총 예상 비용",
            answera: "500만 원 미만",
            answerb: "1,000 만 원 대",
            answerc: "2,000만 원대",
            answerd: "3,000만 원대",
            answere: "4,000만 원대 이상",
            type: "Cc",
        },
        {
            id:10,
            title: "업체 선정 시 가장 중요한 것은?",
            answera: "가성비",
            answerb: "고급 자재 사용",
            answerc: "디자인",
            answerd: "공사 경험",
            answere: "거리",
        }
    ])
    
    // 

    // 결과 정보
    /*
    const [result, setResult] = useState([
        {
            id: 1,
            title: "A",
            type: "아파트",
            wallpaper: "사제",
            sash:"해당 없음",
            floor: "해당 없음",
            veranda:"해당 없음",
            roomdoor:"해당 없음",
            frontdoor:"해당 없음",
            light:"해당 없음",
            price:"500만 원 미만"
        },
        {
            id: 2,
            title: "B",
            type: "빌라",
            wallpaper: "브랜드",
            sash:"전체",
            floor: "실크",
            veranda:"거실 확장",
            roomdoor:"전체",
            frontdoor:"신발장",
            light:"전체 교체",
            price:"1,000만 원 대"
        },
        {
            id: 3,
            title: "C",
            type: "단독주택",
            wallpaper: "사제",
            sash:"도기",
            floor: "합지",
            veranda:"방 확장",
            roomdoor:"부분",
            frontdoor:"타일",
            light:"등",
            price:"2,000만 원 대"
        },
        {
            id: 4,
            title: "D",
            type: "오피스텔",
            wallpaper: "사제",
            sash:"타일",
            floor: "대리석",
            veranda:"단올림",
            roomdoor:"필름",
            frontdoor:"중문",
            light:"스위치",
            price:"3,000만 원 대"
        },
        {
            id: 5,
            title: "E",
            type: "상가",
            wallpaper: "사제",
            sash:"기타",
            floor: "기타",
            veranda:"기타",
            roomdoor:"기타",
            frontdoor:"기타",
            light:"해당 없음",
            price:"4,000만 원대 이상"
        },
        {
            id: 6,
            title: "F",
            type: "상가",
            wallpaper: "사제",
            sash:"기타",
            floor: "기타",
            veranda:"기타",
            roomdoor:"기타",
            frontdoor:"기타",
            light:"해당 없음",
            price:"4,000만 원대 이상"
      },
    ])
    */

    const [score, setScore] = useState([
        {
            id:1,
            name:"에비앙 디자인",
            best : "ABC",
            location: "부산 강서구 유통단지1로 41",
            number: "010-2546-4095"
        },
        {
            id:2,
            name:"제이와이인테리어",
            best : "ABc",
            location: "전라북도 전주시 완산구 공북로",
            number: "063-252-9631"
        },
        {
            id:3,
            name:"푸른들인테리어",
            best : "AbC",
            location: "경상남도 김해시 월산로 11",
            number: "010-7487-7410"
        },
        {
            id:4,
            name:"주식회사1204디자인",
            best : "Abc",
            location: "광주광역시 광산구 왕버들로 101",
            number: "1666-1204"
        },
        {
            id:5,
            name:"Agio Design",
            best : "aBC",
            location: "서울특별시 서초구 효령로46길 22",
            number: "02-517-5001"
        },
        {
            id:6,
            name:"모노 인테리어",
            best : "aBc",
            location: "서울 마포구 양화로7길 74",
            number: " 02-3144-7339"
        },
        {
            id:7,
            name:"다원 디자인",
            best : "abc",
            location: "서울특별시 강남구 테헤란로 16길 12",
            number: " 02-3468-5800"
        },
        {
            id:8,
            name:"이다스 건축 인테리어",
            best : "abC",
            location: "서울 강남구 도산대로 68길 26",
            number: " 02-543 6566"
        },
    ])


    const value = {
        state: { comment, question, reciept, score },
        action: { setComment, setQuestion, setReciept, setScore }
    }
    return (
      <DataContext.Provider value={value}>
        {children}
      </DataContext.Provider>
    );

})

const {Consumer :DataConsumer} = DataContext;

export {DataConsumer , DataProvider};

export default DataContext;