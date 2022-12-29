import { createContext, useState } from "react";

// 리뷰 card 이미지
import evianComRe1 from "../img/evianComRe1.jpg";
import evianComRe2 from "../img/evianComRe2.jpg";
import evianComRe3 from "../img/evianComRe3.jpg";
import evianComRe4 from "../img/evianComRe4.jpg";
import evianComRe5 from "../img/evianComRe5.jpg";
import evianComRe6 from "../img/evianComRe6.jpg";

import jyComRe1 from "../img/jyComRe1.JPG";
import jyComRe2 from "../img/jyComRe2.JPG";
import jyComRe3 from "../img/jyComRe3.JPG";
import jyComRe4 from "../img/jyComRe4.JPG";
import jyComRe5 from "../img/jyComRe5.JPG";
import jyComRe6 from "../img/jyComRe6.JPG";

import purenComRe1 from "../img/purenComRe1.JPG";
import purenComRe2 from "../img/purenComRe2.jpg";
import purenComRe3 from "../img/purenComRe3.JPG";
import purenComRe4 from "../img/purenComRe4.JPG";
import purenComRe5 from "../img/purenComRe5.JPG";
import purenComRe6 from "../img/purenComRe6.JPG";

import oneComRe1 from "../img/oneComRe1.jpg";
import oneComRe2 from "../img/oneComRe2.jpg";
import oneComRe3 from "../img/oneComRe3.jpg";
import oneComRe4 from "../img/oneComRe4.jpg";
import oneComRe5 from "../img/oneComRe5.jpg";
import oneComRe6 from "../img/oneComRe6.jpg";

import agioComRe1 from "../img/agioComRe1.JPG";
import agioComRe2 from "../img/agioComRe2.JPG";
import agioComRe3 from "../img/agioComRe3.JPG";
import agioComRe4 from "../img/agioComRe4.JPG";
import agioComRe5 from "../img/agioComRe5.JPG";
import agioComRe6 from "../img/agioComRe6.JPG";

import monoComRe1 from "../img/monoComRe1.JPG";
import monoComRe2 from "../img/monoComRe2.JPG";
import monoComRe3 from "../img/monoComRe3.JPG";
import monoComRe4 from "../img/monoComRe4.JPG";
import monoComRe5 from "../img/monoComRe5.JPG";
import monoComRe6 from "../img/monoComRe6.JPG";

import dawonComRe1 from "../img/dawonComRe1.JPG";
import dawonComRe2 from "../img/dawonComRe2.JPG";
import dawonComRe3 from "../img/dawonComRe3.JPG";
import dawonComRe4 from "../img/dawonComRe4.JPG";
import dawonComRe5 from "../img/dawonComRe5.JPG";
import dawonComRe6 from "../img/dawonComRe6.JPG";

import idasComRe1 from "../img/idasComRe1.JPG";
import idasComRe2 from "../img/idasComRe2.JPG";
import idasComRe3 from "../img/idasComRe3.JPG";
import idasComRe4 from "../img/idasComRe4.JPG";
import idasComRe5 from "../img/idasComRe5.JPG";
import idasComRe6 from "../img/idasComRe6.JPG";

import dasoleComRe1 from "../img/dasoleComRe1.JPG";
import dasoleComRe2 from "../img/dasoleComRe2.JPG";
import dasoleComRe3 from "../img/dasoleComRe3.JPG";
import dasoleComRe4 from "../img/dasoleComRe4.JPG";
import dasoleComRe5 from "../img/dasoleComRe5.JPG";
import dasoleComRe6 from "../img/dasoleComRe6.JPG";



// 회사 로고
import evianLogo from "../img/evianLogo.png";
import jyLogo from "../img/jyLogo.png";
import purenLogo from "../img/purenLogo.png";
import oneLogo from "../img/oneLogo.png";
import agioLogo from "../img/agioLogo.png";
import monoLogo from "../img/monoLogo.jpg";
import dawonLogo from "../img/dawonLogo.png";
import idasLogo from "../img/idasLogo.png";
import dasoleLogo from "../img/dasoleLogo.jpg";

// 회사 메인 IMG
import evianMain from "../img/evianMain.JPG";
import agioMain from "../img/agioMain.JPG";
import dasoleMain from "../img/dasoleMain.JPG";
import dawonMain from "../img/dawonMain.JPG";
import idasMain from "../img/idasMain.JPG";
import jyMain from "../img/jyMain.JPG";
import monoMain from "../img/monoMain.JPG";
import oneMain from "../img/oneMain.JPG";
import purenMain from "../img/purenMain.JPG";

import { useNavigate } from "react-router-dom";
import ProductInsertComment from "../components/ProductInsertComment";

// createContext
const DataContext = createContext();

