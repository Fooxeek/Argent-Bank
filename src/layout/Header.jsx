import Nav from "../components/Nav";

export default function Header({ currentUser }) {
  return (
    <header>
      <Nav currentUser={currentUser} />
    </header>
  );
}
