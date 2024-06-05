import React, { useEffect, useState } from 'react';
import api from '../../api';

interface Document {
  document_id: number;
  title: string;
  content: string;
  required_signatures: number;
}

const DocumentList: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    api.get('/documents')
      .then(response => {
        setDocuments(response.data);
      })
      .catch(error => {
        console.error('Error fetching documents:', error);
      });
  }, []);

  return (
    <div>
      <h1>Documents</h1>
      <ul>
        {documents.map(doc => (
          <li key={doc.document_id}>
            <h2>{doc.title}</h2>
            <p>{doc.content}</p>
            <p>Required Signatures: {doc.required_signatures}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentList;
