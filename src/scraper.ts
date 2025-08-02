import puppeteer from 'puppeteer';

export async function fetchRenderedHTML(url: string): Promise<string> {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 });
    return await page.content();
  } finally {
    await browser.close();
  }
}
