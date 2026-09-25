export const site = {
  name: "S.R. Portable Cabins",
  tagline: "Premium Portable Cabin Manufacturer & Supplier",
  description:
    "Founded in 2021, S. R. Portable Cabins is a leading manufacturer and supplier of premium portable cabins, office cabins, storage cabins, toilet cabins and accommodation cabins.",
  email: "enquiry@srcabins.in",
  phones: ["9000220980", "9000220983"],
  phoneDisplay: "9000220980 / 9000220983",
  whatsapp: "https://wa.me/919000220980",
  address:
    "Plot. No: 302, Near Mamidpally, Shamshabad to Mamidipally Airport Road, Balapur, Hyderabad, Telangana – 500005",
  logo: "/images/2025_09_logo.png",
  logoIcon: "/images/2025_09_logo-icon.png",
  footerLogo: "/images/2025_09_footer-logo.png",
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    youtube: "https://www.youtube.com/",
    linkedin: "https://www.linkedin.com/",
  },
  branches: [
    {
      title: "Hyderabad Office",
      address:
        "Plot. No: 302, Near Mamidpally, Shamshabad- Mamidipally Airport Road, Balapur, Hyderabad, Telangana – 500005",
      email: "enquiry@srcabins.in",
      phone: "9000220980 / 9000220983",
    },
    {
      title: "Ranchi Office",
      address:
        "Khata No. – 46, Plot no -269, Dandai Futkal Toli, Simaliya, Kanke, Ranchi, Jharkhand 835222",
      email: "salesranchi@srcabins.in",
      phone: "9000220912 / 7337510900",
    },
  ],
} as const;

export type Service = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  body: string[];
};

export const services: Service[] = [
  {
    slug: "portable-cabins",
    title: "Portable Cabins",
    image: "/images/2025_09_portable-cabins.jpeg",
    excerpt:
      "At the heart of our operation are the core values of hard work and integrity, ensuring every cabin meets the highest standards.",
    body: [
      "At the heart of our operation are the core values of hard work and integrity. These principles empower us to manage a broad product portfolio with confidence and commitment, ensuring that every cabin we produce meets the highest standards.",
      "Our portable cabins are built for site offices, temporary workplaces and multi-purpose outdoor use with durable finishes and custom layouts.",
    ],
  },
  {
    slug: "accommodation-cabins",
    title: "Accommodation Cabins",
    image: "/images/2025_09_accommodation-cabins.jpeg",
    excerpt:
      "Durable exterior portable cabins engineered to withstand harsh weather for site offices, guardhouses, storage and accommodations.",
    body: [
      "Durability is at the forefront of our Exterior Portable Cabins, engineered to withstand harsh weather conditions.",
      "These cabins are perfect for outdoor applications such as site office cabins, guardhouse cabins, storage cabins, toilet cabins or accommodations.",
    ],
  },
  {
    slug: "portable-office-cabins",
    title: "Portable Office Cabins",
    image: "/images/2023_06_IMG_20230221_131137.jpg",
    excerpt:
      "Efficient professional workspaces for construction sites, remote projects and temporary office setups.",
    body: [
      "Our Portable Office Cabins are crafted to provide efficient and professional workspaces wherever needed.",
      "They are particularly beneficial for construction sites, remote projects, or temporary office setups with customizable interiors.",
    ],
  },
  {
    slug: "security-cabins",
    title: "Security Cabins",
    image: "/images/2025_09_security-cabin-1.jpg",
    excerpt:
      "Portable security rooms and temporary offices with strong insulation for construction sites and facilities.",
    body: [
      "Portable Security Cabins are often used for security rooms, temporary offices on construction sites, and other similar uses.",
      "Because they insulate better than many other materials, they are widely preferred for guard posts and entry control cabins.",
    ],
  },
  {
    slug: "portable-bunk-houses",
    title: "Portable Bunk Houses",
    image: "/images/2025_09_portable-bunk-houses.jpeg",
    excerpt:
      "Accurate fabricated bunk houses offered in standard and customized portable patterns.",
    body: [
      "Portable bunk houses fabricated with accuracy for workforce accommodation and remote site living.",
      "Our entire product range is extremely portable in nature and is offered in standard patterns with exceptional attributes.",
    ],
  },
  {
    slug: "toilet-and-urinal-cabins",
    title: "Toilet and Urinal Cabins",
    image: "/images/2025_09_toilet-urinals.jpeg",
    excerpt:
      "Portable toilets and urinal cabins with customized designs and specifications.",
    body: [
      "We are leading manufacturers of Portable Toilets and related hygiene cabin products.",
      "Our wide range of Porta Toilet units can be customized for design, capacity and site requirements.",
    ],
  },
  {
    slug: "cargo-shipping-container",
    title: "Cargo Shipping Container",
    image: "/images/2025_09_cargo-shipping-container.jpeg",
    excerpt:
      "Robust transportable steel units used to store, secure and ship goods across transportation modes.",
    body: [
      "A storage container — commonly known as a shipping or freight container — is a robust, transportable steel unit used to store, secure, and ship goods.",
      "We supply and customize containers for storage and converted commercial applications.",
    ],
  },
  {
    slug: "container-shops-cafes",
    title: "Container Shops / Cafe’s",
    image: "/images/2025_09_shop-and-cafe-cabin.jpeg",
    excerpt:
      "Innovative retail and dining spaces created by repurposing shipping containers.",
    body: [
      "Container shops and cafés are innovative retail and dining spaces created by repurposing shipping containers.",
      "These modular structures offer a stylish, eco-conscious and flexible alternative for modern businesses.",
    ],
  },
  {
    slug: "farm-house-cabins",
    title: "Farm House Cabins",
    image: "/images/2025_09_frame-house.jpeg",
    excerpt:
      "Compact prefab living units with farmhouse-style design for practical rural living.",
    body: [
      "Farm House Cabins are compact, prefab living units that often incorporate farmhouse-style design elements.",
      "These cabins are designed for practicality and mobility, making them ideal for rural settings.",
    ],
  },
];

