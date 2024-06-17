import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, {Component, useEffect, useState} from "react";
import Slider from "react-slick";
import {requestGet} from "../../utils/network/Communicate";
import axios from 'axios';



const Carousel = () => {
  const [summary, setSummary] = useState([]);
  const [plan, setPlan] = useState([]);
  const [loading, setLoading] = useState(true);

  const settings = {
    // className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 2000
  };

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const response = await axios.get('http://effozen.com/api/project/shinhan/get_summary');
        setSummary(response.data);
      } catch (error) {
        console.error('Error fetching summary data:', error);
      }
    };

    const fetchPlan = async () => {
      try {
        const response = await axios.get('http://effozen.com/api/project/shinhan/get_plan');
        setPlan(response.data);
      } catch (error) {
        console.error('Error fetching plan data:', error);
      }
    };

    fetchSummary();
    fetchPlan();
    setLoading(false);
  }, []);


  const carouselData = [
    {
      img: 'https://i.postimg.cc/hPc7xvN9/kansai.webp',
      day: '1일차',
      date: '2024년 08월 11일',
      message: '오사카데스카~~!'
    },
    {
      img: 'https://i.postimg.cc/zG3vSg7R/yamasaki.webp',
      day: '2일차',
      date: '2024년 08월 12일',
      message: '일본술? 뭐가 그리 대단한데??'
    },
    {
      img: 'https://i.postimg.cc/sXPgD9jb/kuhokusi.jpg',
      day: '3일차',
      date: '2024년 08월 13일',
      message: '보세보세 역사를 보세!'
    },
    {
      img: 'https://i.postimg.cc/1RH3kHYq/akihabara.webp',
      day: '4일차',
      date: '2024년 08월 14일',
      message: '안녕 도쿄!'
    },
    {
      img: 'https://i.postimg.cc/dtVVwyzS/sibuya.jpg',
      day: '5일차',
      date: '2024년 08월 15일',
      message: '시부야에서 나도 패션왕!'
    },
    {
      img: 'https://i.postimg.cc/dVzs2SDz/disney.webp',
      day: '6일차',
      date: '2024년 08월 16일',
      message: '디즈니월드 속으로! 나도 주인공!'
    },
    {
      img:'https://i.postimg.cc/sXz38QYm/enoshima.jpg',
      day: '7일차',
      date: '2024년 08월 17일',
      message: '안선생님.. 농구가 하고 싶어요..!'
    },
    {
      img:'https://i.postimg.cc/TwcTXdQ6/incheon.jpg',
      day: '8일차',
      date: '2024년 08월 18일',
      message: '굿바이 일본! 헬로우 한국!'
    },
  ];

  return (
    <div className="slider-container bg-white">
      <Slider {...settings}>
        {carouselData.map(v => {
          return (
            <div key={`${v.data}_${v.message}`} className="flex flex-col w-80 p-3">
              <img src={v.img} alt="img" className="w-64 h-64 object-cover object-center"/>
              <div className="mt-2 text-xl font-bold text-[#1539CB]">{v.day}</div>
              <div className="mt-1 text-l font-semibold text-gray-500">{v.date}</div>
              <div className="mb-2 text-xl font-bold w-64">{v.message}</div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;