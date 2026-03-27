import "./card.css";

export default function Card({ children, darkTheme }) {
  return <div className={`card ${darkTheme && "-dark"}`}>{children}</div>;
}
