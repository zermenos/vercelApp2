import React from "react";
import "./App.css";
import openURL from "@stdlib/utils-open-url";

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
            fetch("https://vercelapp2-backend.onrender.com/api/sign-in", {
              mode: "cors",
            })
              .then((r) =>
                Promise.all([Promise.resolve(r.headers.get("x-id")), r.json()])
              )
              .then(([id, data]) => {
                console.log(data);
                Verify();
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

function Verify() {
  const hostUrl = "https://vercelapp2-frontend.onrender.com";
  const callbackURL = "/api/callback";
  const sessionId = 1;
  const verificationRequest = {
    backUrl: hostUrl,
    finishUrl: hostUrl,
    logoUrl: hostUrl,
    name: "Everi",
    zkQueries: [
      {
        circuitId: "credentialAtomicQuerySigV2",
        id: 1724187394,
        query: {
          allowedIssuers: [
            "*",
            //"did:iden3:privado:main:2ScrbEuw9jLXMapW3DELXBbDco5EURzJZRN1tYj7L7",
          ],
          context:
            "https://raw.githubusercontent.com/anima-protocol/claims-polygonid/main/schemas/json-ld/pol-v1.json-ld",
          type: "AnimaProofOfLife",
          credentialSubject: {
            human: {
              $eq: true,
            },
          },
        },
      },
    ],

    callbackUrl: `${hostUrl}${callbackURL}?sessionId=${sessionId}`,
    //audience,
    verifierDid:
      "did:polygonid:polygon:amoy:2qQ68JkRcf3xrHPQPWZei3YeVzHPP58wYNxx2mEouR",
  };
  // Encode the verification request to base64
  const base64EncodedVerificationRequest = btoa(
    JSON.stringify(verificationRequest)
  );
  return (
    // Open the Polygon ID Verification Web Wallet with the encoded verification request
    openURL(`https://wallet.privado.id/#${base64EncodedVerificationRequest}`)
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
