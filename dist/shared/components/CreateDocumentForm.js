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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const api_1 = __importDefault(require("../../api"));
/**
 * A component to create a new document.
 *
 * @component
 */
const CreateDocumentForm = () => {
    // State variables for form
    const [title, setTitle] = (0, react_1.useState)('');
    const [content, setContent] = (0, react_1.useState)('');
    const [requiredSignatures, setRequiredSignatures] = (0, react_1.useState)(1);
    /**
     * Handles the form submission.
     *
     * @param {React.FormEvent} e - The form event.
     * @return {Promise<void>} A promise that resolves when the operation is complete.
     */
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        // Create the document
        return api_1.default.post('/documents', {
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
    });
    return (react_1.default.createElement("form", { onSubmit: handleSubmit },
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, "Title:"),
            react_1.default.createElement("input", { type: "text", value: title, onChange: e => setTitle(e.target.value) })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, "Content:"),
            react_1.default.createElement("textarea", { value: content, onChange: e => setContent(e.target.value) })),
        react_1.default.createElement("div", null,
            react_1.default.createElement("label", null, "Required Signatures:"),
            react_1.default.createElement("input", { type: "number", value: requiredSignatures, onChange: e => setRequiredSignatures(parseInt(e.target.value)) })),
        react_1.default.createElement("button", { type: "submit" }, "Create Document")));
};
exports.default = CreateDocumentForm;
