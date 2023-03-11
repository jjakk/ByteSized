import '../styles/components/Subheader.css'

const Subheader = (props) => {
    const {children, style} = props;
    return(
        <h1 className='Subheader' style={style}>{children}</h1>
    )
}

export default Subheader;