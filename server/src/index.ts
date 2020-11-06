import express from 'express'
// import fetch from 'node-fetch'

const googleNewsAPI = require("google-news-json");

const app = express()

app.get('/', async (req, res) => {
    res.send('Hello World')
})

app.get('/geo/:countryName', async (req, res) => {
    const { countryName } = req.params
    // const url = `https://news.google.com/news/rss/headlines/section/geo/{countryName}`
    let news = await googleNewsAPI.getNews(googleNewsAPI.GEO, countryName, "ja-JP");
    res.send(news.text)
})

app.listen(3000)