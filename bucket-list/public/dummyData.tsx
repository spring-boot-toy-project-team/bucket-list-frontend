interface Data {
  memberId: number;
  title: string;
  image: string;
  content: string;
  tage: string[];
  star: number;
  choose: number;
}
[];

export const dummyData: Array<Data> = [
  {
    memberId: 1,
    title: "운동",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vwkcbiWTENOQSYJKpCPoHeufy8FCp65mGg&usqp=CAU",
    content:
      "태니스 배웠습니다. 앞으로의 목표는 강남구 테니스 대회에 나가는 것!",
    tage: ["#테니스", "#죽기전에해야하는운동"],
    star: 4,
    choose: 10,
  },
  {
    memberId: 2,
    title: "여행가기",
    image: "https://t1.daumcdn.net/cfile/tistory/9981253359F047A003",
    content: "영덕을 다녀왔습니다.",
    tage: ["#영덕", "#영덕은대게"],
    star: 11,
    choose: 13,
  },
  {
    memberId: 3,
    title: "여행가기",
    image:
      "http://d20aeo683mqd6t.cloudfront.net/ko/articles/title_images/000/039/020/medium/pixta_38938598_L_s.jpg?2019",
    content: "일본을 다녀왔습니다",
    tage: ["#일본", "#오사카"],
    star: 22,
    choose: 15,
  },
  {
    memberId: 4,
    title: "취미활동",
    image:
      "https://www.scubain.co.kr/data/ebslider/eb4_hosp_002/img/ebfe514ea647a2ab4abb13443a8c7c15.jpg",
    content: "제주도에서 스쿠버다이빙을 하고 왔습니다",
    tage: ["#제주도", "#스쿠버다이빙"],
    star: 4,
    choose: 10,
  },
  {
    memberId: 5,
    title: "취미활동",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCac3MqqpF-soxZmo7E1t8xB2qhPA6pNCdWQ&usqp=CAU",
    content: "카페에서 공부하기",
    tage: ["#카페", "#공부"],
    star: 2,
    choose: 2,
  },
  {
    memberId: 6,
    title: "여행가기",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0O7S884K95gG8TqRs1Hj7zJWZxqQJ9Bb-ug&usqp=CAU",
    content: "에펠탑에서 사진찍기",
    tage: ["#프랑스", "#에펠탑"],
    star: 4,
    choose: 10,
  },
  {
    memberId: 7,
    title: "여행가기",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyjLv_qyBLO7s_wGLgj-b-ponO0exVtB9QRQ&usqp=CAU",
    content: "EPL 경기 보기",
    tage: ["#토트넘", "#손흥민"],
    star: 30,
    choose: 79,
  },
  {
    memberId: 8,
    title: "취미활동",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9PxHjLA_vSWpqRMuavaDWsOFjJq8ahY4Ew&usqp=CAU",
    content: "번지점프 하기",
    tage: ["#번지점프", "#위험"],
    star: 31,
    choose: 12,
  },
];
