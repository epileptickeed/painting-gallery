import { useDispatch, useSelector } from "react-redux";
import styles from "./Nav.module.scss";
import { RootState } from "../../../redux/store";
import { toggleTheme } from "../../../redux/themeSlice/slice";
import { useEffect } from "react";
import DarkLogo from "../../assets/images/logoDark.png";
import lightLogo from "../../assets/images/logo.png";
import DarkIcon from "../../assets/images/icons/darkIcon.png";
import LightIcon from "../../assets/images/icons/lightIcon.png";

const Nav = () => {
  const dispatch = useDispatch();
  const { isThemeLight } = useSelector((state: RootState) => state.theme);

  useEffect(() => {
    const setDarkMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "dark");
    };
    const setLightMode = () => {
      document.querySelector("body")?.setAttribute("data-theme", "light");
    };
    isThemeLight ? setLightMode() : setDarkMode();
  }, [isThemeLight]);

  return (
    <nav className={styles.navbar}>
      <img src={isThemeLight ? DarkLogo : lightLogo} alt="logo" />
      <img src="../../.." alt="" />
      <button onClick={() => dispatch(toggleTheme())}>
        <img
          className={styles.light_icon}
          src={isThemeLight ? DarkIcon : LightIcon}
          alt="theme_icon"
        />
      </button>
    </nav>
  );
};

export default Nav;
