import Style from "/desafio/src/components/Main/Cantores/style.module.css";

export function Cantores() {
  return (
    <>
      <h1 className={Style.cantores}> Melhores Cantores Bregas Do Brasil</h1>
      <ul className={Style.cantores}>
        <li className={Style.li}>Reginaldo Rossi</li>
        <li className={Style.li}>Sidney Magal</li>
        <li className={Style.li}>Cauby Peixoto</li>
        <li className={Style.li}>Genival Lacerda</li>
        <li className={Style.li}>Wando</li>
        <li className={Style.li}>Amado Batista</li>
        <li className={Style.li}>Tiririca</li>
        <li className={Style.li}> Banda Calypso</li>
        <li className={Style.li}>Waldick Soriano</li>
      </ul>
    </>
  );
}
