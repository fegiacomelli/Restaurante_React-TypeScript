import filters from "./filters.json";
import styles from "./Filter.module.scss";
import classNames from "classnames";

type IOption = typeof filters[0];

interface Props {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

/*     ||
interface Option{
    id: number;
    label: string;
} 
*/

export default function Filter({ filter, setFilter }: Props) {
  function selectedFilter(option: IOption) {
    if (filter === option.id) return setFilter(null);
    return setFilter(option.id);
  }
  return (
    <div className={styles.filter}>
      {filters.map((option) => (
        <button
          className={classNames({
            [styles.filter__filter]: true,
            [styles["filter__filter--activ"]]: filter === option.id,
          })}
          key={option.id}
          onClick={() => selectedFilter(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
