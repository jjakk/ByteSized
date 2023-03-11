import '../styles/screens/Home.css';
import Header from '../components/Header.js';
import TopicSelector from '../components/TopicSelector.js'

const Home = () => {

    let topics = [
                {topic: "Basic Computing", completed : true, week: 1}, 
                {topic: "Basic Python", completed: false, week: 2},
                {topic: "Basic OOP", completed: false, week: 3}
            ]

    let topicList = topics.map((item, index) => {
        return <TopicSelector key={index} props={item}></TopicSelector>
    })

    return(
        <div className="container">
            <img className='logo 'src='./logo.svg'></img>
            <Header>Weekly Bytes</Header>
            {topicList}
        </div>
    )
}

export default Home