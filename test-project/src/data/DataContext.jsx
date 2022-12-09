import { createContext, useState } from "react";
// 회사 slick 이미지
import evianCom1 from '../img/evianCom1.jpg';
import evianCom2 from '../img/evianCom2.jpg';
import evianCom3 from '../img/evianCom3.jpg';

import jyCom1 from '../img/jyCom1.jpg';
import jyCom2 from '../img/jyCom2.jpg';
import jyCom3 from '../img/jyCom3.jpg';

import purenCom1 from '../img/purenCom1.jpg';
import purenCom2 from '../img/purenCom2.JPG';

import dasoleCom1 from '../img/dasoleCom1.JPG';
import dasoleCom2 from '../img/dasoleCom2.JPG';
import dasoleCom3 from '../img/dasoleCom3.JPG';

import idasCom1 from '../img/idasCom1.JPG';
import idasCom2 from '../img/idasCom2.JPG';
import idasCom3 from '../img/idasCom3.JPG';

import dawonCom1 from '../img/dawonCom1.JPG';
import dawonCom2 from '../img/dawonCom2.JPG';
import dawonCom3 from '../img/dawonCom3.JPG';


// 리뷰 card 이미지
import evianComRe1 from '../img/evianComRe1.jpg';
import evianComRe2 from '../img/evianComRe2.jpg';
import evianComRe3 from '../img/evianComRe3.jpg';

import jyComRe1 from '../img/jyComRe1.JPG';
import jyComRe2 from '../img/jyComRe2.JPG';
import jyComRe3 from '../img/jyComRe3.JPG';

import purenComRe1 from '../img/purenComRe1.JPG';
import purenComRe2 from '../img/purenComRe2.jpg';

import dasoleComRe1 from '../img/dasoleComRe1.JPG';
import dasoleComRe2 from '../img/dasoleComRe2.JPG';
import dasoleComRe3 from '../img/dasoleComRe3.JPG';

import idasComRe1 from '../img/idasComRe1.JPG';
import idasComRe2 from '../img/idasComRe2.JPG';
import idasComRe3 from '../img/idasComRe3.JPG';

