export const ColoredSquare = (props) => {
  const { message, side, color, children } = props;
  const styles = {
    coloredSquareStyle: {
      width: side || "50px",
      height: side || "50px",
      backgroundColor: color,
    },
    messageStyle: {
      fontWeight: "bold",
    },
  };

  // Ici mettre des fonctions utiles à CE composant

  return (
    <div style={styles.coloredSquareStyle}>
      <p style={styles.messageStyle}>{message}</p>

      {children}
    </div>
  );
};
