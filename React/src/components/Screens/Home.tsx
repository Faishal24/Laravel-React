import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <div className="p-2">
      <h1 className="text-xl font-bold mb-3">Path yang tersedia:</h1>
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </li>
        <li>
          <Link to="/student-list">
            <Button>Student List</Button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
