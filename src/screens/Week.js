import { useEffect, useState } from "react";
import '../styles/screens/Week.css';
import Header from '../components/Header.js';
import BackButton from '../components/BackButton.js';
import TopicSelector from '../components/TopicSelector.js';
import { useParams } from "react-router-dom";
const TOTAL_WEEKS = 2;

const Week = () => {
    const { index: weekNumber } = useParams();

    const [topics, setTopics] = useState([]);
    const [headerText, setHeaderText] = useState(null);

    const getWeekTitle = async (index) => {
        const response = await fetch(`../content/week-names.txt`);
        let text = await response.text();
        for(let i = 0; i < TOTAL_WEEKS; i++){
            let title = text.substring(0, text.indexOf("\n"));
            if(index == i) return title;
            text = text.substring(text.indexOf("\n")+1);
        }
    };
    
    const getTopics = async (week) => {
        let output = [];
        for(let i = 0; i < 7; i++){
            const response = await fetch(`../content/${week}/${week}-${i}.md`);
            const text = await response.text();
            const title = text.substring(text.indexOf("# ")+2, text.indexOf("\n"));
            if(title !== "!DOCTYPE html>")output.push(title);
        }
        return output;
    };

    useEffect(() => {
        getWeekTitle(weekNumber)
        .then(t=>setHeaderText(t));

        getTopics(weekNumber)
        .then(t => setTopics(t));
    }, []);

    const onTopicClick = (dayNumber) => {
        window.location.href = `./${weekNumber}/day/${dayNumber}`;
    };

    let topicList = topics.length === 0 ? (
        <Header style={{textAlign: "center"}}>Loading</Header>
    ) : topics.map((item, index) => {
        return (
            <TopicSelector
                key={index}
                props={{
                    topic: item,
                    week: index,
                    timeMetric: "day",
                    onClick: () => {onTopicClick(index)}
                }}
                >
            </TopicSelector>
        );
    })

    return(
        <div className="container">
            <div className="header">
                <BackButton/>
                <img className='logo 'src='../logo.svg'></img>
            </div>
            <Header style={{ alignSelf: "center", textAlign: "center" }}>Week {weekNumber}: {headerText || "Loading"}</Header>
            <div className="topic-list">
                {topicList}
            </div>
        </div>
    )
}

export default Week;