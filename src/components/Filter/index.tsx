import { Dispatch, SetStateAction, useRef } from "react";
import styles from "./Filter.module.scss";
import { motion } from "framer-motion";
import { menuSlide } from "./anim";
import Authors from "./Authors";
import Location from "./Location";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthorQuery,
  setLocationQuery,
  setSelectedAuthor,
  setSelectedLocation,
  setYearFirstValue,
  setYearSecondValue,
} from "../../../redux/optionsSlice/slice";
import { RootState } from "../../../redux/store";
import { optionSelector } from "../../../redux/optionsSlice/selector";
import Years from "./Years";
import { useClickAway } from "react-use";

type Active = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

const Filter = ({ setIsActive }: Active) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const menu = useRef<HTMLDivElement | any>();
  const { isThemeLight } = useSelector((state: RootState) => state.theme);
  const { selectedAuthor, selectedLocation, yearFirstValue, yearSecondValue } =
    useSelector(optionSelector);

  const handleClearQueries = () => {
    dispatch(setSelectedAuthor([]));
    dispatch(setSelectedLocation([]));
    dispatch(setAuthorQuery(""));
    dispatch(setLocationQuery(""));
    dispatch(setYearFirstValue(""));
    dispatch(setYearSecondValue(""));
  };

  const isClearDisabled =
    selectedAuthor.length === 0 &&
    selectedLocation.length === 0 &&
    yearFirstValue &&
    yearSecondValue
      ? true
      : false;

  useClickAway(menu, () => {
    setIsActive(false);
  });

  return (
    <motion.div
      className={styles.filter_main}
      variants={menuSlide}
      animate="enter"
      exit="exit"
      initial="initial"
      ref={menu}
    >
      <button className={styles.close_icon} onClick={() => setIsActive(false)}>
        <img
          src={
            isThemeLight ? "icons/close_icon.png" : "icons/close_icon_light.png"
          }
          alt="close_icon"
        />
      </button>
      <div className={styles.filter_inner}>
        <Authors />
        <Location />
        <Years />
      </div>
      <div className={styles.handleButtons}>
        <button
          className={styles.btn_showResults}
          onClick={() => setIsActive(false)}
        >
          SHOW THE RESULTS
        </button>
        <button
          className={
            isClearDisabled ? styles.btn_clear_disabled : styles.btn_clear
          }
          onClick={() => handleClearQueries()}
        >
          CLEAR
        </button>
      </div>
    </motion.div>
  );
};

export default Filter;
