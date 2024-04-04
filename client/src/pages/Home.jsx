import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Home = () => {
  const handleSweet = () => {
    Swal.fire("SweetAlert2 is working!");
  };
  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => toast.success("welcome toast")}>
        toast check
      </button>
      <br />
      <br />
      <button onClick={handleSweet}>sweetAlert check</button>
    </>
  );
};

export default Home;
