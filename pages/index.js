import puppeteer from "puppeteer";

export default ({ data }) => {
  return <div>{data}</div>;
}

export async function getServerSideProps(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://kumamate.net/vip/");
  const elementHandle = await page.waitForSelector(".vipborder");

  const data = await page.evaluate(element => element.textContent, elementHandle);
  
  await browser.close();

  return {
    props: {
      data:data
    },
  };
}

