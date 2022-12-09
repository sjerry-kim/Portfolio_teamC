import { createContext, useState } from "react";
// 회사 slick 이미지
import companyImg1 from '../img/companyImg1.jpg';
import companyImg2 from '../img/companyImg2.jpg';
import companyImg3 from '../img/companyImg3.jpg';
// 리뷰 card 이미지
import reviewImg1 from '../img/reviewImg1.jpg';
import reviewImg2 from '../img/reviewImg1.jpg';
import reviewImg3 from '../img/reviewImg1.jpg';


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
            number: "010-2546-4095",
            companyImg1:`${companyImg1}`,
            companyImg2:`${companyImg2}`,
            companyImg2:`${companyImg3}`,
            reviewImg1:`${reviewImg1}`,
            reviewImg2:`${reviewImg2}`,
            reviewImg3:`${reviewImg3}`,
            reviewTitle1:"부산인테리어 문현동 한일 오피스텔 로리진 사무실리모델링",
            reviewTitle2:"부산인테리어 진해 신항만 실내골프장 리모델링",
            reviewTitle3:"부산 강서구 명지동 롯대캐슬 33py",
            reviewComment1:"상담부터 시공과정까지 틈틈히 소통해가며 현장 수시방문하여 점검, 케어해 주셨습니다. 사소한 요구사항까지 친절하시고 꼼꼼하게 진행해주시고 원하는 사항을 최대한 반영해 작업해 주셔서 좋았습니다. 다음에 또 의뢰 맡길 의사가 매우 있습니다.",
            reviewComment2:"집을 계약하고 제일 중요하게 봤던게 인테리어였습니다. 특히 저희 건물은 화장실 타일이랑 전반적으로 상태가 너무 안좋았습니다. 믿고 할수 있는 업체를 찾다가 에비앙 디자인으로 상담을 받았습니다. 저희는 기간이 많이 남아있는데도 너무 친절하게 설명해주시고 저희 리즈를 확실하게 해주셧어요 덕분에 잘 마무리되었습니다! ",
            reviewComment3:"상담부터 너무 친절하시고 마감도 꼼꼼하게 봐주시고 무엇보다 다른 주변사람들과 비교했을때 퀄리티도 좋았고 가격도 합리적이어서 좋았습니다! 제가 걱정한건 공사끝나고 하자문제였어요 근데 살다보니 어쩔수없이 수리해야 될것들이 있어서 연락드렸더니 바로 와주셔서 너무 만족스러웠어요 공사도 꼼꼼히 해주시고 추후as도 잘해주셔서 감사합니다!",
        },
        {
            id:2,
            name:"제이와이인테리어",
            best : "ABc",
            location: "전라북도 전주시 완산구 공북로",
            number: "063-252-9631",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:3,
            name:"푸른들인테리어",
            best : "AbC",
            location: "경상남도 김해시 월산로 11",
            number: "010-7487-7410",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:4,
            name:"주식회사1204디자인",
            best : "Abc",
            location: "광주광역시 광산구 왕버들로 101",
            number: "1666-1204",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:5,
            name:"Agio Design",
            best : "aBC",
            location: "서울특별시 서초구 효령로46길 22",
            number: "02-517-5001",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:6,
            name:"모노 인테리어",
            best : "aBc",
            location: "서울 마포구 양화로7길 74",
            number: " 02-3144-7339",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:7,
            name:"다원 디자인",
            best : "abc",
            location: "서울특별시 강남구 테헤란로 16길 12",
            number: " 02-3468-5800",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:8,
            name:"이다스 건축 인테리어",
            best : "abC",
            location: "서울 강남구 도산대로 68길 26",
            number: " 02-543 6566",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:9,
            name:"다솔디자인",
            best : "abC",
            location: "수정",
            number: " 수정",
            companyImg1:"",
            companyImg2:"",
            companyImg2:"",
            reviewImg1:"",
            reviewImg2:"",
            reviewImg3:"",
            reviewTitle1:"",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
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