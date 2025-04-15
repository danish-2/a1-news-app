import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "3b8f2e0322fc44e9ac2e5d38fd8097ca";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        // let dt = jsonData.articles.slice(0, 10)
        setNewsData(jsonData.articles);

    }

    useEffect(() => {
        getData()
    }, [])

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <nav>
                <div>
                    <h1 className='headline'>A1 News</h1>
                </div>
                <ul style={{ display: "flex", gap: "11px" }}>
                    {/* <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
                    <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a> */}

                </ul>
                <div className='searchBar'>
                    <input type='text' placeholder='Search News' value={search} onChange={handleInput} />
                    <button onClick={getData}>Search</button>
                </div>
            </nav>
            <div>
                <p className='head'>Stay Update with Trending News</p>
            </div>
            <div className='categoryBtn'>
                <button onClick={userInput} value="sports">Sports</button>
                <button onClick={userInput} value="politics">Politics</button>
                <button onClick={userInput} value="entertainment">Entertainment</button>
                <button onClick={userInput} value="health">Health</button>
                <button onClick={userInput} value="fitness">Fitness</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>
        </div>
    )
}

export default Newsapp