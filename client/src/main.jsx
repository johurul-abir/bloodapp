import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import "./assets/css/bootstrap.min.css";
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
import "./assets/css/feather.css";
import "./assets/plugins/apex/apexcharts.css";
import "./assets/css/custom.css";
import "./index.scss";
import store from "./app/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
