# Project Name

## Quick Start Guide

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
2. **Google API Credentials**: You need to set up Google API credentials to use the Google Docs API. Follow the [Google API setup guide](https://developers.google.com/docs/api/quickstart/js) to get your `CLIENT_ID` and `API_KEY`.

### Setup

1. **Clone the Repository**:
    ```sh
    git clone https://github.com/pranavmanoj1/RESUME_GENERATOR.git
    cd RESUME_GENERATOR
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your Google API credentials:
    ```env
    VITE_CLIENT_ID=your-client-id
    VITE_API_KEY=your-api-key
    ```

4. **Hard-code the Document ID**:
    Open the [google_docs_api_scripts.js](http://_vscodecontentref_/1) file and add your Document ID:
    ```javascript
    // filepath: /path/to/google_docs_api_scripts.js
    const DOCUMENT_ID = 'your-document-id';
    ```

### Running the Application

1. **Start the Development Server**:
    ```sh
    npm run dev
    ```

2. **Open the Application**:
    Open your browser and navigate to `http://localhost:3000`.

### Using the Application

1. **Authorize**:
    - Click the "Authorize" button to authorize the application to access your Google Docs.

2. **Update Document**:
    - Enter the new text you want to replace in the document.
    - Click the "Update Document" button to apply the changes.

### Project Structure

- [index.html](http://_vscodecontentref_/2): The main HTML file.
- [vite.config.js](http://_vscodecontentref_/3): Configuration for Vite.
- [google_docs_api_scripts.js](http://_vscodecontentref_/4): Script for handling Google Docs API interactions.
- [src](http://_vscodecontentref_/5): Contains the React components and main application logic.
- [api.js](http://_vscodecontentref_/6): Contains the function to send batch updates to Google Docs.
- [package.json](http://_vscodecontentref_/7): Project metadata and dependencies.

### Additional Commands

- **Build the Project**:
    ```sh
    npm run build
    ```

- **Preview the Build**:
    ```sh
    npm run preview
    ```

- **Lint the Code**:
    ```sh
    npm run lint
    ```

## License

This project is licensed under the MIT License - see the LICENSE file for details.