export const whyChoose = [
  {
    title: "Customer Support",
    text: "We are co-operative and are ready to help regarding any issue even after the delivery of the products.",
    icon: "/images/2025_09_technical-support.png",
  },
  {
    title: "Vision & Mission",
    text: "Ensuring superior quality and craftsmanship in every product.",
    icon: "/images/2025_09_vision.png",
  },
  {
    title: "Quality Policy",
    text: "We deliver durable, innovative, and reliable portable cabin solutions with a strong focus on quality, safety, customer satisfaction, and continuous improvement in every project.",
    icon: "/images/2025_09_compliant.png",
  },
  {
    title: "Corporate Value",
    text: "Our values are built on quality, integrity, innovation, and customer satisfaction. We believe in delivering durable solutions, fostering trust, promoting sustainability, and ensuring excellence in every project we undertake across India.",
    icon: "/images/2025_09_aboutus-img-2.png",
  },
];

export const stats = [
  { value: "2021", label: "Established Year" },
  { value: "250+", label: "Manpower" },
  { value: "700+", label: "Completed Projects" },
  { value: "600+", label: "Satisfied Clients" },
];

export const testimonials = [
  {
    name: "Danish Ahmad",
    role: "General Manager",
    quote:
      "SR Portable Cabins is doing a fantastic job in manufacturing portable cabins. I have visited the site for a portable conference cabin and the product I received was exactly what was assured by the SR team, superior in quality with good interior finishing. I’m glad that I chose SR Portable Cabin services who are dedicated towards serving the best to their customers.",
  },
  {
    name: "Vijay Kumar",
    role: "Marketing Manager",
    quote:
      "It was refreshing to work with a Modular Structure manufacturer who actually delivered on time and with quality up to our standards. Mr. Vijay Kumar is a pleasure to work with and continues to be associated with us through multiple projects.",
  },
  {
    name: "Pankaj Sir",
    role: "Business Owner",
    quote:
      "S R Portable Cabins has consistently delivered on their promises, providing cost-effective solutions without sacrificing quality. I wholeheartedly recommend them to anyone seeking reliable and modern portable cabin solutions.",
  },
  {
    name: "Murali Sir",
    role: "Purchase Manager",
    quote:
      "S.R. Portable Cabins is one of the best in the industry when it comes to quality, reliability, and design. Their cabins are strong, weather-resistant, and built with excellent finishing. The team is highly professional, delivers on time, and always ensures customer satisfaction.",
  },
];

