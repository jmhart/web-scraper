using Microsoft.AspNetCore.Mvc;
using WebScraper.Controllers.Resources;

namespace WebScraper
{
    [Route("api/web-scraper")]
    public class WebScraperController : Controller
    {
        [HttpGet]
        public IActionResult Get([FromQuery(Name = "url")] string url)
        {
            if (url == null)
                return BadRequest();

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