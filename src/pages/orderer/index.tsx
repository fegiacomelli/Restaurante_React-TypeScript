import styles from "./Orderer.module.scss";
import option from "./option.json";
import React, { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface Props {
  orderer: string;
  setOrderer: React.Dispatch<React.SetStateAction<string>>;
}

export default function Orderer({ orderer, setOrderer }: Props) {
  const [open, setOpen] = useState(false);
  const nameOrderer =
    orderer && option.find((option) => option.value === orderer)?.name;
  return (
    <button
      className={classNames({
        [styles.orderer]: true,
        [styles["orderer__activ"]]: orderer !== "",
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{nameOrderer || "Ordenar Por"}</span>
      {open ? (
        <MdKeyboardArrowUp size={20} />
      ) : (
        <MdKeyboardArrowDown size={20} />
      )}
      <div
        className={classNames({
          [styles.orderer__options]: true,
          [styles["orderer__options--activ"]]: open,
        })}
      >
        {option.map((option) => (
          <div
            className={styles.orderer__option}
            key={option.value}
            onClick={() => setOrderer(option.value)}
          >
            {option.name}
          </div>
        ))}
      </div>
    </button>
  );
}
