import React, {useRef, useEffect, useState} from 'react';
import {Status, Wrapper} from "@googlemaps/react-wrapper";
import {apiKey} from "../../secret/apiKey";
import GoogleMap from "./GoogleMap";

const render = (status, latitude, longitude) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>;
    case Status.FAILURE:
      return <>에러 발생</>;
    case Status.SUCCESS:
      return <GoogleMap latitude={latitude} longitude={longitude}/>;
  }
};

const ScheduleItem = ({latitude, longitude, time, location, details}) => {
  return (
    <div className="my-8 flex schedule-item">
      <div className="w-[440px] h-52 border-black border-2">
        <Wrapper apiKey={apiKey.googleMapAPIKey} render={(status) => render(status, latitude, longitude)}/>
      </div>
      <div className="ml-16">
        <div className="text-2xl font-bold text-gray-500">
          {time}
        </div>
        <div className="text-4xl font-extrabold">
          {location}
        </div>
        <ul className="text-xl font-semibold list-disc ml-5 mt-4">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PlanBox = () => {
  const scheduleData = [
    {
      date: '2024년 08월 11일',
      time: "오전 08시 00분",
      location: "인천 국제 공항",
      details: ["티웨이 항공 08시 00분 비행기", "출국"],
      latitude: 37.458671,
      longitude: 126.441967,
    },
    {
      date: '2024년 08월 11일',
      time: "오전 09시 50분",
      location: "간사이 국제 공항",
      details: ["하루카 특급 탑승", "오후 1시경 우메다 도착"],
      latitude: 34.43204295825874,
      longitude: 135.2366992054736,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 01시 00분",
      location: "하카타 모츠나베 오오야마 우메다",
      details: ["점심 식사", "메뉴는 모츠나베!"],
      latitude: 34.70280714425824,
      longitude: 135.49459236931227,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 02시 00분",
      location: "츠유노텐 신사",
      details: ["요도바시 카메라 먼저 방문", "이후 츠유토네 신사 방문"],
      latitude: 34.699590765690616,
      longitude: 135.50073173121407,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 03시 30분",
      location: "오사카성",
      details: ["오후 5시까지 관광"],
      latitude: 34.68753249066268,
      longitude: 135.5258079997683,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 06시 30분",
      location: "리버크루즈(보트)",
      details: ["오후 6시까지 난바역 이동", "리버크루즈 30분 체험", "글리코상 앞에서 릴스!"],
      latitude: 34.6688692,
      longitude: 135.50130055476106,
    },
    {
      date: '2024년 08월 11일',
      time: "오후 08시 00분",
      location: "쿠시카츠 효탄",
      details: ["저녁식사 후 휴식"],
      latitude: 34.66559648116805,
      longitude: 135.50375250343717,
    },
    {
      date: '2024년 08월 12일',
      time: "오전 09시 30분",
      location: "월계관 사케 박물관",
      details: ["아침일찍 일어나서 박물관으로 출발"],
      latitude: 34.92917998074915,
      longitude: 135.76159324484095,
    },
    {
      date: '2024년 08월 12일',
      time: "오후 12시 30분",
      location: "야마자키 증류소 투어",
      details: ["야마자키 증류소 사전 예약", "일본술이 어떻게 만들어지는지 탐방"],
      latitude: 34.89261580133876,
      longitude: 135.67446152883596,
    },
    {
      date: '2024년 08월 12일',
      time: "오후 03시 00분",
      location: "후시미 이나리 신사",
      details: ["풍경이 정말 이쁜 신사로 출발"],
      latitude: 34.96809123820069,
      longitude: 135.77916096271534,
    },
    {
      date: '2024년 08월 12일',
      time: "오후 04시 30분",
      location: "기요미즈 데라",
      details: ["일본 영상 컨텐츠에서 자주 등장하는 곳", "정상까지 올라서 주변 풍경 감상", "이후 신넨자카, 니넨자카, 야사카 신사 방문", "마지막으로 하나미코지도리 들리고, 저녁식사"],
      latitude: 34.99525862953644,
      longitude: 135.78464484341774,
    },
    {
      date: '2024년 08월 12일',
      time: "오후 07시 30분",
      location: "장어 소라",
      details: ["저녁식사", "장어 덮밥이 유명한 곳", "먹고 우메다 숙소로 이동"],
      latitude: 35.004914777037065,
      longitude: 135.76494198318247,
    },
    {
      date: '2024년 08월 13일',
      time: "오전 09시 30분",
      location: "나라",
      details: ["나라로 이동", "이동시간이 꽤나 소요됨"],
      latitude: 34.41013801818728,
      longitude: 135.8798158566498,
    },
    {
      date: '2024년 08월 13일',
      time: "오전 11시 00분",
      location: "카미이키 우동",
      details: ["점심식사"],
      latitude: 34.683157693983695,
      longitude: 135.8288643153423,
    },
    {
      date: '2024년 08월 13일',
      time: "오후 12시 00분",
      location: "코후쿠지",
      details: ["코후쿠지, 코후쿠지 국보관, 나라 국립 박물관, 가스가신사 방문", "오후 3시 30분까지 구경 후 오사카로 이동"],
      latitude: 34.68304378188108,
      longitude: 135.8321432771096,
    },
    {
      date: '2024년 08월 13일',
      time: "오후 05시 00분",
      location: "쿠이야",
      details: ["저녁식사", "야끼니꾸!"],
      latitude: 34.64304239504123,
      longitude: 135.50004585196112,
    },
    {
      date: '2024년 08월 13일',
      time: "오후 07시 00분",
      location: "덴덴타운",
      details: ["중고 비디오 게임 등을 판매하는 장소", "일본의 옛날 전자오락 문화 탐방"],
      latitude: 34.66051801826915,
      longitude: 135.50583618430673,
    },
    {
      date: '2024년 08월 13일',
      time: "오후 08시 00분",
      location: "츠텐가쿠",
      details: ["전망대", "저녁은 여유롭게 야경보며 휴식", "이후 돈키호테 방문 후 숙소 복귀"],
      latitude: 34.65273313409218,
      longitude: 135.5063835797077,
    },
    {
      date: '2024년 08월 14일',
      time: "오전 11시 00분",
      location: "모토무라 규카츠",
      details: ["천천히 숙소 체크아웃", "아점을 먹고 신칸센으로 도쿄로 출발"],
      latitude: 34.70355150032448,
      longitude: 135.49567875492116,
    },
    {
      date: '2024년 08월 14일',
      time: "오후 12시 57분",
      location: "도쿄역 마루노우치 광장",
      details: ["도쿄역 주변 관광"],
      latitude: 35.68186884735241,
      longitude: 139.76546950299613,
    },
    {
      date: '2024년 08월 14일',
      time: "오후 05시 00분",
      location: "아키하바라",
      details: ["아키하바라로 이동"],
      latitude: 35.69846051463865,
      longitude: 139.77176939111914,
    },
    {
      date: '2024년 08월 14일',
      time: "오후 06시 00분",
      location: "아키하바라 UDX",
      details: ["저녁식사 후 주변 관광", "이후 숙소에서 휴식"],
      latitude: 35.70065098338549,
      longitude: 139.77263328235819,
    },
    {
      date: '2024년 08월 15일',
      time: "오전 10시 30분",
      location: "도테노 이세야",
      details: ["아점먹고 출발", "메뉴는 텐동!"],
      latitude: 35.72524119922852,
      longitude: 139.7971139153423,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 12시 30분",
      location: "아사쿠사",
      details: ["버스로 아사쿠사로 이동!", "이후 주변 관광"],
      latitude: 35.71094889187626,
      longitude: 139.7966041213419,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 04시 00분",
      location: "센소지",
      details: ["센소지 관광 후 하라주쿠로 이동"],
      latitude: 35.71488884635945,
      longitude: 139.79666102781496,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 05시 00분",
      location: "하라주쿠",
      details: ["하라주쿠에서는 크게 계획없이 자유 관광"],
      latitude: 35.670177974158285,
      longitude: 139.70131038575553,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 06시 00분",
      location: "함바그 요시",
      details: ["저녁식사", "티비에서 자주 본 일본식 함바그!", "이후 시부야로 이동"],
      latitude: 35.66652059467711,
      longitude: 139.70451942943268,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 07시 30분",
      location: "스크램블 교차로",
      details: ["정말 유명한 교차로에서 릴스 한컷!", "이후 스카이 전망대 방문", "그리고 나서 시부야로 이동!"],
      latitude: 35.66028262542724,
      longitude: 139.70065328521375,
    },
    {
      date: '2024년 08월 15일',
      time: "오후 09시 30분",
      location: "오모이데요코초",
      details: ["다양한 음식 가판데가 존재하는 곳!", "야식을 먹으면서 하루 마무리!"],
      latitude: 35.6945968475693,
      longitude: 139.69924271589232,
    },
    {
      date: '2024년 08월 16일',
      time: "오전 06시 30분",
      location: "도쿄 디즈니랜드",
      details: ["아침 오픈런", "디즈니랜드에서 하루 쭉 보내는 일정", "이후 숙소 근처에서 자유롭게 휴식"],
      latitude: 35.63788806780461,
      longitude: 139.88025514722995,
    },
    {
      date: '2024년 08월 17일',
      time: "오전 10시 30분",
      location: "요리도코로",
      details: ["이나무라가사키로 이동", "아점 먹고 시작", "유명한 고등어 맛집", "웨이팅이 길어서 오픈런이 필수!"],
      latitude: 35.30505614887226,
      longitude: 139.52408843588074,
    },
    {
      date: '2024년 08월 17일',
      time: "오전 11시 30분",
      location: "이나무라가사키 곶",
      details: ["곶을 시작으로 고료 신사, 하세 데라 방문", "고쿠토인까지 방문 후 가마쿠라로 이동"],
      latitude: 35.30205447260646,
      longitude: 139.52548772770706,
    },
    {
      date: '2024년 08월 17일',
      time: "오후 03시 30분",
      location: "가마쿠라코코마에 역",
      details: ["슬램덩크의 명소", "안선생님.. 저 농구가 하고 싶어요...!", "이후 주변 관광"],
      latitude: 35.306855563380914,
      longitude: 139.50058595622016,
    },
    {
      date: '2024년 08월 17일',
      time: "오후 06시 30분",
      location: "토비초 본점",
      details: ["시라스동 (특산물) 먹으면서 휴식", "이후 천천히 산책"],
      latitude: 35.30148130234024,
      longitude: 139.48229242388555,
    },
    {
      date: '2024년 08월 17일',
      time: "오후 09시 30분",
      location: "토리키조쿠",
      details: ["저녁에 이케부쿠로 숙소로 이동", "간단하게 야식먹으며 하루 마무리"],
      latitude: 35.732097838139474,
      longitude: 139.71030098465812,
    },
    {
      date: '2024년 08월 18일',
      time: "오전 09시 30분",
      location: "이케부쿠로",
      details: ["체크아웃 후 이케부쿠로 관광"],
      latitude: 35.73483336382619,
      longitude: 139.70795344184106,
    },
    {
      date: '2024년 08월 18일',
      time: "오전 11시 30분",
      location: "멘도코로 하나다 라멘",
      details: ["일본에서의 마지막 라멘", "점심먹고 천천히 주변 관광"],
      latitude: 35.72942905202576,
      longitude: 139.7159721957478,
    },
    {
      date: '2024년 08월 18일',
      time: "오후 03시 30분",
      location: "고코쿠지",
      details: ["호국사 관광", "마지막으로 천천히 여유롭게 풍경 즐기기", "이후 나리타 공항으로 이동"],
      latitude: 35.72213931770215,
      longitude: 139.72582318230573,
    },
    {
      date: '2024년 08월 18일',
      time: "오후 03시 30분",
      location: "고코쿠지",
      details: ["호국사 관광", "마지막으로 천천히 여유롭게 풍경 즐기기", "이후 나리타 공항으로 이동"],
      latitude: 35.72213931770215,
      longitude: 139.72582318230573,
    },
    {
      date: '2024년 08월 18일',
      time: "오후 06시 20분",
      location: "나리타 국제 공항",
      details: ["티웨이 항공 오후 06시 20분 비행기", "인천 공항에 오후 09시 20분 도착", "여행 마무리 하기"],
      latitude: 35.770343368070066,
      longitude: 140.38436441238164,
    },
  ];

  const contents = [
    {
      date: '2024년 08월 11일',
      message: '오사카데스카~~!'
    },
    {
      date: '2024년 08월 12일',
      message: '일본술? 뭐가 그리 대단한데??'
    },
    {
      date: '2024년 08월 13일',
      message: '보세보세 역사를 보세!'
    },
    {
      date: '2024년 08월 14일',
      message: '안녕 도쿄!'
    },
    {
      date: '2024년 08월 15일',
      message: '시부야에서 나도 패션왕!'
    },
    {
      date: '2024년 08월 16일',
      message: '디즈니월드 속으로! 나도 주인공!'
    },
    {
      date: '2024년 08월 17일',
      message: '안선생님..! 농구가 하고 싶어요..!'
    },
    {
      date: '2024년 08월 18일',
      message: '굿바이 일본! 헬로우 한국!'
    },
  ];

  return (
    <div className="bg-white max-w-7xl mx-auto flex flex-col py-9 space-y-32">
      <div className="flex">
        {/* 라인 */}
        <div className="flex flex-col items-center mx-10 mt-2.5">
          <div className="line w-full ml-3"></div>
          <div className="circle"></div>
        </div>

        {/* 콘텐츠 */}
        <div>
          {contents.map((content, dateIndex) => (
            <div className="flex">
              <div className="circle -ml-[52px] mt-[10px] mr-10"></div>
              <div>
                <div key={dateIndex} className=" w-full flex flex-col mb-28">
                  <div className="text-gray-500 text-3xl font-semibold">{content.date}</div>
                  <div className="text-5xl font-extrabold mt-2">{content.message}</div>
                  {scheduleData.map((item, index) => {
                    if (content.date === item.date) {
                      return (<ScheduleItem
                        key={index}
                        time={item.time}
                        location={item.location}
                        details={item.details}
                        latitude={item.latitude}
                        longitude={item.longitude}
                      />);
                    } else return null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanBox;
