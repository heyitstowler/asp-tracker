import puppeteer from "puppeteer";

export async function scrape() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--disable-gpu",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--timeout=30000",
      "--no-first-run",
      "--no-sandbox",
      "--no-zygote",
      "--single-process",
      "--proxy-server='direct://'",
      "--proxy-bypass-list=*",
      "--deterministic-fetch",
    ],
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36"
  );
  await page.goto("https://portal.311.nyc.gov/");
  await page.setViewport({ width: 1680, height: 1050 });
  const data = await page.evaluate(() => {
    const status = document.getElementsByClassName("cal-alert")[0].innerHTML;
    return {
      status,
    };
  });
  await browser.close();
  return data;
}

export default async function handler(req, res) {
  const data = await scrape();
  res.json(data);
}
