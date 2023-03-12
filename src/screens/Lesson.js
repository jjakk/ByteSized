import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';
import "../styles/screens/Lesson.css";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
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
            setLesson(t)
            t = t.substring(t.indexOf("# ")+2, t.indexOf("\n"));
            setHeaderText(t);
        });
    }, []);

    return (
        <div className="container">
            <div className="header">
                <BackButton src="../../../back.svg" />
                <img className='logo 'src='../../../logo.svg'></img>
            </div>

            <div className="lower-header">
                <Subheader style={{ alignSelf: "center", textAlign: "center", textDecoration: "underline" }}>Lesson {weekNumber}:{dayNumber}</Subheader>
                <Header style={{ alignSelf: "center", textAlign: "center" }}>{headerText || "Loading"}</Header>
            </div>
            <ReactMarkdown>{lesson}</ReactMarkdown>
        </div>
    );
};

export default Lesson;