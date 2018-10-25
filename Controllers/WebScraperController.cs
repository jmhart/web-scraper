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
            var urlResource = new UrlResource()
            {
                Url = url
            };
            return Ok(urlResource);
        }
    }
}