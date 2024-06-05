# Digital Signing Tool

This is a digital signing tool application built with TypeScript, Node.js, Express.js, Postgres, and React. The application allows users to upload PDF files and collect digital signatures.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
- [Backend](#backend)
- [Frontend](#frontend)
- [Usage](#usage)

## Features

- User authentication (simplified for demo purposes)
- Upload and store PDF documents
- Display PDFs
- Capture and store digital signatures
- View documents and their signatures

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Postgres
- React
- Multer
- pdf-lib
- react-pdf-viewer
- react-signature-canvas

## Setup and Installation

### Prerequisites

- Node.js and npm
- Postgres

### Backend

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/digital-signing-tool.git
   cd digital-signing-tool
   ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the database:
Create a Postgres database and update the connection string in the index.ts file:
    ```typescript
    const sequelize = new Sequelize('postgres://username:password@localhost:5432/digital_signing_tool');
    ```

4. Run the backend server:
    ```bash
    npm run dev
    ```
    
### Frontend

1. Navigate to the frontend directory:
    ```bash    
    cd frontend
    ```
    
2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```
### Backend documentation
The backend is built with Node.js, Express.js, and Postgres, using TypeScript for type safety.

## Endpoints
* GET / - Test endpoint
* POST /documents - Upload a new document (with PDF file)
* POST /signatures - Add a signature to a document

## Models
* User: Represents a user in the system
* Document: Represents a document to be signed
* Signature: Represents a digital signature on a document
* Field: Represents fields within documents that need to be signed or filled

### Frontend documentation
The frontend is built with React and TypeScript.

## Components
* DocumentList: Displays a list of documents
* CreateDocumentForm: Form to create a new document and upload a PDF
* DocumentViewer: Displays a PDF document and allows the user to add a signature

### Usage
## Creating a Document
* Open the application in your browser (e.g., http://localhost:3000).
* Use the Create Document form to upload a PDF document.

## Viewing and Signing a Document
* Select a document from the list to view it.
* Click the Sign Document button to add a digital signature.

### Contributing
Feel free to open issues or submit pull requests with improvements.

### License
This project is licensed under the MIT License.
