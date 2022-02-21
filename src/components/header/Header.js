import "./header.css";
import { ReactComponent as MoreIcon } from "../../assets/icons/more-icon.svg";
import { ReactComponent as PowerIcon } from "../../assets/icons/power-icon.svg";
import { ReactComponent as ResetIcon } from "../../assets/icons/reset-icon.svg";
import { ReactComponent as SettingIcon } from "../../assets/icons/setting-icon.svg";
import { ReactComponent as Logo } from "../../assets/logo/logo.svg";
import { useRef } from "react";

const Header = () => {
    const ref = useRef()

    const handleChange = (e) => {
        const children = [...ref.current.children]
        console.log(children)
        children.forEach((i) => i.classList.remove("active"))
        e.target.classList.add("active")
    }
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <div className="nav-right">
          <div className="user">
            <div className="user-image">
                <img src="/images/favpng_samsung-galaxy-a8-a8-user-login-telephone-avatar.png"/>
            </div>
            <div className="user-info">
              <h4>حمید رضا نوری مطلق</h4>
              <p>کد کارمندی : 123456</p>
            </div>
          </div>
          <div className="navbar-menu">
            <ul ref={ref} onClick={(e) => handleChange(e)}>
              <li>کارتابل</li>
              <li>جهان گستر</li>
              <li>نوشته ها</li>
              <li>رضایت نامه</li>
              <li>چارت سازمانی</li>
              </ul>
              <MoreIcon />
          </div>
        </div>
        <div className="nav-left">
          <div className="header-option">
            <SettingIcon />
            <ResetIcon />
            <PowerIcon />
          </div>
          <div className="logo-container">
            <Logo />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
