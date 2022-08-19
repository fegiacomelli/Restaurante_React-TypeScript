import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import Search from "pages/search";
import { useState } from "react";
import Filter from "./filter/index";
import Orderer from "pages/orderer";
import Itens from "./Itens";

export default function Menu() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [orderer, setOrderer] = useState("");
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>A casa do codigo e da massa</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.__title}>Cardapio</h3>
        <Search search={search} setSearch={setSearch} />
        <div className={styles.menu__filter}>
          <Filter filter={filter} setFilter={setFilter} />
          <Orderer orderer={orderer} setOrderer={setOrderer} />
        </div>
        <Itens search={search} filter={filter} orderer={orderer} />
      </section>
    </main>
  );
}
