import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <div className="container">
      <h2 className="heading">🚀 Welcome to Homepage!</h2>
      <div className="articles">
        <h2>
          <Link to="/articles">Articles Page</Link>
        </h2>
      </div>
      <div className="peoples-page">
        <h2>
          <Link to="/peoples">Peoples Page</Link>
        </h2>
      </div>
      <div className="books-page">
        <h2>
          <Link to="/books">Books Page</Link>
        </h2>
      </div>
    </div>
  );
}
