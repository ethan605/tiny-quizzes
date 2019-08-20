import FontFaceObserver from 'fontfaceobserver';
import qs from 'qs';

export interface FontFaces {
  NotoSans: string;
}

const NOTO_SANS_PARAMS = {
  display: 'swap',
  family: 'Noto Sans:400,700',
  subset: ['cyrillic', 'cyrillic-ext', 'devanagari', 'greek', 'greek-ext', 'latin-ext', 'vietnamese'],
};

const FONT_HREFS: FontFaces = {
  NotoSans: `https://fonts.googleapis.com/css?${qs.stringify(NOTO_SANS_PARAMS)}`,
};

export default async function loadFont(fontName: keyof FontFaces): Promise<void> {
  const { [fontName]: href } = FONT_HREFS;

  const link = document.createElement('link');
  Object.assign(link, { href, rel: 'stylesheet' });
  link.href = href;

  document.head.appendChild(link);

  const font = new FontFaceObserver(fontName);

  try {
    const data = await font.load();
    console.debug('Font loaded', data);
  } catch (error) {
    console.debug(error);
  }
}
