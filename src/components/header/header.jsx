export default function Header({ title = "Feedback UI" }) {
  return (
    <header>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}
