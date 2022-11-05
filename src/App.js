import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src="kupo.png" className="App-logo" alt="logo" />
                <h1>
                    Jonathan Pham
                </h1>
                <h2>
                    (aka @kupopuffs)
                </h2>
                <h2>
                    pjonathanh (at) gmail.com
                </h2>
                <hr />
                <p>
                    check out my
                </p>
                <div className="socials-container">
                    <span className="socials-col">
                        <a href="https://github.com/kupopuffs" target="_blank" alt="github-link">
                            <img className="socials-logo" src="github.png" alt="github-logo" />
                            <p>
                                code
                            </p>
                        </a>

                    </span>
                    <span className="socials-col">
                        <a href="https://www.linkedin.com/in/jonathan-pham-18037797/" target="_blank" alt="linkedin-link">
                            <img className="socials-logo" src="linkedin.png" alt="linkedin-logo" />
                            <p>
                                work
                            </p>
                        </a>
                    </span>
                    <span className="socials-col">
                        <a href="https://www.instagram.com/kupopharts" target="_blank" alt="instagram-link">
                            <img className="socials-logo" src="instagram.png" alt="instagram-logo" />
                            <p>
                                art
                            </p>
                        </a>
                    </span>
                </div>

                <a className="privacy" href="privacy.txt" target="_blank" alt="privacy-link">
                    privacy.txt
                </a>
            </header>

        </div>
    );
}

export default App;
