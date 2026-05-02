const urls = [
  'https://ibb.co/WWkLfzFv',
  'https://ibb.co/dd6Wyyp',
  'https://ibb.co/v4jJGJJ8',
  'https://ibb.co/Zp5C8Q6V',
  'https://ibb.co/cSr1bkDq',
  'https://ibb.co/99rM93W6'
];

async function main() {
  for (const url of urls) {
    const res = await fetch(url);
    const html = await res.text();
    const match = html.match(/<meta property="og:image" content="([^"]+)"/);
    if (match) {
      console.log(`URL: ${url} -> ${match[1]}`);
    } else {
      console.log(`URL: ${url} -> No image found`);
    }
  }
}

main();
