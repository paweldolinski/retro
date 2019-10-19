import moviePhoto from '../assets/img/about-1_1.png';
import musicPhoto from '../assets/img/about-1_3.png';
import eatPhoto from '../assets/img/about-1_2.png';
import wearPhoto from '../assets/img/about-1_4.png';

import twitterIcon from '../assets/img/contact-icons/twitter.png';
import facebook from '../assets/img/contact-icons/facebook.png';
import google from '../assets/img/contact-icons/google.png';
import linkedin from '../assets/img/contact-icons/linkedin.png';
import media from '../assets/img/contact-icons/media_10.png';

import blogImage from "../assets/img/blog-images/blog-image.png"
import blogImage2 from "../assets/img/blog-images/blog-image2.jpg"
import blogImage3 from "../assets/img/blog-images/blog-image3.jpg"
import blogImage4 from "../assets/img/blog-images/blog-image4.jpg"
import blogImage5 from "../assets/img/blog-images/blog-image5.jpg"

import slideImage1 from "../assets/img/slider/img1.png";
import slideImage2 from "../assets/img/slider/img2.png";
import slideImage3 from "../assets/img/slider/img3.png";

const apiURL = "https://pixabay.com/api";
const apiKEY = "8421285-61e0ded0b62b92cbc0aaeafbc";
const list = ['music', 'microphone', 'vinyl', 'radio', 'old', 'record', 'gramophone'];

const aboutMe = [{
    img: moviePhoto,
    alt: "movies",
    title: "MOVIES",
    subtitle: "WHAT I WATCH",
    text: `"Clutter is honest! I do believe that has to the users
     <strong> selfexpression </strong>
    Care.Things which is a projector operating system such
    formats are deep and profound and meaningful.It's the
    traditions of data.
    <u> Good desig </u>
    should be different levels.There's no rational alternative.
    That's come to complexity."`
},
{
    img: musicPhoto,
    alt: "music",
    title: "MUSIC",
    subtitle: "WHAT I LISTEN",
    text: `Good design. The content, you'll love
    <strong>  powerpoint should be different. </strong>
    It's about design is that part? Good design is making
    something looks. And aesthetic. And colour defines your
    interface. That cannot be overtly different. That has to
    chance. And restrained, low resolution, but you get rid of
    materials.`
},
{
    img: eatPhoto,
    alt: "FOOD",
    title: "FOOD",
    subtitle: "WHAT I EAT",
    text: `Very honest approach and product. The
    <u> other product </u>
    that changes function like the absence of function. And
    frustrating that products that it's the functional imperative,
    we kept going and frustrating that we are about bringing order
    to be better and less complicated to understand.`
},
{
    img: wearPhoto,
    alt: "clothes",
    title: "CLOTHES",
    subtitle: "WHAT I WEAR",
    text: `Simplicity. Its context. From so many different levels.
    There's real simplicity is. Designing and place of the objects
    we're surrounded by seem trivial. There's
    <strong> no rational alternative. </strong>
    I think that's a very complicated problems without letting
    people have a very easy to mean so much that acknowledges.`
}]

const contactIcons = [{
    img: twitterIcon,
    alt: 'twiter'
},
{
    img: facebook,
    alt: 'facebook'
},
{
    img: google,
    alt: 'google'
},
{
    img: media,
    alt: 'media'
},
{
    img: linkedin,
    alt: 'linkedin'
}]

const blogItem = [{
    img: blogImage,
    title: "The magic wheel",
    date: "JULY 21 // ADMIN // FUN, TRAVEL, TRENDS",
    article: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.Lorem ipsum dolor sit amet
    consectetur adipisicing elit.Voluptate dolores magni ad
    voluptatem corporis repudiandae sunt.`
},
{
    img: blogImage2,
    title: "The magic wheel",
    date: "JULY 21 // ADMIN // FUN, TRAVEL, TRENDS",
    article: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.Lorem ipsum dolor sit amet
    consectetur adipisicing elit.Voluptate dolores magni ad
    voluptatem corporis repudiandae sunt, laboriosam culpa maxime
    adipisci ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.`
},
{
    img: blogImage3,
    title: "The magic wheel",
    date: "JULY 21 // ADMIN // FUN, TRAVEL, TRENDS",
    article: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.Lorem ipsum dolor sit amet
    consectetur adipisicing elit.Voluptate dolores magni ad
    voluptatem corporis repudiandae sunt, laboriosam culpa maxime
    adipisci ipsa!`
},
{
    img: blogImage4,
    title: "The magic wheel",
    date: "JULY 21 // ADMIN // FUN, TRAVEL, TRENDS",
    article: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.Lorem ipsum dolor sit amet
    consectetur adipisicing elit.Voluptate dolores magni ad
    voluptatem corporis repudiandae sunt, laboriosam culpa maxime
    adipisci ipsa!Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.`
},
{
    img: blogImage5,
    title: "The magic wheel",
    date: "JULY 21 // ADMIN // FUN, TRAVEL, TRENDS",
    article: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Consequuntur quia adipisci non voluptate aut tempore aspernatur
    ut odio, itaque repellendus iusto.Lorem ipsum dolor sit amet
    consectetur adipisicing elit.Voluptate dolores magni ad
    voluptatem corporis repudiandae sunt, laboriosam culpa maxime
    adipisci ipsa!`
},]




const sliderImages = [{
    img: slideImage1,
    alt: "slider amplifier"
}, {
    img: slideImage2,
    alt: "slider analogue"
}, {
    img: slideImage3,
    alt: "slider music"
},
]

export default { apiKEY, apiURL, list, aboutMe, contactIcons, blogItem, sliderImages }


