import {useState} from "react";
import './App.css';

function App() {
    const [stage, setStage] = useState(1)

    return (
        <>
            <h1>questionnaire</h1>
            <QuestionContent/>
        </>
    )
}

function QuestionContent() {
    return (
        <>
            <div className="question-content">
                <QuestionInfo/>
                <QuestionAnswers/>
                <QuestionHint/>
                <div className="question-buttons">
                    <button>Last</button>
                    <button>Next</button>
                </div>
            </div>
        </>
    )
}

function QuestionInfo() {
    return (
        <>
            <div className="question-info">
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                <p>Futher information: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis ipsa
                    ratione repellendus. Ab asperiores dicta, earum explicabo magni neque quia!</p>
                <QuestionSnippetCode />
            </div>
        </>
    )
}

function QuestionSnippetCode() {
    return (
        <>
            <div className="question-snippet-code">
                <pre>
                    <code>
                        const http = require('http');
                    </code>
                </pre>
            </div>
        </>
    )
}

function QuestionAnswers() {
    return (
        <>
            <div className="question-answer">
                <ul>
                    <li>Answers</li>
                    <li>Answers</li>
                    <li>Answers</li>
                </ul>
            </div>
        </>
    )
}

function QuestionHint() {
    return (
        <>
            <div className="question-hint">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facilis hic minima modi, quo
                    ratione? Ad, consectetur dignissimos dolor dolore eos est ex excepturi exercitationem expedita
                    harum in odio quasi sapiente, sint soluta sunt temporibus voluptatem voluptates! Harum,
                    repellat, totam.</p>
            </div>
        </>
    )
}

export default App
