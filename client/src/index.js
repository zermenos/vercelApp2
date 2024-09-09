import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
//import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <main className="main-content">
      <Button />
    </main>
    <main className="main-content">
      <Link />
    </main>
  </React.StrictMode>
);
const base_url = window.location.origin + window.location.pathname;
function Button() {
  return (
    <>
      <div>
        <button
          className="btn-qr"
          onClick={() => {
            fetch(base_url + "api/sign-in")
              .then((r) =>
                Promise.all([Promise.resolve(r.headers.get("x-id")), r.json()])
              )
              .then(([id, data]) => {
                console.log(data);
                return id;
              })

              .catch((err) => console.log(err));
          }}
        >
          Verify me
        </button>
      </div>
    </>
  );
}

function Link() {
  return (
    <div>
      Return to main page
      <a href="https://everimx.com" target="_blank">
        <p>everimx.com</p>
      </a>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
