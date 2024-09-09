import React from "react";
import "./App.css";

//const base_url = window.location.origin + window.location.pathname;

function App() {
  return (
    <>
      {/* HEADER */}
      <header>
        <h1 className="main-content">Everi</h1>
      </header>

      <main className="main-content">
        <Button />
      </main>
      <main className="main-content">
        <Link />
      </main>
    </>
  );
}

function Button() {
  return (
    <>
      <div>
        <button
          className="btn-qr"
          onClick={() => {
            fetch(
              "https://vercel-app2-git-main-zermenos-projects.vercel.app/api/sign-in"
            )
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

export default App;
