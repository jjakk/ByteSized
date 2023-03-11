import '../styles/components/TopicSelector-style.css'

const TopicSelector = (props) => {
    const {completed, week, topic} = props;
    return(
        <div className={`TopicSelector ${completed ? "completed" : ""}`}>
            <p>Week {week}: {topic}</p>
            <div className='circle'></div>
        </div>
    )
}

export default TopicSelector