using System.Net;

namespace WebScraper
{
    public class Scraper
    {
        private readonly string url;
        public Scraper(string url)
        {
            this.url = url;
        }

        public string GetHtml()
        {
            string htmlCode = string.Empty;
            using (WebClient client = new WebClient())
            {
                htmlCode = client.DownloadString("http://google.com");
            }
            return htmlCode;
        }
    }
}