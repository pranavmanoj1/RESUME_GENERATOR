# RESUME GENERATOR

## Project Overview: Google Docs API Integration

### Introduction

I recently worked on an exciting project that integrates a web application with Google Docs. This project allows users to fill out a form on a website, and then automatically updates a Google Doc with the information provided. Here's a simple explanation of what I did and how it works.

### Key Features

- **User-Friendly Form**: The website features a user-friendly form where users can enter their general information, education details, and practical experiences.
- **Dynamic Fields**: Users can add multiple entries for practical experiences, making the form flexible and comprehensive.
- **Google Docs Integration**: Once the form is submitted, the information is automatically sent to a Google Doc, updating placeholders with the user's data.

### How It Works

1. **Form Submission**: Users fill out the form on the website with their personal and professional details.
2. **Data Collection**: When the form is submitted, the data is collected and organized.
3. **Google Docs Update**: The collected data is sent to a Google Doc using Google's API (Application Programming Interface). The placeholders in the document are replaced with the user's information.

### Potential Applications

This project can be adapted for various use cases beyond just updating personal information. One potential application is generating tedious invoices. Here's how it could work:

1. **Invoice Form**: Modify the form to include fields relevant to invoices, such as:
    - Client Name
    - Client Address
    - Invoice Number
    - Date of Issue
    - List of Services or Products
    - Quantity and Price for each item
    - Total Amount
2. **Template Document**: Create a Google Docs template for the invoice with placeholders for each of the fields mentioned above.
3. **Automated Generation**: When the form is submitted, the collected data can be mapped to the corresponding placeholders in the Google Docs template, generating a complete and accurate invoice.

### Benefits

- **Efficiency**: Automates the creation of invoices, saving time and reducing manual effort.
- **Accuracy**: Ensures that all necessary information is included and correctly formatted, reducing the risk of errors.
- **Professionalism**: Generates consistent and professional-looking resumes every time.

### Technical Details (Simplified)

- **React**: The website is built using React, a popular JavaScript library for building user interfaces.
- **Chakra UI**: For styling and layout, I used Chakra UI, which provides pre-designed components that are easy to use and look great.
- **Google API**: The integration with Google Docs is done using Google's API, which allows the website to communicate with Google services securely.

### Future Security Issues

While this project demonstrates the potential of integrating web applications with Google Docs, it is important to consider future security issues:

- **Data Privacy**: Ensure that sensitive user data is handled securely and in compliance with data protection regulations.
- **API Security**: Protect the API keys and credentials to prevent unauthorized access to the Google Docs API.
- **Access Control**: Implement proper access control mechanisms to ensure that only authorized users can update the Google Docs.
- **Encryption**: Use encryption to protect data in transit and at rest.
- **Regular Audits**: Conduct regular security audits to identify and address potential vulnerabilities.

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

## How it should work
https://www.youtube.com/watch?v=EG157ZjIgRk
