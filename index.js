const request = require("request");
const cheerio = require("cheerio");

request("https://www.imdb.com/chart/boxoffice", function (err, res, body) {
  if (err) {
    throw err;
  }

  const dom = cheerio.load(body);

  dom("table tbody tr").each(function () {
    const title = dom(this).find(".titleColumn a").text().trim();
    const value = dom(this).find(".ratingColumn span").text().trim();

    console.log(`O filme ${title} possue o valor de ${value}`);
  });
});
