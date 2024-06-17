import symbol from '../../utils/imgs/symbol_black.png';
import classNames from "classnames";
import {useState} from "react";
import {Link} from "react-router-dom";

const Navbar = ({currentMenu}) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const menu = ['Home', 'About Us', 'Plan', 'Travel', 'Record'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="h-16 max-w-7xl mx-auto px-3">

        <div className="h-16 flex justify-between items-center">

          {/* 메뉴 */}
          <div>
            <Link to="/" className='flex items-center py-5 px-2 text-gray-700'>
              <img src={symbol} alt="symbol" className='w-9 h-9'/>
            </Link>
          </div>

          {/* 메뉴2 */}
          <div className='hidden md:flex space-x-3'>
            {menu.map(v => (
              <Link to={`/${v.replace(/\s+/g, '').toLowerCase()}`} className="flex items-center py-5 px-2 text-gray-700" key={v}>
                <span
                  className={`text-lg font-normal py-5 px-3 text-gray-700 hover:text-gray-900 ${v === currentMenu ? 'underline underline-offset-8' : ''}`}>
                  {v}
                </span>
              </Link>
            ))}
          </div>

          {/* 모바일 메뉴 */}
          <div className='md:hidden flex items-center'>
            <button
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {!menuToggle ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="h-9 w-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                     stroke="currentColor" className="h-9 w-9">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 아이템 */}
        <div className={classNames('md:hidden', {hidden: !menuToggle})}>
          {menu.map(v => (
            <Link to={`/${v.replace(/\s+/g, '').toLowerCase()}`} className="block py-2 px-4 text-sm hover:bg-gray-200" key={`mobile_${v}`}>{v}</Link>
          ))}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
