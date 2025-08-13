import Card from "../../components/Card";
import { useNavigation } from "../../hooks/useNavigation";
import { useHome } from "./container";

import styles from "./styles.module.css";

export default function Home() {
  const { data } = useHome();

  const { indexCurrent, selectedItem } = useNavigation({
    limit: data.length - 1,
  });

  return (
    <div className={styles.containerHome}>
      {selectedItem === null ? (
        <Card>
          <div className={styles.home}>
            <h1>Culinaria</h1>
            <h2>O que você prefere para o lanche?</h2>
            <div className={styles.options}>
              {data?.map((item, index) => (
                <button
                  key={item.id}
                  className={
                    indexCurrent === index ? styles.isFocused : styles.option
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </Card>
      ) : (
        <Card>
          <div className={styles.confirm}>
            <p>Você escolheu a opção: </p>
            <h1>{data[selectedItem].name}</h1>
          </div>
        </Card>
      )}
    </div>
  );
}
