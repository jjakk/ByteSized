import { useEffect, useState } from "react";
import '../styles/screens/Home.css';
import Header from '../components/Header.js';
import TopicSelector from '../components/TopicSelector.js';
import { useParams } from "react-router-dom";
const TOTAL_WEEKS = 2;

const Week = () => {
    const { index: weekNumber } = useParams();

    const [topics, setTopics] = useState([]);

    const getWeekTitle = async (index) => {
        const response = await fetch(`./content/week-names.txt`);
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
            const response = await fetch(`./content/${week}/${week}-${i}.md`);
            const text = await response.text();
            const title = text.substring(text.indexOf("# ")+2, text.indexOf("\n"));
            output.push(title);
        }
        return output;
    };

    useEffect(() => {
        getWeekTitle(weekNumber)
        .then(t=>console.log(t));

        getTopics(weekNumber)
        .then(t => setTopics(t));
    }, []);

    console.log(topics);

    /*let topicList = topics.length === 0 ? (
        <Header style={{textAlign: "center"}}>Loading</Header>
    ) : topics.map((item, index) => {
        return <TopicSelector key={index} props={{topic: item, week: index }}></TopicSelector>
    })*/

    return(
        <div className="container">
            <img className='logo 'src='./logo.svg'></img>
            <Header style={{alignSelf: "center"}}>Week {weekNumber}: </Header>
            <div className="topic-list">
                {/*topicList*/}
            </div>
        </div>
    )
}

export default Week;