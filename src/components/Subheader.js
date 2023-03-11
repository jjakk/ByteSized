import '../styles/components/Subheader.css'

const Subheader = (props) => {
    const {children} = props;
    return(
        <h1 className='Subheader'>{children}</h1>
    )
}

export default Subheader;