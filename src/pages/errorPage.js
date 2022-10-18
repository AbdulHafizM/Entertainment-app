import '../App.css'

const ErrorPage = () => {
    return(
        <div className="error">
            <h5>Page not found</h5>
            <p className='error-text'>Click <a className='return-btn' href='/'>here</a> to go back to home page</p>
        </div>
    )
}

export default ErrorPage