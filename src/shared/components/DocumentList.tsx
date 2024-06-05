import React, { useEffect, useState } from 'react';
import api from '../../api';

interface Document {
  document_id: number;
  title: string;
  content: string;
  required_signatures: number;
}


/**
 * DocumentList Component.
 *
 * This component is responsible for fetching and displaying
 * a list of documents from the API.
 *
 * @returns {React.ReactElement} The rendered DocumentList component.
 */
const DocumentList: React.FC<{}> = (): React.ReactElement => {

  // State to hold the documents
  const [documents, setDocuments] = useState<Document[]>([]);

  // Fetch the documents from the API
  useEffect(() => {
    api.get('/documents')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        // Log the error if any
        console.error('Error fetching documents:', error);
      });
  }, []);

  // Render the DocumentList component
  return (
    <div>
      {/* Heading */}
      <h1>Documents</h1>

      {/* List of documents */}
      <ul>
        {/* Map the documents to list items */}
        {documents.map(doc => (
          <li key={doc.document_id}>

            {/* Document Title */}
            <h2>{doc.title}</h2>

            {/* Document Content */}
            <p>{doc.content}</p>

            {/* Required Signatures */}
            <p>Required Signatures: {doc.required_signatures}</p>

          </li>
        ))}
      </ul>
    </div>

  );
};

// Export the DocumentList component
export default DocumentList;
