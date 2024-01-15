import './globals.css';
import { nunito_sans } from './fonts/fonts';
export const metadata = {
  title: 'Countries of the World',
  description:
    "Explore the world with our straightforward and engaging app. Discover countries, learn about their population, region, and capital. Immerse yourself in global diversity through flag images that capture each nation's unique essence. An easy-to-use experience for quick exploration and learning about our fascinating planet. Explore countries in an instant!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className}  bg-SnowWhite dark:bg-Navy`}>
        {children}
      </body>
    </html>
  );
}