const DataProvider = ({ children }) => {
  // Portfolio & Product
  const [comment, setComment] = useState([
    {
      marketId: 1,
      commentId: 1,
      name: "홍길동",
      text: "좋은 업체입니다",
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
      title: "건물 유형",
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
    },
  ]);

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
      reviewImg4: evianComRe4,
      reviewImg5: evianComRe5,
      reviewImg6: evianComRe6,
      reviewTitle1: "아기자기 카페 리모델링",
      reviewTitle2: "감성카페같은 내방",
      reviewTitle3: "아기 2명 둔 엄맙니다",
      reviewTitle4: "서울에 사는 결혼 n년차쀼에여",
      reviewTitle5: "시부모님과 함께 살고 있습니다",
      reviewTitle6: "경기도 근교에 있는 원데이클래스 공방",
      reviewComment1:
        "기존에 있던 카페를 인수했었는데 중간 중간에 맘에 안드는 부분이 있더라고요 전 좀 따뜻한 느낌을 원했는데 그전에는 제 스타일이 아니라 카페에 정이 안가서 이번에 우드로 새로 리모델링 했습니다 제가 원하던 느낌대로 나와서 일단 너무 만족해여 나무 데크 하고싶었는데 관리가 어려울까봐 걱정했더니 그 부분을 더 상세히 봐주시고 관리 쉬운 데크를 골라주셔서 좋았습니다!! 이 부분 진짜 대만족이고요 다음에 2호점 내면 또 의뢰하고 싶어요",
      reviewComment2:
        "이제 갓 대학생된 푸릇한 대학생이에요 본가랑 학교가 멀어서 할머니집에서 생활하는데 할머니집이 오래되기도 해서 이번에 아버지께서 인테리어 새로 해주셨어요 그러면서 귀여운 제방도 생겼답니다 전에 친구네 자취방 놀러갔다가 그 느낌 내고싶어서 관리팀장님께 사진보여주면서 말했는데 상상이상이에요ㅜ정말 감성 카페같지 않나여???ㅋㅋㅋㅋㅋㅋ 이 방에서 공부하면 a+도 받을 수 있을 것 같고 남친도 바로 생길것 같아옄ㅋㅋ  제 방뿐만 아니라 할머니도 만족하세요 연세가 많으셔서 걱정했는데 방문 턱이랑 계단도 이번에 없앴습니다 요즘은 본가보다 할머니집이 더 좋아요 최곱니다",
      reviewComment3:
        "이번에 영끌해서 집 장만했어요..ㅎㅎㅎㅎㅎㅎㅎㅎ아기들이 아직 어려서 전체적으로 리모델링할때 손잡이부터, 방문, 턱, 베란다 모두 안전이 제일 중요했고 각진 부분이나 모서리가 없는 걸 원해서 아치형으로 문을 만들었어요 다른집에 차별되는 점이 너무 이쁘고 좋아요 부엌은 ㄷ자 주방으로 아일랜드 식탁 아래 수납공간까지 완벽합니다 맘에 들어요~",
      reviewComment4:
        "저희 집은 주택이지만 1층만 사용하는데 집 자체가 오래된 집이라 리모델링 걱정을 많이 했어여 집도 그렇게 넓은 편이 아니라서 걱정을 좀 했어여.. 전 좀 이쁜 집이 좋거든여 근데 정팀장님이 조명을 잘 살려주셔서 디테일이 이쁜 집이 되었어용  집 현관에서 들어오면 부엌이 보이고 냉장고가 바로 보여서 집 색깔과 안맞아서 안이뻤는데 정팀장님이 가벽까지 이쁘게 세워주셨고 식물까지 골라주셨어요 덕분에 냉장고가 다 가려지고 더 화사해졌어여 진자 대 만족이여 ",
      reviewComment5:
        "이번에 집 넓히면서 시어머니와 함께 살기로 했습니다 아무래도 어머님 연세가 있으셔서 방문틀에 걸려 넘어지기라도 할까 걱정을 했는데 틀을 없애고 방문도 미닫이로 바꿔서 공간이 더 넓어진 것 같아요 어머니 방은 화장실과 가까운 방으로 했더니 밤에 화장실 다녀오기도 편하시다고 하네요  화장실은 미끄럼 방지타일과 손잡이도 함께 달았더니 더 좋아하십니다 자녀들은 다 나가살아서 저희끼리 잘 살아보겠습니다 감사합니다",
      reviewComment6:
        " 원데이클래스 공방겸 디저트를 팔 공간을 에비앙에 맡겼습니다. 공방이다 보니 사람들이 왔다갔다하는 공간과 제가 따로 재료를 준비할 공간 요리할 공간 이렇게 공간 분활이 잘 되길 바랬습니다. 제 생각대로 어느정도 공간이 나온것 같아서 좋습니다 ",
      companyIntro:
        "토탈 인테리어 전문업체로서 \n합리적인 가격, 맞춤 디자인, 실용성까지 고려한\n인테리어로 고객님이 원하시는 디자인으로\n맞춤 시공 해드립니다.",
      mainIMG: evianMain,
      companyVideo:"shopVideo1.mp4",

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
      reviewImg4: jyComRe4,
      reviewImg5: jyComRe5,
      reviewImg6: jyComRe6,
      reviewTitle1: "50평대 아파트 리모델링",
      reviewTitle2: "5여의도 k사무실",
      reviewTitle3: "박가네 한정식집",
      reviewTitle4: "성수동 카페",
      reviewTitle5: "수지 라운지 bar",
      reviewTitle6: "경기 반지하 짐",
      reviewComment1:
        "집에 사람이 많아서 아침마다 화장실때문에 난리였는데 이번에 리모델링하면서 전에 호텔에서 봤던 세면대2개 두는 화장실을 말씀드렸더니 호텔처럼 저희 집 화장실을 꾸며주셨어요 리모델링하고 1달 정도? 살고있는데 아직까지 하자는 없습니다.아 단점은 대리석으로 했더니 물건을 떨어트리면 물건이 아작이 나더라고요...휴 그래도 대리석이 안깨져서 그건 다행이지만 조심해서 살아야할 것 같아요",
      reviewComment2:
        "기존에 있던 사무실에서 이사하면서 자잘하게 손봤습니다 일단 탁 트인 창이 너무 만족스럽습니다. 기존에 창은 창을 열 수도 없는데 지금의 반정도되는 창이라 답답했던 감이 있었는데 지금은 확 트여서 제 마음이 다 시원합니다. 전체적으로 매립등으로 되어있는데 가끔 포인트로 있는 조명이 이쁩니다 ",
      reviewComment3:
        "30년 전통의 한정식집입니다. 여러 귀빈, 맞선, 상견례등등 장소로 많이 찾으십니다. 최근에는 외국인들도 많이 오시지요 기존에 있던 좌식 테이블에 손님들이 불편함을 많이 느끼시기에 좌식테이블임에도 불편하지 않게 리모델링했습니다. 하면서 기와도 새로 갈았습니다. 만족합니다",
      reviewComment4:
        "성수동에 위치한 카페입니다. 주변에 옷집이나 편집숍이 많아서 저희가게가 조금 튀길 원했는데 잘 나왔습니다. 상담부터 시공과정까지 틈틈히 소통해가며 현장 수시방문하여 점검, 케어해 주셨습니다. 사소한 요구사항까지 친절하시고 꼼꼼하게 진행해주시고 원하는 사항을 최대한 반영해 작업해 주셔서 좋았습니다. 다음에 또 의뢰 맡길 의사가 매우 있습니다",
      reviewComment5:
        "리모델링할때 층고가 높아서 이쁘게 천장을 살리고 싶었습니다 원하는대로 잘 만들어주셔서 너무 만족합니다. 공간마다 분위기가 달랐으면 좋겠다고 했더니 아예 페인트 색깔로 분위기를 다 바꿔주셔서 무지 만족합니다!!! 그리고 저희 바에 고층에 있는데 그 부분도 잘 살릴 수 있게 통창으로 바꿔주신것도 마음에 쏙 듭니다 ",
      reviewComment6:
        "지하라 공기 순환이 걱정이 많았어요 근데 천장을 노출로 하면서 공기 순환도 잘 될 수 있도록 만들어주셨습니다~~~~~ 회원님들 샤워장부터 필라테스실까지 깔끔하게 만들어주셨고요~ 곧 헬스장 개원하는데 회원님들도 좋아해서 많이 올 것 같아요~~~~~~ 감사합니다~~~~~~~",
      companyIntro:
        "(주)제이와이 인테리어 디자인은 공간에서\n명품을 만든다라는 목표를 실천하기 위해 \n 끊임없이 노력하고 실천하는 \n인테리어 디자인 전문 기업입니다. ",
      mainIMG: jyMain,
      companyVideo:"shopVideo2.mp4",

    },
    {
      id: 3,
      name: "푸른들인테리어",
      best: "AbC",
      location: "경상남도 김해시 월산로 11",
      number: "010-7487-7410",
      companyLogo: purenLogo,
      companyImg: ["purenCom1.jpg", "purenCom2.JPG", "purenCom3.jpg"],
      reviewImg1: purenComRe1,
      reviewImg2: purenComRe2,
      reviewImg3: purenComRe3,
      reviewImg4: purenComRe4,
      reviewImg5: purenComRe5,
      reviewImg6: purenComRe6,
      reviewTitle1: "대형카페 리모델링",
      reviewTitle2: "개인 작은 옷가게 후기요~~",
      reviewTitle3: "카페같은 저희집 주방이예요ㅎㅎㅎ",
      reviewTitle4: "제 카페지만 넘 예쁘네요^0^",
      reviewTitle5: "여기가 일본인지 한국인지ㅎㅎ",
      reviewTitle6: "세상에서 젤 귀여운 빵가게><",
      reviewComment1:
        "그동안 번돈 카페 인테리어에 다때려 박아야 해서 진짜 진짜 고민이 많았는데 상담도 친절하시고 한방에 해결해주셔서 너무좋았습니다! 마감도 전체적으로 훌륭했구요 사진보면 아시겠지만, 소품까지 너무 잘 어우러지게 해주셨습니다. 다음에 또 이용해도 여기만 애용할거같아요~~ 대만족입니다!",
      reviewComment2:
        "개인옷가게라 저희가 파는 옷이랑 분위기가 너무 다르면 곤란한데 인테리어하는 과정도 저희가 궁금해 하지 않게 설명과 전화도 잘해주시고 조금 더 해주려 하시고 더 챙겨주려 하시는 모습에 감동!! 끝까지 하자나 마무리에 신경써주셨구요~ 이래서 푸른들 인테리어는 믿고 맡길수 밖에 없지요!!",
      reviewComment3:
        "오래된 아파트라.. 모두 고쳐 들어왔습니다~^^ 전에 살던 아파트(24평)를 거실확장, 아이방 확장으로 리모델링 할까해서 리모델링 계획을 세우며 여러 업체도 만나보고 실측도 받아보고 했었죠~ 저희 부부에게 딱이다 싶은곳은 푸른들 이였어요!! 실측도 금방 봐주러 오시고 적극적이고 전문가 포스가 팍팍~~ 너무 만족스러웟습니다~",
      reviewComment4:
        "주변에 저희가게 밖에 안보이네요 ㅎㅎㅎㅎㅎ 진짜 너무 만족 주변 카페며 빵집이며 솔직히 저희가게 안보일까봐 너무 걱정 됬는데 오히려 저희가게만 보이네요 ㅎㅎㅎ 너무 좋아용!! 다들 지나가다가 멈춰서서 한 번씩 보시는데 너~~~~~~~~~~무 뿌듯한거 있죠?ㅎㅎㅎ 푸른들사장님 감사합니다~~",
      reviewComment5:
        "진짜 뻥안치고 일본인지 한국인지 헷갈릴 정도네요 ㅎㅎㅎ 일식집으로 그느낌 낭낭하게 내고 싶었는데 진짜 일본으로 만들어 버릴줄은.. 주변 지인들도 너무 잘나왔다고 한마디씩해주는데 정말 잘 선택했다 싶더라구요 너무 잘나와서 감사드립니다 가게가 예뻐서 사람들이 많이 올것같아서 기대가 되네요",
      reviewComment6:
        "쇼핑몰 가운데 위치하고 있어서 고객들 발걸음 붙잡으려면 가게가 잘보여야 하는데 넘 잘보여서 만족!! 다들 쇼핑하시다가 앉아서 드시면서 가게 예쁘다하시는 말을 들을때마다 괜시리 제가 직접 인테리어 한것마냥 너무 뿌듯하더라구요 푸른들 초ㅣ고예요! 주변에 인테리어 하는 사람있으면 무조건 푸른들 추천할꺼예요",
      companyIntro:
        "푸른들인테리어는 늘 고객 여러분께 \n 최고의 만족을 드리고자 노력하고 있으며, \n 다년간의 실무경력과 기술을 바탕으로\n최고의 만족을 드리고자 최선을 다하겠습니다.",
      mainIMG: purenMain,
      companyVideo:"shopVideo3.mp4",

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
      reviewImg4: oneComRe4,
      reviewImg5: oneComRe5,
      reviewImg6: oneComRe6,
      reviewTitle1: "49평 아파트리모델링입니다",
      reviewTitle2: "진짜 최고최고!!!! ",
      reviewTitle3: "1204디자인 감사합니다ㅜㅜ",
      reviewTitle4: "경치랑 잘녹아드는 카페~",
      reviewTitle5: "던킨 도넛 리모델링",
      reviewTitle6: "개인 와인바 완성><!!!!!",
      reviewComment1:
        "중문부터 조명까지 다른곳 견적 다섯군데는 했습니다 ㅠㅠ 가격에 치이고 실력에 불안해 결국 1204디자인으로 결정해서 진행하였는데 처음부터 1204로 할껄 여러군데 귀찮게 사람만나가면 했던말들 또 한시간들이 조금 아깝더라구요 ㅎㅎ 인테리어가 잘나와준덕이겠죠 늦은시간 주말에도 답장 바로바로 해주시고 너무 감사했습니다 ^^ 믿고 시공하세요 ^^",
      reviewComment2:
        "여러 루트를 통해서 얻은 정보를 바탕으로 1204디자인에 일을 맡겼는데. “역시”  전문성에 놀라서 감탄했고~ 작은 것 하나도 놓치지 않는 서비스와 의뢰인 마음을 알아주는 센스에 깊은 감동을 받았습니다. 작은 카페라서 디테일에 진짜 신경을 많이 썻거든요.. 쓴만큼 그대로 나온것같아서 만족스럽습니다.",
      reviewComment3:
        "평범하지 않은 내부 구조를 최대한 실용적으로 풀어내고자 한 노력이 현장 곳곳에 스며있어요. 덕분에 고객 동선에도 불편함 없는 모던한 인테리어로 완성되어서 감사합니다~. 가게 잘되서 다음에 확장하게 되면 그때도 1204디자인을 이용할 계획입니다. 이번 공사로 정말 믿음가는 업체라고 생각이 들었거든요. 다들 1204디자인에서 하세요~~~~~ ",
      reviewComment4:
        "최대한 경관이랑 잘녹아드는 인테리어를 원했는데 딱! 맡게 해주셨습니다. 제가 말주변이 없는편이라 후기를 길게 못쓰겠지만 디테일까지 챙기시려면 1204디자인 추천합니다.작은 돌 하나까지 보는 디테일에 이래서 유명하구나.. 전문가는 전문가구나 싶은 생각이 팍팍 들었습니다. 후기도 보니까 여러 컨셉으로도 많이 하셨더라구요. 1204디자인 적극 추천합니다^^",
      reviewComment5:
        "던킨도넛 리모델링 맡겼어요. 본사랑 연결된 업체가 너무 맘에 안들더라구요 진짜 리모델링 여기저기 알아보고 본사에 사정사정해서 1204디자인에 맡겼는데 다른데서 볼수 없는 세심한부분이 너무 좋았어요 1204디자인에서 한번 하면 이제 다른 업체에 인테리어 못맡길것같아요ㅠㅠ 사장님 책임져요!!ㅋㅋㅋㅋ .",
      reviewComment6:
        "취미생활로 작은 개인 와인바를 차리고 싶었어요. 살짝 러블리함도ㅎㅎ 따로 취미 겸사 지인들이랑 함께 즐기기 딱인 공간을 원했는데 아기자기하게 만들어주셔서 넘 만족스러워요 다음에 취미를 넘어서 가게를 차리게 되면 그때도 1204디자인에서 할껍니다. 그러니까 꼭 오래오래 번창하세요~~~~~~~",
      companyIntro:
        "기준이 없던 대한민국 인테리어 영역에\n기준을 세우는 정직한 회사, 1204디자인!\n저희가 경험하는 모든 것들에 대해\n솔직하도록 하겠습니다.",
      mainIMG: oneMain,
      companyVideo:"shopVideo4.mp4",


    },
    {
      id: 5,
      name: "아지오 디자인",
      best: "aBC",
      location: "서울특별시 서초구 효령로46길 22",
      number: "02-517-5001",
      companyLogo: agioLogo,
      companyImg: ["agioCom1.JPG", "agioCom2.JPG", "agioCom3.JPG"],
      reviewImg1: agioComRe1,
      reviewImg2: agioComRe2,
      reviewImg3: agioComRe3,
      reviewImg4: agioComRe4,
      reviewImg5: agioComRe5,
      reviewImg6: agioComRe6,
      reviewTitle1: "스터디카페는 아지오~~",
      reviewTitle2: "요가학원 인테리어 맡겼어요!! ",
      reviewTitle3: "무난한사람의 무난한 실내 인테리어ㅎㅎㅎㅎ",
      reviewTitle4: "리모델링 전문업체에서 하세요!!",
      reviewTitle5: "적극 추천해용><!!!!!",
      reviewTitle6: "고민만 하지말구 아지오 고고",
      reviewComment1:
        "공부하는 공간이니 가볍지않은.. 살짝은 무거운 느낌나는 스터디카페를 차리고 싶었는데 업체 후기를 살펴보니 제가 원하는 느낌으로 몇번 해보신 경험이 있어서 더욱 믿고 맡길수 있었습니다. 덕분에 이렇게 좋은 결과까지 얻었네요 ㅎㅎ 도움되시라 사진도 남겨요!!",
      reviewComment2:
        "제 손으로 하는 첫 가게라 정말 많이 신경쓰였어요. 취미로 하던 요가를 직접 하려니까 제가 생각못한 부분까지도 알려주셔서 너무 감사했습니다. 덕분에 제가 생각했던것보다 차분하고 경건한 느낌 가득!! 더 좋은 결과가 나온것같아요^^!! ",
      reviewComment3:
        "리모델링 맡겼는데 너무 튀지않고 무난한데 그치만 누가봐도 예쁜 결과물을 얻고싶었어요. 결과는 대만족, 남들이 보면 조금 심심하다고 생각이 들수도 있을것같긴하지만 전 무난한게 좋아서 ㅎㅎㅎ 저처럼 무난한거 좋아하시는분들에게 추천합니다~~",
      reviewComment4:
        "제가 미니멀 리스트라 최소한의 인테리어를 원했는데 제 니즈를 진짜 정확히 파악하시고 딱 맞는 인테리어를 해주셨습니다. 너무 감사드려요~~ 고민하시는분들 상담 한번 받아보시면 고민 사라지실꺼예요 저도 그랬거든요 ㅎㅎㅎㅎ",
      reviewComment5:
        "실내 인테리어을 맡겼는데 너무 맘에 들어요 중문이 투명해서 집에 들어올 때 넓어보여서 넘나 좋은 것~ㅋㅋㅋㅋㅋㅋㅋ  간접등이 은은해서 이쁨^^/ 이렇게 예쁜데 여기서 안하고 다른데서 한다는건 있을수 없는 일이쥬ㅎㅎ",
      reviewComment6:
        "간단한 샌드위치랑 커피를 파는 카페를 오픈준비중인 1인입니다. 심플한거 좋아하지만, 살짝 귀여운 포인트가 있었으면 좋겠다고 생각했는데 저보다 더 적극적으로 인테리어 구상해주셔서 너무 좋았습니다. 후기에 사장님이 너무 좋으시단 말도 많았는데 시공하면서 느꼈습니다ㅎㅎ.",
      companyIntro:
        "아지오디자인은 공간의 본질을 이해하고\n유지하기 위해 끊임없이 연구하고 고민합니다.\n공간의 본질은 유지한 채\n공간의 가치를 높이는 것을 목표로 합니다.",
      mainIMG: agioMain,
      companyVideo:"shopVideo5.mp4",

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
      reviewImg4: monoComRe4,
      reviewImg5: monoComRe5,
      reviewImg6: monoComRe6,
      reviewTitle1: "아파트 리모델링 후기남겨요>< ",
      reviewTitle2: "저희가게 많이 와주세요!!",
      reviewTitle3: "진짜 장난아니네요",
      reviewTitle4: "학원 리모델링 후기용",
      reviewTitle5: "모노 인테리어에서 했어요~~ㅎㅎ",
      reviewTitle6: "빈티지한 느낌도 잘살려서 해주셨어요",
      reviewComment1:
        "아파트 인테리어 올해 10월에 결혼한 신혼부부임돵~~ 주방은 요리를 해야하니까 넓었으면 좋겠는데.. 집이 좁아가지고 어렵겠다 생각했는데 세상에 모노인테리어에서 너무 이쁘게 만들어주셔서 행복해서 매립등 조명도 있고 설거지 할 때 간접등도 있어서 어둡지 않은게 맘에 쏙 들어욤",
      reviewComment2:
        "리모델링 하고 이제 오픈일 몇일 안남았는데 너무 예뻐서 벌써부터 동네방네 자랑하고 있어요ㅎㅎ 너무 인테리어도 예쁘게 잘나왔고, 어디가서도 인테리어 추천 무조건 모노인테리어밖에 추천 안합니다 ㅋㅋㅋㅋ 다음에도 여기서 할꺼니까 계속 영업해주세요~~ ",
      reviewComment3:
        "회사 사무실이 오래되어 이전하면서 리모델링을 같이 했습니다. 바빠서 공사 진행상황이라던지 잘 신경을 못썼는데 너무 잘되서 기분이 좋네요. 분위기 있어서 야근도 쌉가능..(은 뻥ㅋㅋ) 그치만 진짜 분위기 좋고 최고예요 경치좋은 카페에 있는것 같은 느낌!!!!! 직원들 반응도 너무 좋고 저도 너무나 만족스럽네요ㅎㅎㅎ",
      reviewComment4:
        "학원에 낙서가 너무 많아서 이번에 큰 마음먹고 새로 리모델링 했습니다. 아무래도 학원이라 어린이들이 좋아할 만한 컬러로 알록 달록하게 인테리어를 했는데 너무 귀여워요♡ (그냥 제 취향인듯..ㅎ) 특히 초등학생 저학년들이 난리네여~~ 다음에 확장하면 또 이용하고 싶습니다 적극추천!!!!!!!!!!!!!",
      reviewComment5:
        "여러업체 후기를 비교해보면서 저희랑 어울리는 업체가 어딜지 많이 고민했습니다. 후기 보니까 여러가지 컨셉으로도 많이 진행 해보셔서 제가 원하는 느낌도 잘살려주실것같아서 선택하게 되었습니다~~ 완전 대만족! 앞으로 장사 잘될일만 남았네요 감사합니다 담에 사장님 가게오시면 서비스 드릴께요 꼭 와주세요ㅎㅎㅎ ",
      reviewComment6:
        "30대가 넘어가고 회사생활이 너무 힘들기도 하고, 그동안 공부해왔던 와인가게를 오픈하게 되었습니다. 제 손으로 한 첫 사업이라 인테리어 업체를 겁나겁나겁나겁나 까다롭게 보게 되더라고요 근데 제 요청 그대로 만들어주셨습니다!! 빈티지한 느낌을 많이 살리고 싶어서 상담할때 자세히 물어봤는데 귀찮아하시는것도 없이 잘해주셔서 맡기게되었어요. 결과물도 정말 만족스럽구요. 감사합니다",
      companyIntro:
        "모노인테리어는 라이프스타일을 고려하여\n편안하고 개성있는 공간을\n차별화된 공간연출과 합리적인 가격으로\n여러분들께 제공하고 있습니다.",
      mainIMG: monoMain,
      companyVideo:"shopVideo6.mp4",

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
      reviewImg4: dawonComRe4,
      reviewImg5: dawonComRe5,
      reviewImg6: dawonComRe6,
      reviewTitle1: "다원에 대형카페 시공 맡겼어요",
      reviewTitle2: "정말 예쁘게 잘됬어요~~",
      reviewTitle3: "저의 첫 카페 오픈^^",
      reviewTitle4: "다음에도 여기서 할꺼예요",
      reviewTitle5: "진짜 전문업체 맞네요",
      reviewTitle6: "고민하지말고 다원에 맡기세요",
      reviewComment1:
        "정말 어렵게 고심해서 고른 인테리어 업체입니다. 세련된 디자인부터 저희 무신사의 색깔과 맞을 수 있게 디자인을 부탁드렸는데 만족스럽게 나왔습니다. 직원들뿐아니라 고객님들의 마음까지 사로 잡을 수 있는 디자인이라 좋았습니다. 인테리어가 좋으니 출근할때 발걸음도 너무 가벼운것 같네요.",
      reviewComment2:
        "후기에 대형카페시공한 후기가 많아서 개인카페도 해주시려나... 해주시면 좋겠다... 혼자 진짜 많이 생각하면서 걱정반..상담했는데 너무 친절하게 잘해주시기도 하고 작은 카페라고 대충하지 않고 꼼꼼하게 해주셔서 감사합니다. 인테리어도 원하는 느낌대로 되어서 너무 좋아요! ",
      reviewComment3:
        "여기저기 상담다녀봤는데도 왜 사람들이 이 곳을 추천하고 인기가 많은지 알겠더라고요. 다원에서 시공한 덕에 손님도 많이 올 것같아서 오픈일까지 두근거려서 잠도 못잘것같아요ㅋㅋㅋㅋ 오픈일 언제오냐구~~~~ 일하는 날이 기대되는건 첨이네요ㅎㅎㅎ 사장님 고생하셨습니다!",
      reviewComment4:
        "전에 인테리어 완전 망한적이 있어서 너무 걱정 많았거든요..ㅠㅠㅠ 또 제가 하고싶은 인테리어가 자칫하면 넘 과해보여서(주렁주렁 등도 많이 달고 무조건 화려하게 그치만 넘 과하지 않게ㅋㅋㅋ) 까다로운 요구사항도 진짜 너무 잘 들어주셔서 감사했습니다 번창하세요",
      reviewComment5:
        "심플하게 밝은톤으로 넓게 카페를 인테리어 하고싶었는데 여기가 카페전문이라고 하더라구요ㅎㅎ 그래서 상담이나 받으러 가보자 싶어 방문했는데 가자마자 바로 결정ㅋㅋㅋㅋ제가 말을 잘못하는 편이라 개떡같이 말해도 찰떡같이 진짜 뭘 원하시는지 다 아셔서 너무 감동이였어요",
      reviewComment6:
        "진짜 많이 고민하다가 맡긴건데 고민하지말고 빨리 맡겼으면 더 빨리완공하고 그러면 더 빨리.... 오픈했을텐데ㅠㅠ 괜히 고민해서 오픈일만 늦어진게 너무 후회되요ㅠㅠ 다들 고민은 오픈일만 늦출뿐! 얼른 맡기세요!! 괜히 카페인테리어 전문업체가 아니예요ㅎㅎㅎㅎ",
      companyIntro:
        "다원은 “창조와 열정”이라는 모토로,\n국내 디자인 업계 최고로서 \n공간의 창의성과 고객님들의 \n만족감을 증대시켜 왔습니다.",
      mainIMG: dawonMain,
      companyVideo:"shopVideo7.mp4",
    
    },
    {
      id: 8,
      name: "이다스 건축 인테리어",
      best: "abC",
      location: "서울 강남구 도산대로 68길 26 IDAS 빌딩 1F/2F",
      number: "02-543 6566",
      companyLogo: idasLogo,
      companyImg: ["idasCom1.JPG", "idasCom2.JPG", "idasCom3.JPG"],
      reviewImg1: idasComRe1,
      reviewImg2: idasComRe2,
      reviewImg3: idasComRe3,
      reviewImg4: idasComRe4,
      reviewImg5: idasComRe5,
      reviewImg6: idasComRe6,
      reviewTitle1: "깔끔한 느낌이 가득한 카페!",
      reviewTitle2: "카페 시공 후기남겨요 ",
      reviewTitle3: "아이가 있는집 추천합니다^^",
      reviewTitle4: "리모델링도 믿고 맡길수 있어요",
      reviewTitle5: "지인추천으로 이다스에서 했어요",
      reviewTitle6: "카페 시공은 이다스!",
      reviewComment1:
        "부모님께 손 벌리지 않고 혼자 열심히 모아서 드디어 제 카페를 개업했습니다! 그래서 개업 할 건물부터 꼼꼼히 봤고 당연히 인테리어도 정말 고민했습니다 이다스 건축 인테리는 인테리어와 함께 건물도 보고 제일 만족스럽게 인테리어를 뽑아주셨습니다 정말 만족하고 원하는대로 나와서 기쁩니다 최고에여!",
      reviewComment2:
        "처음에 여기 유명한 곳 같아서 대기가 길어질까 공사가 어떻게 들어갈까 너무 늦게 들어가는거 아닌가 진짜 많이 고민했습니다 근데 막상 진행하니까 빠르게 잘 해주셔서 만족합니다 빠르게 한다고 또 대충하진 않으시더라구요!! 괜히 유명한게 아니였습니다. 초고속 진행되어서 원하는 날짜에 오픈도 했습니다.",
      reviewComment3:
        "이사가면서 리모델링도 같이해서 들어갔습니다. 방중에 가장 신경 쓴 공간이 아이방이였는데, 너무 깔끔하고 아늑하게 잘됬어요~~ 아이놀이방이 항상 지저분한 느낌이들어 매번 볼떄마다 별로였거든요! 이다스에서 해결해주셨네요 ㅎㅎㅎㅎ 감사합니다!!",
      reviewComment4:
      "집 리모델링 하면서 부엌에 가장 신경을 써달라고 했습니다. 와이프가 요리하는걸 좋아하거든요^^ 저기서 맛있는 요리를 저한테 해 줄 생각에 너무 행복해하네요~~^^(신혼 이해바람) 그리고 우리 부부가 블랙과 화이트를 좋아해서 집도 블랙 화이트로 꾸미고 싶었는데 말 그대로 나와서 좋습니다",
      reviewComment5:
      "지인 추천으로 아무 생각없이 맡겼는데 너무 완벽했어요. 사실 여기저기 알아볼 시간이 없어서 맡기면서도 걱정했는데 정말 예쁘게 해주셔서 감사합니다ㅎㅎㅎ 저희부부가 원하는 스타일로다가 딱!!ㅎㅎㅎ 너무 만족해서 후기도 남겨요!! 번창하세요",
      reviewComment6:
      "첫 카페 개업이라 정말 깐깐하게 여기저기 참견했는데, 정말 저희 요구를 다들어주셔서 죄송도 하면서 너무 감사했습니다ㅠㅠ 덕분에 이렇게 좋은 결과가 나와서 너무나 만족합니다!! 이렇게 예쁜 공간에서 일할수 있게 되다니.. 너무 감격스럽네요. 적극 추천합니다!!!",
      companyIntro:
      "완벽한 공간의 완성을 목표로 \n‘생각을 현실로 만드는 이다스’라는 모토 아래\n여러분들이 상상하는 모든 것들을\n현실에서 만날 수 있도록 최선을 다할 것입니다.",
      mainIMG: idasMain,
      companyVideo:"shopVideo8.mp4",
    },
    {
      id: 9,
      name: "다솔디자인",
      best: "abC",
      location: "서울시 서초구 명달로 104, 모차르트빌딩 7F",
      number: "070.4279.0800",
      companyLogo: dasoleLogo,
      companyImg: ["dasoleCom1.JPG", "dasoleCom2.JPG", "dasoleCom3.JPG"],
      reviewImg1: dasoleComRe1,
      reviewImg2: dasoleComRe2,
      reviewImg3: dasoleComRe3,
      reviewImg4: dasoleComRe4,
      reviewImg5: dasoleComRe5,
      reviewImg6: dasoleComRe6,
      reviewTitle1: "다솔인테리어 최고예요!",
      reviewTitle2: "신혼집 리모델링 후기",
      reviewTitle3: "다솔인테리어에 맡기길 잘했네요",
      reviewTitle4: "역시 다솔인테리어 입니다",
      reviewTitle5: "리모델링 전문업체 답네요",
      reviewTitle6: "화이트톤으로 깔끔하게~",
      reviewComment1:
        "이런 글 안쓰는 사람인데 처음 써 봐요 다솔디자인에 한 후, 완공일 가족들이 분위기가 전체적으로 고급지다고 만족해했습니다. 올 리모델링이라 기간이 오래 걸릴까 걱정을 많이 했는데 예상보다 빨리 끝내주셨고 꼼꼼하게 마감처리 해주셔서 매우 만족하고 있어요 다음에 리모데링을 한다면 또 맡기고 싶습니다 너무 만족스러워요",
      reviewComment2:
        "신혼집이 마련하면서 입구에 들어서자마자 너무 갑갑한느낌이 싫어서 결국 리모델링 하기로 했습니다. 다솔인테리어에 리모델링 맡기면서 가장 중요하게 생각한 부분이 분위기였습니다. 분위기가 정~~~~~~말 화사했으면 했는데 저희가 원하는 조건을 그대로 완성시켜 주셔서 전 좋았습니다 만족스러워요 ",
      reviewComment3:
        "첫 상담 연락부터 매우 만족이였습니다. 리모델링 잘못하면 분위기 망하고 안하니만 못하면 정말 골치 아팠는데 앓던 이 뽑았습니다 가격도 이정도 퀄리티에 이렇게나 해주셔도 괜찮은가 싶을정도로 걱정되는 가격이였고 정말 만족해요 상담부터 친절히 해주시고 좋았습니다",
      reviewComment4:
        "집이 넓어 보였으면 해서 여기저기 알아보던 와중에 지인이 최근에 리모델링 했는데 다솔인테리어를 적극추천하더라구요 본인가게마냥 강력 추천하는데 솔직히 다른 후보지는 없었습니다ㅎㅎㅎ 고민없이 진행했는데 역시나 너무 만족이예요 감사합니다 ",
      reviewComment5:
        "아늑하게 보이면서 뭔가뭔가 깔끔한 느낌도 동시에 잡고싶었어요. 여러 후기보니까 제가 원하던 느낌을 잘 살려주시는것같아서 바로 컨택했는데 만족스럽습니다. 인테리어 하시면서 소품들도 여러가지 추천해주셨는데 너무 예쁘고 잘어울려서 추천해준 사장님께 감사합니다!",
      reviewComment6:
        "요즘 화이트톤으로 많이 인테리어 해서, 저희집도 화이트톤으로 분위기를 바꿔보고 싶어서 여러군데 알아본결과 여기가 제일 후기도 맘에 들더라구요ㅎㅎㅎ 중간에 마감 잘안된부분이 있었는데 문의하니까 즉시 바로 A/S까지 해주시고 다솔에서하시면 정말 후회하지 않을실꺼예용!! ",
      companyIntro:
        "DESIGN YOUR LIFE!\n고객의 필요, 입장, 사용자의 공간 이해, 상식으로부터\n시대의 트렌드와 조합한 공간 연출 서비스!\n고객의 삶과 소통하는 공간을 연출하는 다솔!",
      mainIMG: dasoleMain,
      companyVideo:"shopVideo9.mp4"
    
    },
  ]);

  const value = {
    state: { comment, question, reciept, score },
    action: { setComment, setQuestion, setReciept, setScore },
  };
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const { Consumer: DataConsumer } = DataContext;

export { DataConsumer, DataProvider };

export default DataContext;
