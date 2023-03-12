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
            <ReactMarkdown className="ReactMarkdown" children={lesson}/>
            <Button onClick={onNextLesson}>Next lesson</Button>
        </div>
    );
};

export default Lesson;