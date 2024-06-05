import React, { useState } from 'react';
import api from '../../api';


/**
 * A component to create a new document.
 *
 * @component
 */
const CreateDocumentForm: React.FC = () => {

  // State variables for form
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [requiredSignatures, setRequiredSignatures] = useState(1);

  /**
   * Handles the form submission.
   *
   * @param {React.FormEvent} e - The form event.
   * @return {Promise<void>} A promise that resolves when the operation is complete.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
  
    // Create the document
    return api.post('/documents', {
      title,
      content,
      required_signatures: requiredSignatures,
    })
      .then(response => {
        // Log the success
        console.log('Document created:', response.data);
  
        // Reset the form
        setTitle('');
        setContent('');
        setRequiredSignatures(1);
      })
      .catch(error => {
        // Log the error
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
