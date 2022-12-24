import { createContext, useState } from "react";

// 리뷰 card 이미지
import evianComRe1 from '../img/evianComRe1.jpg';
import evianComRe2 from '../img/evianComRe2.jpg';
import evianComRe3 from '../img/evianComRe3.jpg';

import jyComRe1 from '../img/jyComRe1.JPG';
import jyComRe2 from '../img/jyComRe2.JPG';
import jyComRe3 from '../img/jyComRe3.JPG';

import purenComRe1 from '../img/purenComRe1.JPG';
import purenComRe2 from '../img/purenComRe2.jpg';
import purenComRe3 from '../img/purenComRe3.JPG';

import oneComRe1 from '../img/oneComRe1.jpg';
import oneComRe2 from '../img/oneComRe2.jpg';
import oneComRe3 from '../img/oneComRe3.jpg';

import agioComRe1 from '../img/agioComRe1.JPG';
import agioComRe2 from '../img/agioComRe2.JPG';
import agioComRe3 from '../img/agioComRe3.JPG';

import monoComRe1 from '../img/monoComRe1.JPG';
import monoComRe2 from '../img/monoComRe2.JPG';
import monoComRe3 from '../img/monoComRe3.JPG';

import dawonComRe1 from '../img/dawonComRe1.JPG';
import dawonComRe2 from '../img/dawonComRe2.JPG';
import dawonComRe3 from '../img/dawonComRe3.JPG';

import idasComRe1 from '../img/idasComRe1.JPG';
import idasComRe2 from '../img/idasComRe2.JPG';
import idasComRe3 from '../img/idasComRe3.JPG';

import dasoleComRe1 from '../img/dasoleComRe1.JPG';
import dasoleComRe2 from '../img/dasoleComRe2.JPG';
import dasoleComRe3 from '../img/dasoleComRe3.JPG';





// 회사 로고 
import evianLogo from '../img/evianLogo.png';
import jyLogo from '../img/jyLogo.png';
import purenLogo from '../img/purenLogo.png';
import oneLogo from '../img/oneLogo.png';
import agioLogo from '../img/agioLogo.png';
import monoLogo from '../img/monoLogo.jpg';
import dawonLogo from '../img/dawonLogo.png';
import idasLogo from '../img/idasLogo.png';
import dasoleLogo from '../img/dasoleLogo.jpg';


// 회사 메인 IMG
import evianMain from'../img/evianMain.JPG';
import agioMain from'../img/agioMain.JPG';
import dasoleMain from'../img/dasoleMain.JPG';
import dawonMain from'../img/dawonMain.JPG';
import idasMain from'../img/idasMain.JPG';
import jyMain from'../img/jyMain.JPG';
import monoMain from'../img/monoMain.JPG';
import oneMain from'../img/oneMain.JPG';
import purenMain from'../img/purenMain.JPG';







import { useNavigate } from "react-router-dom";
import ProductInsertComment from "../components/ProductInsertComment";

// createContext
const DataContext = createContext();

