import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('/api/hello')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setMessage(data.message)
                setLoading(false)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    }, [])

    return (
        <div className="app">
            <div className="container">
                <div className="card">
                    <div className="icon">🚀</div>
                    <h1 className="title">
                        {loading ? (
                            <span className="loading">Loading...</span>
                        ) : error ? (
                            <span className="error">Error: {error}</span>
                        ) : (
                            <span className="message">{message}</span>
                        )}
                    </h1>
                    <p className="subtitle">React + Python FastAPI</p>
                    <div className="tech-stack">
                        <span className="badge react">React</span>
                        <span className="badge python">Python</span>
                        <span className="badge docker">Docker</span>
                        <span className="badge k8s">Kubernetes</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
