import { useEffect, useState } from "react";
import '../styles/screens/Home.css';
import Header from '../components/Header.js';
import TopicSelector from '../components/TopicSelector.js';
import { useParams } from "react-router-dom";
const TOTAL_WEEKS = 2;

const Week = (props) => {
    const { week } = props;

    const [topics, setTopics] = useState([]);
    const { index } = useParams();
    console.log(index);
    
    const getTopics = async () => {
        let output = [];
        for(let i = 0; i < TOTAL_WEEKS; i++){
            output.push([]);
            for(let j = 0; j < 7; j++){
                const response = await fetch(`./content/${i}/${i}-${j}.md`);
                const text = await response.text();
                const title = text.substring(text.indexOf("# ")+2, text.indexOf("\n"));
                output[i].push({ topic: title });
            }
        }
        return output;
    };

    useEffect(() => {
        getTopics()
        .then(t => setTopics(t));
    }, []);

    console.log(topics);

    /*let topics = [
        {topic: "Basic Computing", completed : true, week: 1}, 
        {topic: "Basic Python", completed: false, week: 2},
        {topic: "Basic OOP", completed: false, week: 3}
    ]*/

    let topicList = topics.length === 0 ? (
        <Header style={{textAlign: "center"}}>Loading</Header>
    ) : topics.map((item, index) => {
        return <TopicSelector key={index} props={{topic: item, week: index }}></TopicSelector>
    })

    return(
        <div className="container">
            <img className='logo 'src='./logo.svg'></img>
            <Header style={{alignSelf: "center"}}>Weekly Bytes</Header>
            <div className="topic-list">
                {topicList}
            </div>
        </div>
    )
}

export default Week;