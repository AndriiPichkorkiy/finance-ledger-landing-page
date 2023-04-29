import blogPoster from '../../../assests/images/home/blog.jpg'
import blogPoster2x from '../../../assests/images/home/blog@2x.jpg'
import blogPosterWebp from '../../../assests/images/home/blog.webp'
import blogPosterWebp2x from '../../../assests/images/home/blog@2x.webp'

import { BlogSection, BlogPosterWrapper, BlogContent } from "./Blog.styled";
import { ButtonBlog } from "../../Buttons";
import { TitleH2 } from '../../TitleH2';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';

const img = {
  src: blogPoster,
  alt: "Blog",
  jpg: {
    x1: blogPoster,
    x2: blogPoster2x,
  },
  webp: {
    x1: blogPosterWebp,
    x2: blogPosterWebp2x,
  },
}

export default function Blog() {
  return (
    <BlogSection id="blog">
      <BlogPosterWrapper>
        <ResponsiveImg settings={img} />
      </BlogPosterWrapper>
      <BlogContent>
        <time dateTime='2020-04-16'>April 16 2020</time>
        <TitleH2>Blog Post One</TitleH2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?</p>
        <ButtonBlog />
      </BlogContent>
    </BlogSection>
  )
}
