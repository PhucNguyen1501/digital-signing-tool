"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DocumentList_1 = __importDefault(require("./shared/components/DocumentList"));
const CreateDocumentForm_1 = __importDefault(require("./shared/components/CreateDocumentForm"));
/**
 * This is the main component of the application.
 * It's responsible for rendering the DocumentList and CreateDocumentForm.
 */
const App = () => {
    /**
     * Renders the App component.
     *
     * @return {JSX.Element} The rendered component.
     */
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("h1", null, "Digital Signing Tool"),
        react_1.default.createElement(CreateDocumentForm_1.default, null),
        react_1.default.createElement(DocumentList_1.default, null)));
};
exports.default = App;
