export function Button(props) {
  // const [light , setLight ] = useState(light)

  const { themeColor, themeChange, children } = props;

  return (
    <button
      class={themeColor === "light" ? "light" : "dark"}
      onClick={themeChange}
    >
      {children}
    </button>
  );
}
