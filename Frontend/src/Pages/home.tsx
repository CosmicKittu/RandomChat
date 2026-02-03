import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>|<Link to="/about">About</Link> |{" "}
        <Link to="/chat">Chat</Link> |<Link to="/login">login</Link>
      </nav>

      <h1>hello from home</h1>
    </>
  );
}

export default Home;
