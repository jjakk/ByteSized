import { useEffect, useState } from "react";
import '../styles/screens/Home.css';
import Header from '../components/Header.js';
import TopicSelector from '../components/TopicSelector.js';
const TOTAL_WEEKS = 2;

const Home = () => {
    const [weekTitles, setWeekTitles] = useState([]);

    const getWeekTitles = async () => {
        let output = [];
        const response = await fetch(`./content/week-names.txt`);
        let text = await response.text();
        for(let i = 0; i < TOTAL_WEEKS; i++){
            let title = text.substring(0, text.indexOf("\n"));
            output.push(title);
            text = text.substring(text.indexOf("\n")+1);
        }
        
        return output;
    };

    useEffect(() => {
        getWeekTitles()
        .then(t => setWeekTitles(t));
    }, []);

    const onTopicClick = (weekNumber) => {
        window.location.href = `./week/${weekNumber}`;
    };

    let topicList = weekTitles.length === 0 ? (
        <Header style={{textAlign: "center"}}>Loading</Header>
    ) : weekTitles.map((item, index) => {
        return <TopicSelector key={index} props={{topic: item, week: index, onClick: () => {onTopicClick(index)} }}></TopicSelector>
    })

    return(
        <div className="container">
            <img className='logo' src='./logo.svg'></img>
            <Header style={{alignSelf: "center"}}>Weekly Bytes</Header>
            <div className="topic-list">
                {topicList}
            </div>
        </div>
    )
}

export default Home;