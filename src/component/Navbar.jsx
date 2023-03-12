import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../context/ContextProvider';
const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
function Navbar() {
  const { currentColor, activeMenu, setActiveMenu, handleClick, isClicked, setScreenSize, screenSize } = useStateContext();
 useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  const handleActiveMenu = () => setActiveMenu(!activeMenu);

  return (
    <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative">
      <NavButton title="Menu" customFunc={handleActiveMenu} color={currentColor} icon={<AiOutlineMenu />} />
      <div className="flex">
        <NavButton title="Cart" customFunc={() => handleClick('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor="#03C9D7" customFunc={() => handleClick('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor="rgb(254, 201, 15)" customFunc={() => handleClick('notification')} color={currentColor} icon={<RiNotification3Line />} />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src="data:image/jpeg;base64,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"
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Michael
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
      </div>
    </div>
  )
}

export default Navbar