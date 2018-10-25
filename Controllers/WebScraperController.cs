using Microsoft.AspNetCore.Mvc;
using WebScraper.Controllers.Resources;

namespace WebScraper
{
    [Route("api/web-scraper")]
    public class WebScraperController : Controller
    {
        public WebScraperController()
        {
        }

        [HttpGet]
        public IActionResult Get([FromQuery(Name = "url")] string url)
        {
            var scraper = new Scraper(url);
            var urlResource = new UrlResource()
            {
                Url = url,
                Html = scraper.GetHtml()
            };
            return Ok(urlResource);
        }
    }
}