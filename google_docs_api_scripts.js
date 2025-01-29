/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO: Set your Client ID and API Key
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const API_KEY = import.meta.env.VITE_CLIENT_ID;

const DISCOVERY_DOC = 'https://docs.googleapis.com/$discovery/rest?version=v1';
const SCOPES = 'https://www.googleapis.com/auth/documents.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;

// Attach functions to the global window object
window.gapiLoaded = function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
};

window.gisLoaded = function gisLoaded() {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    callback: '', // defined later
  });
  gisInited = true;
  maybeEnableButtons();
};

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  gapiInited = true;
  maybeEnableButtons();
}

function maybeEnableButtons() {
  if (gapiInited && gisInited) {
    document.getElementById('authorize_button').style.visibility = 'visible';
  }
}

window.handleAuthClick = function handleAuthClick() {
  tokenClient.callback = async (resp) => {
    if (resp.error !== undefined) {
      throw resp;
    }
    document.getElementById('signout_button').style.visibility = 'visible';
    document.getElementById('authorize_button').innerText = 'Refresh';
    await printDocTitle();
  };

  if (gapi.client.getToken() === null) {
    tokenClient.requestAccessToken({ prompt: 'consent' });
  } else {
    tokenClient.requestAccessToken({ prompt: '' });
  }
};

window.handleSignoutClick = function handleSignoutClick() {
  const token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
    document.getElementById('content').innerText = '';
    document.getElementById('authorize_button').innerText = 'Authorize';
    document.getElementById('signout_button').style.visibility = 'hidden';
  }
};

async function printDocTitle() {
  try {
    const response = await gapi.client.docs.documents.get({
      documentId: ''// replace with your document ID,
    });
    const doc = response.result;
    document.getElementById('content').innerText = `Document ${doc.title} successfully found.`;
  } catch (err) {
    document.getElementById('content').innerText = err.message;
  }
}

window.updateParameter = async function updateParameter() {
  const documentId = document.getElementById('docId').value;
  const newText = document.getElementById('newText').value;

  try {
    const request = {
      requests: [
        {
          replaceAllText: {
            containsText: {
              text: '{{parameter}}',
              matchCase: true,
            },
            replaceText: newText,
          },
        },
      ],
    };

    await gapi.client.docs.documents.batchUpdate({
      documentId: documentId,
      resource: request,
    });

    document.getElementById('status').innerText = 'Document updated successfully!';
  } catch (error) {
    document.getElementById('status').innerText = `Error: ${error.message}`;
  }
};