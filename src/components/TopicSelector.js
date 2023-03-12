import '../styles/components/TopicSelector.css'

const TopicSelector = (props) => {
    const {
        completed,
        week,
        topic,
        timeMetric="week",
        onClick
    } = props.props;

    const capitalize = c => c.substring(0,1).toUpperCase() + c.substring(1);

    return(
        <button
            className={`TopicSelector ${completed ? "complete" : ""}`}
            onClick={onClick}
        >
            <p>{capitalize(timeMetric)} {week}: {topic}</p>
            <div className='circle'></div>
        </button>
    )
}

export default TopicSelector