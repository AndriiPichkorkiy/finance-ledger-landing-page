import person1 from "../../../assests/images/team/person1.jpg";
import person1_2x from "../../../assests/images/team/person1@2x.jpg";
import person1Webp from "../../../assests/images/team/person1.webp";
import person1Webp2x from "../../../assests/images/team/person1@2x.webp";

import person2 from "../../../assests/images/team/person2.jpg";
import person2_2x from "../../../assests/images/team/person2@2x.jpg";
import person2Webp from "../../../assests/images/team/person2.webp";
import person2Webp2x from "../../../assests/images/team/person2@2x.webp";

import person3 from "../../../assests/images/team/person3.jpg";
import person3_2x from "../../../assests/images/team/person3@2x.jpg";
import person3Webp from "../../../assests/images/team/person3.webp";
import person3Webp2x from "../../../assests/images/team/person3@2x.webp";

export const team = [
  {
    src: person1,
    alt: "person1 alt",
    jpg: {
      x1: person1,
      x2: person1_2x,
    },
    webp: {
      x1: person1Webp,
      x2: person1Webp2x,
    },
    name: "John Doe",
    post: "President",
  },
  {
    src: person2,
    alt: "person2 alt",
    jpg: {
      x1: person2,
      x2: person2_2x,
    },
    webp: {
      x1: person2Webp,
      x2: person2Webp2x,
    },

    name: "Jane Doe",
    post: "Vice President",
  },
  {
    src: person3,
    alt: "person3 alt",
    jpg: {
      x1: person3,
      x2: person3_2x,
    },
    webp: {
      x1: person3Webp,
      x2: person3Webp2x,
    },

    name: "Steve Smith",
    post: "Marketing Head",
  },
];
