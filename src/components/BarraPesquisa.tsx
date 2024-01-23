import styles from "./BarraPesquisa.module.css";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const BarraPesquisa = ({ search, setSearch }: Props) => {
  return (
    <div className={styles.inputs}>
      <img src="/public/searchIcon.svg" id="img-lock" alt="" />
      <input
        className={styles.input}
        type="search"
        placeholder="Procurar série..."
        value={search}
        onChange={({ target }) => setSearch(target.value)}
      />
    </div>
  );
};

export default BarraPesquisa;
