
const BackButton = (props) => {
    const { src, onClick } = props;

    const defualtOnclick = () => window.history.back();

    return (
        <button
            style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer"
            }}
            onClick={onClick || defualtOnclick}
        >
            <img className='logo 'src={src || '../back.svg'}></img>
        </button>
    );
};

export default BackButton;