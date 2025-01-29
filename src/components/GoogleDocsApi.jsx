import React, { useEffect } from "react";

const GoogleDocsAPI = () => {
  useEffect(() => {
    const apiRoot = document.getElementById("api-root");
    if (apiRoot) {
      apiRoot.innerHTML = `
        <div>
          <p>Please authorise</p>
          <button id="authorize_button">Authorize</button>
          <button id="signout_button">Sign Out</button>
          <div>
            <input type="text" id="docId" placeholder="Document ID" />
            <input type="text" id="newText" placeholder="New Text" />
            <button onclick="updateParameter()">Update Document</button>
            <div id="status"></div>
          </div>
          <pre id="content" style="white-space: pre-wrap;"></pre>
        </div>
      `;
    }
  }, []);

  return null; // React doesn't render UI here; it's managed by the API.
};

export default GoogleDocsAPI;
