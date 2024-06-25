import { useDispatch, useSelector } from "react-redux";
import styles from "./currency.module.css";
import { IRootStoreType, setCurrencyValue } from "../store/slices/appSlice";

export default function CurrencyComponent() {
  const dispatch = useDispatch();
  const inputValue = useSelector(
    (state: IRootStoreType) => state.appRedux.currencyData
  );

  return (
    <div className={styles.item__container}>
      <div className={styles.item__container_input}>
        <span className={styles.input__label}>USD</span>
        <input
          type="number"
          min={0}
          step={1}
          value={inputValue.usd}
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          onChange={(e) => {
            dispatch(setCurrencyValue({ usd: e.target.value }));
          }}
          className={styles.input__text}
          placeholder="USD"
        />
      </div>
      <div className={styles.item__container_input}>
        <span className={styles.input__label}>EUR</span>
        <input
          type="number"
          min={0}
          step={1}
          value={inputValue.eur}
          onKeyDown={(e) =>
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()
          }
          onChange={(e) => {
            dispatch(setCurrencyValue({ eur: e.target.value }));
          }}
          className={styles.input__text}
          placeholder="EUR"
        />
      </div>
    </div>
  );
}
