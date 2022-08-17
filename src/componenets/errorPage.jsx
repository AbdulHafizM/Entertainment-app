import './section.scss'

const ErrorPage = () => {
    return(
        <div className="error">
            <h1>Page not found</h1>
            <p>Click to go back to home page <a className='return-btn' href='/'>Click here</a></p>
        </div>
    )
}

export default ErrorPage