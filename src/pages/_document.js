import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap&text=1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM%22%27%28%29%2C%2D%2E%3A"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap&text=1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM%22%27%28%29%2C%2D%2E%3A"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                // Change these if you use something different in your hook.
                const themeKey = 'russ-theme';
                const classNameDark = 'dark';
                const classNameLight = 'light';

                function setClassThemeOnDocumentBody(darkMode) {
                  if (darkMode === 'dark') {
                    document.documentElement.classList.add(classNameDark);
                  } else {
                    document.documentElement.classList.remove(classNameDark);
                  }
                }
                  let localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(themeKey);
                  } catch (err) {}
                  const localStorageExistsTheme = localStorageTheme !== null;

                  // Determine the source of truth
                  if (localStorageExistsTheme) {
                    // source of truth from localStorage
                    setClassThemeOnDocumentBody(localStorageTheme);
                  } else {
                    // default theme is light theme
                    localStorage.setItem(themeKey, 'light');
                  }
              }());
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