export const aboutContent = {
  title: "About Us",
  image: "/images/2025_09_aboutus-img-2.png",
  heroImage: "/images/2025_07_IMG_20211021_220222-scaled.jpg",
  paragraphs: [
    "Founded in 2021, we have quickly established ourselves as a leading manufacturer and supplier of premium portable cabins and office cabins, storage cabins, toilet cabins, and accommodation cabins. Our mission is to combine traditional craftsmanship with cutting-edge design, delivering modern solutions that meet the diverse needs of our clients across various industries.",
    "At S. R. Portable Cabins, we are guided by our core values of hard work and integrity. These principles empower us to manage a broad and expanding product portfolio.",
    "We pride ourselves on our commitment to excellence, using advanced manufacturing techniques and a customer-centric approach. Our goal is to exceed your expectations and build lasting partnerships with our clients.",
  ],
  pillars: [
    {
      title: "Interior Portable Cabins",
      text: "Thoughtfully designed for comfort and functionality, ideal for living quarters, training spaces, and more.",
    },
    {
      title: "Exterior Portable Cabins",
      text: "Built to endure the elements, providing robust solutions for outdoor applications such as site offices and storage units.",
    },
    {
      title: "Portable Office Cabins",
      text: "Tailored to create efficient and professional work environments wherever you need them.",
    },
  ],
};

export const principles = {
  title: "Our Principles",
  image: "/images/2025_09_our-priciples.jpeg",
  text: "Our journey as a leading manufacturer and supplier of portable cabins and office cabins is guided by a set of core principles that reflect our commitment to quality, innovation, and customer satisfaction. These principles form the foundation of our operations and drive our continuous growth and success.",
};

export const badges = [
  { src: "/badges/iso.jpg", alt: "ISO" },
  { src: "/badges/msme.png", alt: "MSME" },
  { src: "/badges/make-in-india.jpg", alt: "Make in India" },
  { src: "/badges/startupindia.jpg", alt: "Startup India" },
];

export const clientLogos = [
  "/images/2025_08_Adani_Power-200x185.png",
  "/images/2023_06_lt-245x185.png",
  "/images/2025_08_download-4.jpg",
  "/images/2025_08_download-5.png",
  "/images/2025_08_download-6-204x185.jpg",
  "/images/2025_08_download-8.png",
  "/images/2025_08_DDDD-260x185.webp",
  "/images/2025_08_raj2.png",
  "/images/2025_08_575723_v6-260x185.jpg",
  "/images/2025_08_images.png",
];

export const galleryImages = [
  "/images/2025_09_portable-cabins.jpeg",
  "/images/2025_09_accommodation-cabins.jpeg",
  "/images/2025_09_security-cabin-1.jpg",
  "/images/2025_09_portable-bunk-houses.jpeg",
  "/images/2025_09_toilet-urinals.jpeg",
  "/images/2025_09_cargo-shipping-container.jpeg",
  "/images/2025_09_shop-and-cafe-cabin.jpeg",
  "/images/2025_09_frame-house.jpeg",
  "/images/2023_06_IMG_20230221_131137.jpg",
  "/images/2025_07_IMG_20211021_220222-scaled.jpg",
  "/images/2023_06_Toilet-Urinals4.jpeg",
  "/images/2023_06_Toilet-Urinals7.jpeg",
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({
      label: s.title,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact Us", href: "/contact" },
] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
