import cases1 from "../../../assests/images/cases/cases1.jpg";
import cases1WEBP from "../../../assests/images/cases/cases1.webp";
import cases1_2x from "../../../assests/images/cases/cases1@2x.jpg";
import cases1WEBP_2x from "../../../assests/images/cases/cases1@2x.webp";

import cases2 from "../../../assests/images/cases/cases2.jpg";
import cases2WEBP from "../../../assests/images/cases/cases2.webp";
import cases2_2x from "../../../assests/images/cases/cases2@2x.jpg";
import cases2WEBP_2x from "../../../assests/images/cases/cases2@2x.webp";

import cases3 from "../../../assests/images/cases/cases3.jpg";
import cases3WEBP from "../../../assests/images/cases/cases3.webp";
import cases3_2x from "../../../assests/images/cases/cases3@2x.jpg";
import cases3WEBP_2x from "../../../assests/images/cases/cases3@2x.webp";

import cases4 from "../../../assests/images/cases/cases4.jpg";
import cases4WEBP from "../../../assests/images/cases/cases4.webp";
import cases4_2x from "../../../assests/images/cases/cases4@2x.jpg";
import cases4WEBP_2x from "../../../assests/images/cases/cases4@2x.webp";

import cases5 from "../../../assests/images/cases/cases5.jpg";
import cases5WEBP from "../../../assests/images/cases/cases5.webp";
import cases5_2x from "../../../assests/images/cases/cases5@2x.jpg";
import cases5WEBP_2x from "../../../assests/images/cases/cases5@2x.webp";

import cases6 from "../../../assests/images/cases/cases6.jpg";
import cases6WEBP from "../../../assests/images/cases/cases6.webp";
import cases6_2x from "../../../assests/images/cases/cases6@2x.jpg";
import cases6WEBP_2x from "../../../assests/images/cases/cases6@2x.webp";

const images = [
  {
    src: cases1_2x,
    loading: "lazy",
    alt: "A majestic eagle soars high above the rugged mountain peaks, its wings spread wide as it scans the landscape below.",
    jpg: {
      x1: cases1,
      x2: cases1_2x,
    },
    webp: {
      x1: cases1WEBP,
      x2: cases1WEBP_2x,
    },
  },
  {
    src: cases2_2x,
    loading: "lazy",
    alt: "A vibrant bouquet of freshly picked wildflowers rests on a rustic wooden table, their bright colors and sweet scent filling the room.",
    jpg: {
      x1: cases2,
      x2: cases2_2x,
    },
    webp: {
      x1: cases2WEBP,
      x2: cases2WEBP_2x,
    },
  },
  {
    src: cases3_2x,
    loading: "lazy",
    alt: "A lone figure stands on the edge of a rocky cliff, gazing out at the vast expanse of the ocean, the wind blowing through their hair.",
    jpg: {
      x1: cases3,
      x2: cases3_2x,
    },
    webp: {
      x1: cases3WEBP,
      x2: cases3WEBP_2x,
    },
  },
  {
    src: cases4_2x,
    loading: "lazy",
    alt: "A cozy fireplace crackles and pops, casting a warm and inviting glow over the room, as two friends sit together chatting.",
    jpg: {
      x1: cases4,
      x2: cases4_2x,
    },
    webp: {
      x1: cases4WEBP,
      x2: cases4WEBP_2x,
    },
  },
  {
    src: cases5_2x,
    loading: "lazy",
    alt: "A young child runs through a field of tall grass, their arms outstretched as they embrace the freedom and joy of youth.",
    jpg: {
      x1: cases5,
      x2: cases5_2x,
    },
    webp: {
      x1: cases5WEBP,
      x2: cases5WEBP_2x,
    },
  },
  {
    src: cases6_2x,
    loading: "lazy",
    alt: "A bustling street market in a far-off land, filled with exotic aromas, colorful textiles, and friendly vendors eager to make a sale.",
    jpg: {
      x1: cases6,
      x2: cases6_2x,
    },
    webp: {
      x1: cases6WEBP,
      x2: cases6WEBP_2x,
    },
  },
];

images.forEach((obj) => (obj.style = { width: "85%" }));
const imagesForSlider = images.reduce((acc, obj) => {
  acc.push(obj.jpg.x2);
  return acc;
}, []);

export { images, imagesForSlider };
