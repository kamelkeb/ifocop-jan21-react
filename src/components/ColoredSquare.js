export const ColoredSquare = ({ message, side, color, children }) => {
  return (
    <div
      style={{
        width: side || "50px",
        height: side || "50px",
        backgroundColor: color,
      }}
    >
      <p>{message}</p>

      {children}
    </div>
  );
};
