import { useEffect, useState } from "react";
import '../styles/screens/Home.css';
import Header from '../components/Header.js';
import TopicSelector from '../components/TopicSelector.js';
const TOTAL_WEEKS = 2;

const Home = () => {
    const [topics, setTopics] = useState([]);
    
    const getTopics = () => {
        let output = [];
        for(let i = 0; i < TOTAL_WEEKS; i++){
            for(let j = 0; j < 7; j++){
                fetch(`./content/${i}/${i}-${j}.md`)
                .then((response) => response.text())
                .then(text => {
                    const title = text.substring(text.indexOf("# ")+2, text.indexOf("\n"));
                    console.log(title);
                    setTopics([...topics, { topic: title }]);
                });
            }
        }
    };

    useEffect(() => {
        getTopics();
    }, []);

    /*let topics = [
        {topic: "Basic Computing", completed : true, week: 1}, 
        {topic: "Basic Python", completed: false, week: 2},
        {topic: "Basic OOP", completed: false, week: 3}
    ]*/

    let topicList = topics.length === 0 ? (
        <Header style={{textAlign: "center"}}>Loading</Header>
    ) : topics.map((item, index) => {
        return <TopicSelector key={index} props={item}></TopicSelector>
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

export default Home