import { Inter, Gwendolyn } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const gwendolyn = Gwendolyn({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const fonts = {
  inter,
  gwendolyn,
};

export default fonts;
