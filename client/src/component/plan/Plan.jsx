import './plan.scss';
import Navbar from "../header/Navbar";
import styled from "styled-components";
import Carousel from "./Carousel";
import PlanBox from "./PlanBox";

const StyledTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 600;
  max-width: 80rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  margin-left:auto;
  margin-right:auto;
`;

const Plan = () => {
  return (
    <div className="h-16 mx-auto">
      <header>
        <Navbar currentMenu="Plan"/>
        <div className='mt-16'>
          <StyledTitle>
            저희 <span className='text-[#1539CB]'>SHIN</span>나게 떠나요~!
          </StyledTitle>
          <Carousel />
        </div>
      </header>
      <main className='mt-10 mx-auto'>
        <StyledTitle>
          <span className='text-[#1539CB]'>SOL</span>깃한 여행계획
        </StyledTitle>
        <PlanBox>
        </PlanBox>
      </main>
    </div>
  );
};

export default Plan;