const DataProvider = (({ children }) => {

    // Portfolio & Product 
    const [comment, setComment] = useState([
        {   
            marketId: 1,
            commentId: 1,
            name: "홍길동",
            text: "좋은 업체입니다"
        },
    ]);

    // const [rating, setRating] = useState(5);
    // const [list, setList] = useState([]);

    // Estimation
    // 간편견적 결과 페이지 이동 -> 이거 왜 있음? 삭제해도 되는지 확인하기
    const navigate = useNavigate();

    // Receipt 리스트 정보
    const [reciept, setReciept] = useState([]);

    // question 정보
    const [question, setQuestion] = useState([
        {
            id: 1,
            title: "건물 타입",
            answera: "아파트",
            answerb: "빌라",
            answerc: "단독주택",
            answerd: "원룸/오피스텔",
            answere: "상가",
            type: "Aa",
        },
        {
            id: 2,
            title: "도배 시공",
            answera: "해당 없음",
            answerb: "실크",
            answerc: "합지",
            answerd: "대리석",
            answere: "기타",
            type: "Aa",
        },
        {
            id: 3,
            title: "샷시 시공",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "Aa",
        },
        {
            id: 4,
            title: "바닥 시공",
            answera: "사제",
            answerb: "브랜드",
            answerc: "도기",
            answerd: "타일",
            answere: "기타",
            type: "Bb",
        },
        {
            id: 5,
            title: "베란다 시공",
            answera: "해당 없음",
            answerb: "거실 확장",
            answerc: "방 확장",
            answerd: "단올림",
            answere: "기타",
            type: "Bb",
        },
        {
            id: 6,
            title: "방문 시공",
            answera: "해당 없음",
            answerb: "전체",
            answerc: "부분",
            answerd: "필름",
            answere: "기타",
            type: "Bb",
        },
        {
            id: 7,
            title: "현관문 시공",
            answera: "해당 없음",
            answerb: "신발장",
            answerc: "타일",
            answerd: "중문",
            answere: "기타",
            type: "Cc",
        },
        {
            id: 8,
            title: "조명 시공",
            answera: "해당 없음",
            answerb: "전체 교체",
            answerc: "조명등",
            answerd: "스위치",
            answere: "기타",
            type: "Cc",
        },
        {
            id: 9,
            title: "예상 비용",
            answera: "500만 원 미만",
            answerb: "1,000만 원대",
            answerc: "2,000만 원대",
            answerd: "3,000만 원대",
            answere: "4,000만 원 이상",
            type: "Cc",
        },
        {
            id: 10,
            title: "업체 선정 시 가장 중요한 것은?",
            answera: "가성비",
            answerb: "고급 자재 사용",
            answerc: "디자인",
            answerd: "공사 경험",
            answere: "거리",
        }
    ])

    // 

    const [score, setScore] = useState([
        {
            id: 1,
            name: "에비앙 디자인",
            best: "ABC",
            location: "부산 강서구 유통단지1로 41",
            number: "010-2546-4095",
            companyLogo: evianLogo,
            companyImg: ["evianCom1.jpg", "evianCom2.jpg", "evianCom3.jpg"],
            reviewImg1: evianComRe1,
            reviewImg2: evianComRe2,
            reviewImg3: evianComRe3,
            reviewTitle1: "부산인테리어 문현동 한일 오피스텔 로리진 사무실리모델링",
            reviewTitle2: "부산인테리어 진해 신항만 실내골프장 리모델링",
            reviewTitle3: "부산 강서구 명지동 롯대캐슬 33py",
            reviewComment1: "상담부터 시공과정까지 틈틈히 소통해가며 현장 수시방문하여 점검, 케어해 주셨습니다. 사소한 요구사항까지 친절하시고 꼼꼼하게 진행해주시고 원하는 사항을 최대한 반영해 작업해 주셔서 좋았습니다. 다음에 또 의뢰 맡길 의사가 매우 있습니다.",
            reviewComment2: "집을 계약하고 제일 중요하게 봤던게 인테리어였습니다. 특히 저희 건물은 화장실 타일이랑 전반적으로 상태가 너무 안좋았습니다. 믿고 할수 있는 업체를 찾다가 에비앙 디자인으로 상담을 받았습니다. 저희는 기간이 많이 남아있는데도 너무 친절하게 설명해주시고 저희 리즈를 확실하게 해주셧어요 덕분에 잘 마무리되었습니다! ",
            reviewComment3: "상담부터 너무 친절하시고 마감도 꼼꼼하게 봐주시고 무엇보다 다른 주변사람들과 비교했을때 퀄리티도 좋았고 가격도 합리적이어서 좋았습니다! 제가 걱정한건 공사끝나고 하자문제였어요 근데 살다보니 어쩔수없이 수리해야 될것들이 있어서 연락드렸더니 바로 와주셔서 너무 만족스러웠어요 공사도 꼼꼼히 해주시고 추후as도 잘해주셔서 감사합니다!",
            companyIntro:"토탈 인테리어 전문업체로서 \n합리적인 가격, 맞춤 디자인, 실용성까지 고려한\n인테리어로 고객님이 원하시는 디자인으로\n맞춤 시공 해드립니다.",
            mainIMG: evianMain,
        },
        {
            id: 2,
            name: "제이와이인테리어",
            best: "ABc",
            location: "전라북도 전주시 완산구 공북로",
            number: "063-252-9631",
            companyLogo: jyLogo,
            companyImg: ["jyCom1.jpg", "jyCom2.jpg", "jyCom3.jpg"],
            reviewImg1: jyComRe1,
            reviewImg2: jyComRe2,
            reviewImg3: jyComRe3,
            reviewTitle1: "부산 해운대구 센텀피오레",
            reviewTitle2: "부산 해운대구 더샵 센텀스타",
            reviewTitle3: "울산 남구 옥현주공 아파트",
            reviewComment1: "우선 올해 11월 말 준공한 따뜻한 집이에요. 처음에 구축 아파트로 리모델링하면 돈도 돈이지만, 업체를 잘만나야 된다고 하는데 전 운이 좋았어요.  물론7개 업체중에 최종적으로 선택한 업체지만  선택엔 신의한수였습니다.  타업체보다  꼼꼼하시고 젊은 분들이라 감각, 안목, 소통, 공유 정말 뭐하나 불만족인게 없었습니다.",
            reviewComment2: "처음 미팅부터 구체적인 견적서와 정확한 워딩으로 신뢰를 주셨습니다. 다만 다른 업체보다 비싼 견적을 주셔서 중간에 고민의 순간이 있었습니다. 그러나 모호한 견적서를 제시한 다른 업체와 견적에 대해서 좀더 이야기 해보니 각 공정에 추가 비용을 받는게 확인되었습니다. 그러나 사장님께서는 각 공정마다 명확하게 비용을 확인 해주셨습니다. 지금 생각해봐도 이 부분에 다시 한번 사장님께 감사드립니다.",
            reviewComment3: "구축주택(전체 채리색) 이였습니다. 집닥으로 견적보고 어렵게 정했어요. 집안을 밝아보이기 위해 분위기를 전체 화이트로 정했는데 사장님께서 너무 친절하게 모르는 부분도 설명해주시고 여기는 이렇게 하는게 좋겠다고 수정도 해주셔서 감사했습니다. 공사시작전 as기간도 친절하게 설명해주시고 공사도중 계속 체크해주셔서 문제있는 부분은 바로 처리도 잘해주셨어요. 공사끝나고 입주하니 색상이랑 분위기가 제가 생각했던대로 되서 너무 좋았어요.",
            companyIntro : "(주)제이와이 인테리어 디자인은 공간에서\n명품을 만든다라는 목표를 실천하기 위해 \n 끊임없이 노력하고 실천하는 \n인테리어 디자인 전문 기업입니다. ",
            mainIMG: jyMain,
        
        },
        {
            id: 3,
            name: "푸른들인테리어",
            best: "AbC",
            location: "경상남도 김해시 월산로 11",
            number: "010-7487-7410",
            companyLogo: purenLogo,
            companyImg: ["purenCom1.jpg", "purenCom2.jpg", "purenCom3.jpg"],
            reviewImg1: purenComRe1,
            reviewImg2: purenComRe2,
            reviewImg3: purenComRe3,
            reviewTitle1: "대구전원주택 리모델링",
            reviewTitle2: "김해 인테리어/리모델링 월산주공",
            reviewTitle3: "부산 강서구 부산공군관사 인테리어 리모델",
            reviewComment1: "저희집이 복층이라 인테리어 고민이 많았는데 상담도 친절하시고 한방에 해결해주셔서 너무좋았습니다! 마감도 전체적으로 훌륭했구요 다음에 또이용해도 여기만 애용할거같아요~~ 대만족입니다!",
            reviewComment2: "인테리어하는 과정도 저희가 궁금해 하지 않게 설명과 전화도 잘해주시고 조금 더 해주려 하시고 더 챙겨주려 하시는 모습에 감동!! 끝까지 하자나 마무리에 신경써주셨구요~믿고 맡길수 밖에 없지요!!",
            reviewComment3: "오래된 아파트라.. 모두 고쳐 들어왔습니다~^^ 전에 살던 아파트(24평)를 거실확장, 아이방 확장으로 리모델링 할까해서 리모델링 계획을 세우며 여러 업체도 만나보고 실측도 받아보고 했었죠~ 저희 부부에게 딱이다 싶은곳은 푸른들 이였어요!! 실측도 금방 봐주러 오시고 적극적이고 전문가 포스가 팍팍~~ 너무 만족스러웟습니다~",
            companyIntro:"푸른들인테리어는 늘 고객 여러분께 \n 최고의 만족을 드리고자 노력하고 있으며, \n 다년간의 실무경력과 기술을 바탕으로\n최고의 만족을 드리고자 최선을 다하겠습니다.",
            mainIMG: purenMain,

        },
        {
            id: 4,
            name: "주식회사1204디자인",
            best: "Abc",
            location: "광주광역시 광산구 왕버들로 101",
            number: "1666-1204",
            companyLogo: oneLogo,
            companyImg: ["oneCom1.jpg", "oneCom2.jpg", "oneCom3.jpg"],
            reviewImg1: oneComRe1,
            reviewImg2: oneComRe2,
            reviewImg3: oneComRe3,
            reviewTitle1: "LIVING 49평 아파트_165㎡",
            reviewTitle2: "LIVING 31평 아파트_102㎡",
            reviewTitle3: "COMMERCIAL 광주 제과기술학원 280.99㎡_85평",
            reviewComment1: "중문부터 조명까지 다른곳 견적 다섯군데는 했습니다 ㅠㅠ 가격에 치이고 실력에 불안해 결국 1204디자인으로 결정해서 진행하였는데 처음부터 1204로 할껄 여러군데 귀찮게 사람만나가면 했던말들 또 한시간들이 조금 아깝더라구요 ㅎㅎ 인테리어가 잘나와준덕이겠죠 늦은시간 주말에도 답장 바로바로 해주시고 너무 감사했습니다 ^^ 믿고 시공하세요 ^^",
            reviewComment2: "여러 루트를 통해서 얻은 정보를 바탕으로 1204디자인에 일을 맡겼는데. “역시”  전문성에 놀라서 감탄했고~ 작은 것 하나도 놓치지 않는 서비스와 집 주인의 마음을 알아주는 센스에 깊은 감동을 받았습니다.",
            reviewComment3: "평범하지 않은 내부 구조를 최대한 실용적으로 풀어내고자 한 노력이 현장 곳곳에 스며있어요. 덕분에 고객 동선에도 불편함 없는 모던한 인테리어로 완성되어서 너무 만족스럽습니다 감사합니다~. ",
            companyIntro:"기준이 없던 대한민국 인테리어 영역에\n기준을 세우는 정직한 회사, 1204디자인!\n저희가 경험하는 모든 것들에 대해\n솔직하도록 하겠습니다.",
            mainIMG: oneMain,
        },
        {
            id: 5,
            name: "Agio Design",
            best: "aBC",
            location: "서울특별시 서초구 효령로46길 22",
            number: "02-517-5001",
            companyLogo: agioLogo,
            companyImg: ["agioCom1.JPG", "agioCom2.JPG", "agioCom3.JPG"],
            reviewImg1: agioComRe1,
            reviewImg2: agioComRe2,
            reviewImg3: agioComRe3,
            reviewTitle1: "Agio Design 서울 서초구 영어학원",
            reviewTitle2: "Agio Design 서울 강남구 몸 스테이 ",
            reviewTitle3: "Agio Design 서울 은평구 사무실",
            reviewComment1: "학원에 낙서가 너무 많아서 이번에 큰 마음먹고 새로 리모델링 했습니다. 아무래도 학원이라 어린이들이 좋아할 만한 컬러로 알록 달록하게 인테리어를 했는데 너무 귀여워요♡ (그냥 제 취향인듯..ㅎ) 특히 초등학생 저학년들이 난리네여~~ 다음에 확장하면 또 이용하고 싶습니다 적극추천!!!!!!!!!!!!!",
            reviewComment2: "30대가 넘어가고 회사생활 너무 힘들어서 그동안에 틈틈했던 요가학원을 냈습니다 제 손으로 한 첫 사업이라 인테리어 업체를 겁나겁나겁나겁나 까다롭게 보게 되더라고요 근데 제 요청 그대로 만들어주셨습니다ㅜㅜ 너무 이뻐요ㅜㅜ 상담하며 자재 찾아가면서 했는데 만족도 오조오억배에요ㅋㅋㅋㅋ 이제 난 떼부자가 될 일만 남았어요~~~",
            reviewComment3: "회사 사무실이 오래되어 이전하면서 리모델링을 같이했습니다. 분위기 있어서 야근도 쌉가능..(은 뻥ㅋㅋ) 그치만 진짜 분위기는 좋아여 카페에 있는것 같아여~~ 좋습니다 만족",
            companyIntro:"아지오디자인은 공간의 본질을 이해하고\n유지하기 위해 끊임없이 연구하고 고민합니다.\n공간의 본질은 유지한 채\n공간의 가치를 높이는 것을 목표로 합니다.",
            mainIMG: agioMain,
        
        },
        {
            id: 6,
            name: "모노 인테리어",
            best: "aBc",
            location: "서울 마포구 서교동 483-14번지 1층 (서울 마포구 양화로7길 74)",
            number: " 02-3144-7339",
            companyLogo: monoLogo,
            companyImg: ["monoCom1.JPG", "monoCom2.JPG", "monoCom3.JPG"],
            reviewImg1: monoComRe1,
            reviewImg2: monoComRe2,
            reviewImg3: monoComRe3,
            reviewTitle1: "모노인테리어 서울 마포구 강변힐스테이트 아파트 ",
            reviewTitle2: "모노인테리어 서울 동작구 상도현대 아파트 ",
            reviewTitle3: "모노인테리어 서울 관악구 성현동아 아파트",
            reviewComment1: "신발장 인테리어을 맡겼는데 너무 맘에 들어요 중문이 투명해서 집에 들어올 때 넓어보여서 넘나 좋은 것~ㅋㅋㅋㅋㅋㅋㅋ  간접등이 은은해서 이쁨\^^/",
            reviewComment2: "주방 인테리어 올해 10월에 결혼한 신혼부부임돵~~ 주방은 요리를 해야하니까 넓었으면 좋겠는데.. 집이 좁아가지고 어렵겠다 생각했는데 세상에 모노인테리어에서 너무 이쁘게 만들어주셔서 행복해서 매립등 조명도 있고 설거지 할 때 간접등도 있어서 어둡지 않은게 맘에 쏙 들어욤",
            reviewComment3: "40대 평범한 주부입니다 아이가 있어서 1층 집으로 마련했어요~~ 처음에 베란다 확장을 하려고 했는데 1층이라 사생활보호가 어려울까봐 확장하지 않고 인테리어했는데 만족해영~ 포세린 타일 진짜 너무 이쁩니다 여러분도 이거 하세요~~~~~ ",
            companyIntro :"모노인테리어는 라이프스타일을 고려하여\n편안하고 개성있는 공간을\n차별화된 공간연출과 합리적인 가격으로\n여러분들께 제공하고 있습니다.",
            mainIMG: monoMain,
        
        },
        {
            id: 7,
            name: "다원 디자인",
            best: "abc",
            location: "서울시 강남구 테헤란로 16길 다원빌딩 12F",
            number: "02-3468-5800",
            companyLogo: dawonLogo,
            companyImg: ["dawonCom1.JPG", "dawonCom2.JPG", "dawonCom3.JPG"],
            reviewImg1: dawonComRe1,
            reviewImg2: dawonComRe2,
            reviewImg3: dawonComRe3,
            reviewTitle1: "다원디자인 서울 한남동 무신사 쇼룸 ",
            reviewTitle2: "다원디자인 서울 Green Cross I-MED ",
            reviewTitle3: "다원디자인 서울 아트 박물관 ",
            reviewComment1: "정말 어렵게 고심해서 고른 인테리어 업체입니다. 세련된 디자인부터 저희 무신사의 색깔과 맞을 수 있게 디자인을 부탁드렸는데 만족스럽게 나왔습니다. 직원들뿐아니라 고객님들의 마음까지 사로 잡을 수 있는 디자인이라 좋았습니다.",
            reviewComment2: "병원은 화이트가 기본 바탕이 되는 곳이 많아서 다 비슷 비슷해 보였는데 다원 디자인은 컬러를 조화롭게 써서 병원이 더욱 활기 차 보였습니다. 전체적으로 디자인이 모서리 부분 없이 둥글게 빠져서 더 조화로운 느낌입니다. 감사합니다",
            reviewComment3: "LED 화면으로 크고 화려하게 작품을 전시할 수 있어서 좋았습니다. 조명까지 섬세하게 신경을 써 주셨는데 왜 사람들이 이 곳을 추천하고 인기가 많은지 알겠더라고요 이번 리모델링으로 LED영상 음악 전시를 더 멋스럽게 소화할 수 있을 것 같아서 기대가 됩니다",
            companyIntro:"다원은 “창조와 열정”이라는 모토로,\n국내 디자인 업계 최고로서 \n공간의 창의성과 고객님들의 \n만족감을 증대시켜 왔습니다.",
            mainIMG: dawonMain,
        
        },
        {
            id: 8,
            name: "이다스 건축 인테리어",
            best: "abC",
            location: "서울 강남구 도산대로 68길 26 IDAS 빌딩 1F/2F",
            number: "+82-2-543 6566",
            companyLogo: idasLogo,
            companyImg: ["idasCom1.JPG", "idasCom2.JPG", "idasCom3.JPG"],
            reviewImg1: idasComRe1,
            reviewImg2: idasComRe2,
            reviewImg3: idasComRe3,
            reviewTitle1: "이다스컨축인테리어 경기도 성남시 분당구 판교",
            reviewTitle2: "이다스컨축인테리어 서울 용산구 요상동 파크 타워 ",
            reviewTitle3: "이다스컨축인테리어 서울 동대문구 전농동 레미안 아파트 리모델링",
            reviewComment1: "부모님께 손 벌리지 않고 혼자 열심히 모아서 드디어 제 카페를 개업했습니다! 그래서 개업 할 건물부터 꼼꼼히 봤고 당연히 인테리어도 정말 고민했습니다 이다스 건축 인테리는 인테리어와 함께 건물도 보고 제일 만족스럽게 인테리어를 뽑아주셨습니다 정말 만족하고 원하는대로 나와서 기쁩니다 최고에여!",
            reviewComment2: "처음에 여기 유명한 곳 같아서 대기가 길어질까 공사가 어떻게 들어갈까 너무 고민했습니다 근데 막상 진행하니까 빠르게 잘 해주셔서 만족합니다 따뜻한 분위기를 원했는데 그 부분도 잘 살려주셔서 기분이 좋습니다",
            reviewComment3: "집 리모델링 하면서 부엌에 가장 신경을 써달라고 했습니다. 와이프가 요리하는걸 좋아하거든요^^ 저기서 맛있는 요리를 저한테 해 줄 생각에 너무 행복해하네요~~^^(신혼 이해바람) 그리고 우리 부부가 블랙과 화이트를 좋아해서 집도 블랙 화이트로 꾸미고 싶었는데 말 그대로 나와서 좋습니다",
            companyIntro:"완벽한 공간의 완성을 목표로 \n‘생각을 현실로 만드는 이다스’라는 모토 아래\n여러분들이 상상하는 모든 것들을\n현실에서 만날 수 있도록 최선을 다할 것입니다.",
            mainIMG: idasMain,
        
        },
        {
            id: 9,
            name: "다솔디자인",
            best: "abC",
            location: "서울시 서초구 명달로 104, 모차르트빌딩 7F",
            number: "02.535.3431  02.535.3432   070.4279.0800",
            companyLogo: dasoleLogo,
            companyImg: ["dasoleCom1.JPG", "dasoleCom2.JPG", "dasoleCom3.JPG"],
            reviewImg1: dasoleComRe1,
            reviewImg2: dasoleComRe2,
            reviewImg3: dasoleComRe3,
            reviewTitle1: "다솔인테리어 서울 메이드영 성형외과 대기실 환경개선",
            reviewTitle2: "다솔인테리어 (주)한컴라이프케어 기술 연구소리모델링",
            reviewTitle3: "다솔인테리어 서울 기린성형외과 8F 대기실 리모델링",
            reviewComment1: "이런 글 안쓰는 사람인데 처음 써 봐요 다솔디자인에 의뢰한 후 직원들이며, 저희 메이드영 성형외과를 방문해주시는 모든 분들이 분위기가 전체적으로 고급지다고 만족해했습니다. 올 리모델링이라 기간이 오래 걸릴까 걱정을 많이 했는데 예상보다 빨리 끝내주셨고 꼼꼼하게 마감처리 해주셔서 매우 만족하고 있어요 다음에 리모데링을 한다면 또 맡기고 싶습니다 너무 만족스러워요",
            reviewComment2: "사무실이 갑갑했었는데 다솔인테리어에 리모델링 의뢰 했으면 분위기가 화사했으면 했고, 좀 더 집중이 잘되는 연구소이이길 바랬습니다. 근데 저희가 원하는 조건을 그대로 완성시켜 주셔서 전 좋았습니다 만족스러워요 사무실 들어가서 일 할 맛이 납니다 ",
            reviewComment3: "첫 상담 연락부터 매우 만족이였습니다 병원 리모델링 잘 못하면 분위기 망하고 사람들한테 이미지 나빠지면 정말 골치 아팠는데 앓던 이 뽑았습니다 가격도 마음에 들고 정말 만족해요 상담부터 친절히 해주시고 직원들 휴식공간도 더 개선 할 수 있어서 좋습니다 ",
            companyIntro:"DESIGN YOUR LIFE!\n고객의 필요, 입장, 사용자의 공간 이해, 상식으로부터\n시대의 트렌드와 조합한 공간 연출 서비스!\n고객의 삶과 소통하는 공간을 연출하는 다솔!",
            mainIMG: dasoleMain,

        },
    ])


    const value = {
        state: { comment, question, reciept, score, },
        action: { setComment, setQuestion, setReciept, setScore, }
    }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );

})

const { Consumer: DataConsumer } = DataContext;

export { DataConsumer, DataProvider };

export default DataContext;