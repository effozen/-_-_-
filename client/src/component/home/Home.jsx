import Navbar from "../header/Navbar";
import card from "../../utils/imgs/cardimg.png";
import lim from "../../utils/imgs/lim_img1.jpeg";
import choi from "../../utils/imgs/choi_img1.png";
import army from '../../utils/imgs/army_img1.jpeg';
import './Home.css'; // CSS 파일을 추가로 import

const Home = () => {
  return (
    <div className='home'>
      <header>
        <Navbar currentMenu='Home' />
      </header>
      <div className='flex h-screen'>
        <div className='basis-1/2 h-full bg-sky'>
          <div className='w-full h-full flex flex-col justify-center items-center'>
            <div className='flex justify-center'>
              <img src={card} alt="card" className='w-9/12'/>
            </div>
            <div className="flex flex-col items-center w-full mt-11 space-y-3">
              <div className="text-7xl font-semibold text-white">
                <span className="text-[#1539CB]">SOL</span>깃 하게!
              </div>
              <div className="text-7xl font-semibold text-white">
                <span className="text-[#005DF9]">SHIN</span>이 나게!
              </div>
            </div>
          </div>
        </div>

        <div className="basis-1/2 flex flex-col items-center bg-blue h-screen overflow-y-auto">
          <div className="text-6xl font-semibold mt-16 w-11/12 flex justify-start ">
            <span className="text-[#1539CB]">SOL</span>깃한 낭만여행
          </div>

          <div className='px-10 w-full mt-8 bg-white'>
            <div className='max-w-xl flex justify-start py-2 space-x-5'>
              <div>
                <img src={lim} alt="" className='h-40 w-64 object-cover object-center'/>
              </div>
              <div className='text-4xl flex flex-col justify-center items-start font-semibold'>
                <div><span className='text-[#4C7DFF]'>특별한 추억</span>에 미친</div>
                <div><span className='text-[#1539CB]'>임재도</span>와</div>
              </div>
            </div>
          </div>

          <div className='px-10 w-full mt-2 bg-white'>
            <div className="max-w-xl flex justify-end py-2 space-x-5">
              <div className="text-4xl flex flex-col justify-center items-end font-semibold">
                <div><span className="text-[#4C7DFF]">일본 문화</span>에 미친</div>
                <div><span className='text-[#1539CB]'>최형욱</span>이</div>
              </div>
              <div>
                <img src={choi} alt="" className="h-40 w-64 object-cover object-center"/>
              </div>
            </div>
          </div>

          <div className="px-10 w-full mt-2 bg-white">
            <div className='max-w-xl flex justify-start py-2 space-x-5'>
              <div>
                <img src={army} alt="" className='h-40 w-64 object-cover object-center'/>
              </div>
              <div className="text-4xl flex flex-col justify-center items-start font-semibold">
                <div><span className="text-[#4C7DFF]">선후임</span>으로 만나</div>
                <div>떠나는<span className="text-[#1539CB]">SOL</span>깃한</div>
                <div><span className="text-[#4C7DFF]">낭만여행</span></div>
              </div>
            </div>
          </div>

          <div className='w-full h-72 flex justify-center items-center my-6'>
            <div className="text-5xl flex flex-col justify-center items-center font-semibold space-y-2">
              <div><span className="text-[#4C7DFF]">특별한 추억</span>을</div>
              <div>조금은 <span className="text-[#1539CB]">독특한 방법</span>으로</div>
              <div><span className="text-[#4C7DFF]">남겨보고자</span>합니다</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
