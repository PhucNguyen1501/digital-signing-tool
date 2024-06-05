import React from 'react';
import DocumentList from './shared/components/DocumentList';
import CreateDocumentForm from './shared/components/CreateDocumentForm';

/**
 * This is the main component of the application.
 * It's responsible for rendering the DocumentList and CreateDocumentForm.
 */
const App: React.FC = () => {

  /**
   * Renders the App component.
   *
   * @return {JSX.Element} The rendered component.
   */
  return (
    <div className="App">
      {/* Title of the application */}
      <h1>Digital Signing Tool</h1>

      {/* Form to create a new document */}
      <CreateDocumentForm />

      {/* List of existing documents */}
      <DocumentList />
    </div>
  );
};

export default App;
