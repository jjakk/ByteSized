
const BackButton = (props) => {
    const { src } = props;

    return (
        <button
            style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer"
            }}
            onClick={() => window.history.back()}
        >
            <img className='logo 'src={src || '../back.svg'}></img>
        </button>
    );
};

export default BackButton;