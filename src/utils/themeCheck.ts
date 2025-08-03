export const themeCheck = () => {
  try {
    const userTheme = window.localStorage && localStorage.getItem('theme');
    const isSystemThemeDark = window.matchMedia(
      '(prefers-color-scheme:dark)'
    ).matches;
    if (userTheme === 'dark' || (!userTheme && isSystemThemeDark)) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};

export const themeSwitch = () => {
  try {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  } catch (e) {}
};

export const themeColorSwitch = (isDarkMode: boolean) => {
  const light: Array<{ name: string; hex: string }> = [
    { name: 'background', hex: '#FFFFFF' },
    { name: 'section', hex: 'F9FCFF' },
    { name: 'card', hex: '#FFFFFF' },
    { name: 'pop', hex: '#FFFFFF' },
    { name: 'overlay', hex: '#000000' },
  ];
  const dark: Array<{ name: string; hex: string }> = [
    { name: 'background', hex: '#1A1C1F' },
    { name: 'section', hex: '#232528' },
    { name: 'card', hex: '#282A2C' },
    { name: 'pop', hex: '#2C2E31' },
    { name: 'overlay', hex: '#000000' },
  ];

  const colors = isDarkMode ? dark : light;

  colors.forEach(({ name, hex }) => {
    const rgb = HEX2RGBA(hex);
    document.documentElement.style.removeProperty(`--color-${name}`);
    document.documentElement.style.setProperty(
      `--color-${name}`,
      rgb.join(' ')
    );
  });
};

//hex validation check
export function validHEX(hex: string) {
  if (typeof hex !== 'string') {
    return false;
  }
  const reg = new RegExp(/^\#?[0-9a-fA-F]{6,8}$/);
  return reg.test(hex);
}

//HEX → RGBA
export function HEX2RGBA(hex: string): Rgba {
  if (!validHEX(hex)) {
    throw new Error(`'${hex}' is not valid hex format!`);
  }
  let temp = hex.replace('#', '');
  let len = temp.length / 2;
  let rgba: string[] = [];
  for (let i = 0; i < len; i++) {
    let hTarget = temp.substring(i * 2, (i + 1) * 2);
    //alpha value(0~1)
    if (i === 3) {
      rgba.push(String(parseInt(hTarget, 16) / 255));
    } else {
      //r,g,b value (0~255)
      rgba.push(String(parseInt(hTarget, 16)));
    }
  }
  return rgba as Rgba;
}
