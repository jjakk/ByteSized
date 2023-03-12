import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import "../styles/screens/Lesson.css";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Button from "../components/Button";
import Header from "../components/Header";
import Subheader from "../components/Subheader";

const Lesson = () => {
    const { weekNumber, dayNumber } = useParams();
    const [headerText, setHeaderText] = useState(null);
    const [lesson, setLesson] = useState(null);

    const getLesson = async (week, day) => {
        const response = await fetch(`/content/${week}/${week}-${day}.md`);
        const text = await response.text();
        return text;
    };

    useEffect(() => {
        getLesson(weekNumber, dayNumber)
        .then(t => {
            const l = t.substring(t.indexOf("\n")+1);
            t = t.substring(t.indexOf("# ")+2, t.indexOf("\n"));
            setHeaderText(t);
            setLesson(l)
        });
    }, []);

    const onNextLesson = () => {
        window.location.href = `../../${weekNumber}/day/${parseInt(dayNumber)+1}`;
    };

    const onBack = () => {
        window.location.href = `../../${weekNumber}`;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const text = document.querySelector(".tutor input[type='text']").value;
        document.querySelector(".tutor input[type='text']").value = "";
        // Send a post request to localhost:3001 with the text in the body
        const data = { message: text, context: lesson };
        fetch("http://localhost:3001", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        }
        );
    };

    return (
        <div className="container">
            <div className="header">
                <BackButton src="../../../back.svg" onClick={onBack}/>
                <img className='logo 'src='../../../logo.svg'></img>
            </div>

            <div className="lower-header">
                <Subheader style={{ alignSelf: "center", textAlign: "center", textDecoration: "underline" }}>Lesson {weekNumber}:{dayNumber}</Subheader>
                <Header style={{ alignSelf: "center", textAlign: "center" }}>{headerText || "Loading"}</Header>
            </div>
            <ReactMarkdown className="ReactMarkdown">{lesson}</ReactMarkdown>
            <img src={`../../../content/img/${weekNumber}/${weekNumber}-${dayNumber}_Image.svg`}></img>
            <Button onClick={onNextLesson}>Next lesson</Button>
            <form className="tutor" onSubmit={onSubmit}>
                <input type="text" placeholder="Ask a question" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Lesson;