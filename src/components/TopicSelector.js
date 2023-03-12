import '../styles/components/TopicSelector.css'

const TopicSelector = (props) => {
    const {completed, week, topic} = props.props;
    return(
        <div className={`TopicSelector ${completed ? "complete" : ""}`}>
            <p>Week {week}: {topic}</p>
            <div className='circle'></div>
        </div>
    )
}

export default TopicSelector