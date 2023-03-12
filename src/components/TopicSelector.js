import '../styles/components/TopicSelector.css'

const TopicSelector = (props) => {
    const {completed, week, topic} = props.props;

    const onClick = () => {
        window.location.href = `./week/${week}`;
    };

    return(
        <button
            className={`TopicSelector ${completed ? "complete" : ""}`}
            onClick={onClick}
        >
            <p>Week {week}: {topic}</p>
            <div className='circle'></div>
        </button>
    )
}

export default TopicSelector