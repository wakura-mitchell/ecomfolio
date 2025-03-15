import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { coffeeTable1, coffeeTable2, coffeeTable3, customer1, customer2, tvStand, kist, courtBed, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        coffeeTable: coffeeTable1,
    },
    {
        thumbnail: thumbnailShoe2,
        coffeeTable: coffeeTable2,
    },
    {
        thumbnail: thumbnailShoe3,
        coffeeTable: coffeeTable3,
    },
];

export const statistics = [
    { value: '10+', label: 'Brands' },
    { value: '2', label: 'Shops' },
    { value: '30+', label: 'Customers' },
];

export const products = [
    {
        imgURL: tvStand,
        name: "TV Stand",
        price: "$200.20",
    },
    {
        imgURL: kist,
        name: "Kist",
        price: "$150.00",
    },
    {
        imgURL: coffeeTable3,
        name: "Coffee Table",
        price: "$250.00",
    },
    {
        imgURL: courtBed,
        name: "Court Beds",
        price: "$200.0",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Mitchell Wakura',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Thelma Maunganidze',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Coffee Table", link: "/" },
            { name: "Kist", link: "/" },
            { name: "Court Beds", link: "/" },
            { name: "Contemporary centre table", link: "/" },
            { name: "Chest of Drawers", link: "/" },
            { name: "Tv Stand", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@teerecrafts.com", link: "mailto:teereraishe@gmail.com" },
            { name: "+263 78 394 1707", link: "tel:+263783941707" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];