const cheerio = require("cheerio");
const axios = require("axios");

const NEWS_URL = "https://turkish-football.com/"
const newsData = []
async function getNewsData(url){

    try{
        const response = await axios.get(url);
            
        const $=cheerio.load(response.data)

        const news = $("#tdi_86");
        console.log(news.length)
        news.each(function(){
            
            const imageUrl= $(this).find("div:nth-child(1) div div.td-image-container div a span").css('background-image').toString();
            const newsUrl= $(this).find("div:nth-child(1) div div.td-image-container div a").attr('href').toString();
            const newsCaption = $(this).find("div:nth-child(1) div div.td-module-meta-info h3 a").text();
            const newsSpan= $(this).find("div:nth-child(1) div div.td-module-meta-info div.td-excerpt").text();

            newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});

        });
        // console.log(newsData)

        const news2 = $("#tdi_86");
        console.log(news2.length)
        news2.each(function(){
            
            const imageUrl = $(this).find("div:nth-child(2) div div.td-image-container div a span").css('background-image').toString();
            const newsUrl= $(this).find("div:nth-child(2) div div.td-image-container div a").attr('href').toString();
            const newsCaption = $(this).find("div:nth-child(2) div div.td-module-meta-info h3 a").text();
            const newsSpan= $(this).find("div:nth-child(2) div div.td-module-meta-info div.td-excerpt").text();

            newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});

        });

        const news3 = $("#tdi_86");
        console.log(news3.length)
        news3.each(function(){
            
            const imageUrl = $(this).find("div:nth-child(3) div div.td-image-container div a span").css('background-image').toString();
            const newsUrl= $(this).find("div:nth-child(3) div div.td-image-container div a").attr('href').toString();
            const newsCaption = $(this).find("div:nth-child(3) div div.td-module-meta-info h3 a").text();
            const newsSpan= $(this).find("div:nth-child(3) div div.td-module-meta-info div.td-excerpt").text();

            newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});

        });

        // const news4 = $("#tdi_86");
        // console.log(news4.length)
        // news4.each(function(){
            
        //     const imageUrl = $(this).find("div:nth-child(4) div div.td-image-container div a span").css('background-image').toString();
        //     const newsUrl= $(this).find("div:nth-child(4) div div.td-image-container div a").attr('href').toString();
        //     const newsCaption = $(this).find("div:nth-child(4) div div.td-module-meta-info h3 a").text();
        //     const newsSpan= $(this).find("div:nth-child(4) div div.td-module-meta-info div.td-excerpt").text();

        //     newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});

        // });

        const news5 = $("#tdi_86");
        console.log(news5.length)
        news5.each(function(){
            
            const imageUrl = $(this).find("div:nth-child(5) div div.td-image-container div a span").css('background-image').toString();
            const newsUrl= $(this).find("div:nth-child(5) div div.td-image-container div a").attr('href').toString();
            const newsCaption = $(this).find("div:nth-child(5) div div.td-module-meta-info h3 a").text();
            const newsSpan= $(this).find("div:nth-child(5) div div.td-module-meta-info div.td-excerpt").text();

            newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});

        });

        const news6 = $("#tdi_86");
        console.log(news6.length)
        news6.each(function(){
            
            const imageUrl = $(this).find("div:nth-child(6) div div.td-image-container div a span").css('background-image').toString();
            const newsUrl= $(this).find("div:nth-child(6) div div.td-image-container div a").attr('href').toString();
            const newsCaption = $(this).find("div:nth-child(6) div div.td-module-meta-info h3 a").text();
            const newsSpan= $(this).find("div:nth-child(6) div div.td-module-meta-info div.td-excerpt").text();

            newsData.push({imageUrl, newsUrl ,newsCaption, newsSpan});
        });


        // const news10 = $("#tdi_86 div:nth-child(1)");
        // console.log(news10.length)
        // news10.each(function(){
            
        //     // const imageUrl= $(this).find(" div.td-image-container div a").text();
        //     //const newsSpan = $(this).find(" div:nth-child(%d) div div.td-module-meta-info div.td-excerpt", counter).text();
        //     //const birth= $(this).find("td:nth-child(4)").text();

        //     //    if(newsSpan.length > 1){
        //     //     newsData.push({newsSpan});
        //     //    }

        // });

        // const news11 = $("#tdi_86 div:nth-child(1)");
        // console.log(news11.length)
        // news11.each(function(){
            
        //     // const imageUrl= $(this).find(" div.td-image-container div a").text();
        //     //const newsSpan = $(this).find(" div:nth-child(%d) div div.td-module-meta-info div.td-excerpt", counter).text();
        //     //const birth= $(this).find("td:nth-child(4)").text();

        //     //    if(newsSpan.length > 1){
        //     //     newsData.push({newsSpan});
        //     //    }

        // });
    
           
        console.log(newsData)
    }
    catch(err){
        console.log(err);
    }
}

getNewsData(NEWS_URL);