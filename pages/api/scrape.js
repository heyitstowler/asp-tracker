import puppeteer from "puppeteer";

export async function scrape() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://portal.311.nyc.gov/");
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
