import React, { useState } from 'react';
import api from '../../api';

const CreateDocumentForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [requiredSignatures, setRequiredSignatures] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    api.post('/documents', {
      title,
      content,
      required_signatures: requiredSignatures,
    })
      .then(response => {
        console.log('Document created:', response.data);
        setTitle('');
        setContent('');
        setRequiredSignatures(1);
      })
      .catch(error => {
        console.error('Error creating document:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
      </div>
      <div>
        <label>Required Signatures:</label>
        <input type="number" value={requiredSignatures} onChange={e => setRequiredSignatures(parseInt(e.target.value))} />
      </div>
      <button type="submit">Create Document</button>
    </form>
  );
};

export default CreateDocumentForm;
