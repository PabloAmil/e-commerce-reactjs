import './Loader.css'

const Loader = ({ loading }) => {

    if (loading)
        return <></>
        
    return(
        <div className="loader-container">
            <h2 className='loading'>Cargando</h2>
            <div className="spinner"></div>
        </div>
    )
}

export default Loader


