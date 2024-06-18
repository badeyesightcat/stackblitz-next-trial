import { Inter, Comfortaa } from "next/font/google"; // Gwendolyn,

const inter = Inter({ subsets: ["latin"] });
// const gwendolyn = Gwendolyn({
//   subsets: ["latin"],
//   weight: ["400", "700"],
// });
const comfortaa = Comfortaa({ subsets: ["latin"] });

const fonts = {
  inter,
  // gwendolyn,
  comfortaa,
};

export default fonts;
