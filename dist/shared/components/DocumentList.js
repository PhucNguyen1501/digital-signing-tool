"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = __importDefault(require("../../api"));
/**
 * DocumentList Component.
 *
 * This component is responsible for fetching and displaying
 * a list of documents from the API.
 *
 * @returns {React.ReactElement} The rendered DocumentList component.
 */
const DocumentList = () => {
    // State to hold the documents
    const [documents, setDocuments] = (0, react_1.useState)([]);
    // Fetch the documents from the API
    (0, react_1.useEffect)(() => {
        api_1.default.get('/documents')
            .then(response => {
            setDocuments(response.data);
        })
            .catch(error => {
            // Log the error if any
            console.error('Error fetching documents:', error);
        });
    }, []);
    // Render the DocumentList component
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Documents"),
        react_1.default.createElement("ul", null, documents.map(doc => (react_1.default.createElement("li", { key: doc.document_id },
            react_1.default.createElement("h2", null, doc.title),
            react_1.default.createElement("p", null, doc.content),
            react_1.default.createElement("p", null,
                "Required Signatures: ",
                doc.required_signatures)))))));
};
// Export the DocumentList component
exports.default = DocumentList;