import dawonComRe1 from '../img/dawonComRe1.JPG';
import dawonComRe2 from '../img/dawonComRe2.JPG';
import dawonComRe3 from '../img/dawonComRe3.JPG';

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
            companyImg:[ "evianCom1.jpg", "evianCom2.jpg", "evianCom3.jpg"], //😡
            reviewImg1:evianComRe1,
            reviewImg2:evianComRe2,
            reviewImg3:evianComRe3,
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
            companyImg1:jyCom1,
            companyImg2:jyCom2,
            companyImg2:jyCom3,
            reviewImg1:jyComRe1,
            reviewImg2:jyComRe2,
            reviewImg3:jyComRe3,
            reviewTitle1:"부산 해운대구 센텀피오레",
            reviewTitle2:"부산 해운대구 더샵 센텀스타",
            reviewTitle3:"울산 남구 옥현주공 아파트",
            reviewComment1:"우선 올해 11월 말 준공한 따뜻한 집이에요. 처음에 구축 아파트로 리모델링하면 돈도 돈이지만, 업체를 잘만나야 된다고 하는데 전 운이 좋았어요.  물론7개 업체중에 최종적으로 선택한 업체지만  선택엔 신의한수였습니다.  타업체보다  꼼꼼하시고 젊은 분들이라 감각, 안목, 소통, 공유 정말 뭐하나 불만족인게 없었습니다.",
            reviewComment2:"처음 미팅부터 구체적인 견적서와 정확한 워딩으로 신뢰를 주셨습니다. 다만 다른 업체보다 비싼 견적을 주셔서 중간에 고민의 순간이 있었습니다. 그러나 모호한 견적서를 제시한 다른 업체와 견적에 대해서 좀더 이야기 해보니 각 공정에 추가 비용을 받는게 확인되었습니다. 그러나 사장님께서는 각 공정마다 명확하게 비용을 확인 해주셨습니다. 지금 생각해봐도 이 부분에 다시 한번 사장님께 감사드립니다.",
            reviewComment3:"구축주택(전체 채리색) 이였습니다. 집닥으로 견적보고 어렵게 정했어요. 집안을 밝아보이기 위해 분위기를 전체 화이트로 정했는데 사장님께서 너무 친절하게 모르는 부분도 설명해주시고 여기는 이렇게 하는게 좋겠다고 수정도 해주셔서 감사했습니다. 공사시작전 as기간도 친절하게 설명해주시고 공사도중 계속 체크해주셔서 문제있는 부분은 바로 처리도 잘해주셨어요. 공사끝나고 입주하니 색상이랑 분위기가 제가 생각했던대로 되서 너무 좋았어요.",
        },
        {
            id:3,
            name:"푸른들인테리어",
            best : "AbC",
            location: "경상남도 김해시 월산로 11",
            number: "010-7487-7410",
            companyImg1:purenCom1,
            companyImg2:purenCom2,
            companyImg2:"",
            reviewImg1:purenComRe1,
            reviewImg2:purenComRe2,
            reviewImg3:"",
            reviewTitle1:"대구전원주택 리모델링",
            reviewTitle2:"",
            reviewTitle3:"",
            reviewComment1:"계단관련 리뷰쓰기",
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
            location: "서울시 강남구 테헤란로 16길 다원빌딩 12F",
            number: "02-3468-5800",
            companyImg1: dawonCom1,
            companyImg2: dawonCom2,
            companyImg2: dawonCom3,
            reviewImg1: dawonComRe1,
            reviewImg2: dawonComRe2,
            reviewImg3: dawonComRe3,
            reviewTitle1:"다원디자인 서울",
            reviewTitle2:"다원디자인",
            reviewTitle3:"다원디자인 서울 ",
            reviewComment1:"",
            reviewComment2:"",
            reviewComment3:"",
        },
        {
            id:8,
            name:"이다스 건축 인테리어",
            best : "abC",
            location: "서울 강남구 도산대로 68길 26 IDAS 빌딩 1F/2F",
            number: "+82-2-543 6566",
            companyImg1: idasCom1,
            companyImg2: idasCom2,
            companyImg2: idasCom3,
            reviewImg1: idasComRe1,
            reviewImg2: idasComRe2,
            reviewImg3: idasComRe3,
            reviewTitle1:"이다스컨축인테리어 경기도 성남시 분당구 판교",
            reviewTitle2:"이다스컨축인테리어 서울 용산구 요상동 파크 타워 ",
            reviewTitle3:"이다스컨축인테리어 서울 동대문구 전농동 레미안 아파트 리모델링",
            reviewComment1:"부모님께 손 벌리지 않고 혼자 열심히 모아서 드디어 제 카페를 개업했습니다! 그래서 개업 할 건물부터 꼼꼼히 봤고 당연히 인테리어도 정말 고민했습니다 이다스 건축 인테리는 인테리어와 함께 건물도 보고 제일 만족스럽게 인테리어를 뽑아주셨습니다 정말 만족하고 원하는대로 나와서 기쁩니다 최고에여!",
            reviewComment2:"처음에 여기 유명한 곳 같아서 대기가 길어질까 공사가 어떻게 들어갈까 너무 고민했습니다 근데 막상 진행하니까 빠르게 잘 해주셔서 만족합니다 따뜻한 분위기를 원했는데 그 부분도 잘 살려주셔서 기분이 좋습니다",
            reviewComment3:"집 리모델링 하면서 부엌에 가장 신경을 써달라고 했습니다. 와이프가 요리하는걸 좋아하거든요^^ 저기서 맛있는 요리를 저한테 해 줄 생각에 너무 행복해하네요~~^^(신혼 이해바람) 그리고 우리 부부가 블랙과 화이트를 좋아해서 집도 블랙 화이트로 꾸미고 싶었는데 말 그대로 나와서 좋습니다",

        },
        {
            id:9,
            name:"다솔디자인",
            best : "abC",
            location: "서울시 서초구 명달로 104, 모차르트빌딩 7F",
            number: "02.535.3431  02.535.3432   070.4279.0800",
            companyImg1: dasoleCom1,
            companyImg2: dasoleCom2,
            companyImg2: dasoleCom3,
            reviewImg1: dasoleComRe1,
            reviewImg2: dasoleComRe2,
            reviewImg3: dasoleComRe3,
            reviewTitle1:"다솔인테리어 서울 메이드영 성형외과 대기실 환경개선",
            reviewTitle2:"다솔인테리어 (주)한컴라이프케어 기술 연구소리모델링",
            reviewTitle3:"다솔인테리어 서울 기린성형외과 8F 대기실 리모델링",
            reviewComment1:"이런 글 안쓰는 사람인데 처음 써 봐요 다솔디자인에 의뢰한 후 직원들이며, 저희 메이드영 성형외과를 방문해주시는 모든 분들이 분위기가 전체적으로 고급지다고 만족해했습니다. 올 리모델링이라 기간이 오래 걸릴까 걱정을 많이 했는데 예상보다 빨리 끝내주셨고 꼼꼼하게 마감처리 해주셔서 매우 만족하고 있어요 다음에 리모데링을 한다면 또 맡기고 싶습니다 너무 만족스러워요",
            reviewComment2:"사무실이 갑갑했었는데 다솔인테리어에 리모델링 의뢰 했으면 분위기가 화사했으면 했고, 좀 더 집중이 잘되는 연구소이이길 바랬습니다. 근데 저희가 원하는 조건을 그대로 완성시켜 주셔서 전 좋았습니다 만족스러워요 사무실 들어가서 일 할 맛이 납니다 ",
            reviewComment3:"첫 상담 연락부터 매우 만족이였습니다 병원 리모델링 잘 못하면 분위기 망하고 사람들한테 이미지 나빠지면 정말 골치 아팠는데 앓던 이 뽑았습니다 가격도 마음에 들고 정말 만족해요 상담부터 친절히 해주시고 직원들 휴식공간도 더 개선 할 수 있어서 좋습니다 ",

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