import React from 'react';
import './App.css';

const App: React.FC = () => {
    const handleClick = (query: string) => {
        window.open(`https://www.google.com/search?q=${query}`);
    }
    const cities = ['Tokyo', 'NewYork', 'London'];
    const rows = cities.map((city => {
        return (
            <div className="city" onClick={() => { handleClick(city) }}>
                <p>{city}</p>
            </div>
        )
    }));
    return (
        <div className="App">
            {rows}
        </div>
    );
}

export default App;
