// Website related settings
const settings = {
    isSplash: true, // Change this to false if don't want Splash screen.
};

//SEO Related settings
const seo = {
    title: "Nguyen Son Portfolio",
    description: "A fusion of creativity and strategic thinking",
    og: {
        title: "Nguyen Son Portfolio",
        type: "website",
        url: "https://soncryptoz.github.io/",
    },
};

//Home Page
const greeting = {
    title: "Nguyen Son",
    logo_name: "Nson",
    nickname: "Web Developer",
    subTitle: [
        "Designing websites faster than you can say 'HTML'",
        "Making the web look good and work better",
        "Fixing bugs and taking names",
        "I Google things like a Pro"
    ],
    resumeLink:
        "https://drive.google.com/file/d/1yXcjE6a2a5RkelH4iKrPYcQzjhQ6DZaK/view?usp=sharing", // link cv
    portfolio_repository: "https://github.com/SonCryptoz",
    githubProfile: "https://github.com/SonCryptoz",
};

const socialMediaLinks = [
    {
        name: "Github",
        link: "https://github.com/SonCryptoz",
        fontAwesomeIcon: "fa-github",
        backgroundColor: "#181717",
    },
    {
        name: "Gmail",
        link: "mailto:xorscript182@gmail.com",
        fontAwesomeIcon: "fa-google",
        backgroundColor: "#D14836",
    },
    {
        name: "Facebook",
        link: "https://www.facebook.com/nguyenngocson.nguyen.1426",
        fontAwesomeIcon: "fa-facebook",
        backgroundColor: "#1877F2",
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/son_intl/",
        fontAwesomeIcon: "fa-instagram",
        backgroundColor: "#E4405F",
    },
];

const skills = {
    data: [
        {
            title: "Front-End Development",
            fileName: "FullStackImg",
            skills: [
                "Building responsive, high-performance web applications using React, Next.js, TypeScript, and Tailwind CSS.",
                "Optimizing page load speed, SEO, and ensuring seamless cross-device compatibility.",
                "Integrating and managing stateful data workflows with RESTful APIs.",
            ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "SCSS",
                    fontAwesomeClassname: "simple-icons:sass",
                    style: {
                        color: "#CC6699",
                    },
                },
                {
                    skillName: "Tailwind CSS",
                    fontAwesomeClassname: "simple-icons:tailwindcss",
                    style: {
                        color: "#06B6D4",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "simple-icons:javascript",
                    style: {
                        backgroundColor: "#000000",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "TypeScript",
                    fontAwesomeClassname: "devicon:typescript",
                    style: {
                        backgroundColor: "#000000",
                        color: "#007acc",
                    },
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "NextJS",
                    fontAwesomeClassname: "devicon:nextjs",
                    style: {
                        color: "#FFFFFF",
                    },
                },
            ],
        },
        {
            title: "Back-End Development",
            fileName: "DataScienceImg",
            skills: [
                "Developing scalable RESTful APIs with Node.js and Express for production applications.",
                "Designing and optimizing relational and NoSQL databases using MongoDB, MySQL, and Supabase.",
                "Implementing secure authentication, role-based access control, and robust data protection standards.",
            ],
            softwareSkills: [
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "logos:nodejs-icon",
                    style: {
                        color: "#339933",
                    },
                },
                {
                    skillName: "ExpressJS",
                    fontAwesomeClassname: "skill-icons:expressjs-dark",
                    style: {
                        color: "#ffffff",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "devicon-plain:mongodb",
                    style: {
                        color: "#55AD47",
                    },
                },
                {
                    skillName: "Supabase",
                    fontAwesomeClassname: "simple-icons:supabase",
                    style: {
                        color: "#3ECF8E",
                    },
                },
                {
                    skillName: "MySQL",
                    fontAwesomeClassname: "devicon-plain:mysql",
                    style: {
                        color: "#1A6897",
                    },
                },
            ],
        },
    ],
};

// Education Page
const competitiveSites = {
    competitiveSites: [
        // {
        //   siteName: "F8",
        //   iconifyClassname: "simple-icons:leetcode",
        //   style: {
        //     color: "#F79F1B",
        //   },
        //   profileLink: "https://leetcode.com",
        // },
    ],
};

const degrees = {
    degrees: [
        {
            title: "Hai Duong University",
            subtitle: "Bachelor of Information Technology",
            logo_path: "dhhd.png",
            alt_name: "ITUHD",
            duration: "2021 - 2025",
            descriptions: [
                "Built a solid foundation in Data Structures & Algorithms, Database Management Systems, Computer Networks, and Operating Systems.",
                "Specialized in Web Development: HTML, CSS, JavaScript, React, and Node.js — spanning UI design to client-server architecture.",
                "Hands-on experience developing CRUD applications, authentication systems, RESTful APIs, and adopting Git workflows in software development.",
            ],
            website_link: "https://uhd.edu.vn/",
        },
    ],
};

const certifications = {
    certifications: [
        // {
        //   title: "Cloud Architecture",
        //   subtitle: "- Qwiklabs",
        //   logo_path: "gcp_logo.png",
        //   certificate_link:
        //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
        //   alt_name: "GCP",
        //   color_code: "#4285F499",
        // },
    ],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Work & Internships",
    description:
        "Full-Stack Developer Intern at Nam Anh Digital Media & Technology Co., Ltd., building and deploying production-ready web solutions for real-world clients. Responsible for responsive UI development, performance optimization, and collaborating across teams throughout the project lifecycle.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Work Experience",
            work: true,
            experiences: [
                {
                    title: "Front-End Developer Intern",
                    company:
                        "Nam Anh Digital Media & Technology Co., Ltd.",
                    company_url:
                        "https://github.com/SonCryptoz/Nhom-Kinh-Nhat-Kim",
                    logo_path: "nhat-kim-logo.png",
                    duration: "16-02-2025",
                    location: "Hai Duong, Vietnam",
                    description:
                        "Developed a commercial showcase website for Nhat Kim Aluminum & Glass JSC, delivering a responsive layout, modern UI, and smooth multi-device experience.",
                    color: "#ee3c26",
                },
                {
                    title: "Full-Stack Developer Intern",
                    company:
                        "Nam Anh Digital Media & Technology Co., Ltd.",
                    company_url:
                        "https://github.com/SonCryptoz/Linh-Kien-Nam-Anh",
                    logo_path: "namanh_logo.png",
                    duration: "02-01-2025",
                    location: "Hai Duong, Vietnam",
                    description:
                        "Engineered an e-commerce platform for the company, focusing on product management and order processing workflows. Successfully deployed and maintained the site in production to support active business operations.",
                    color: "#000000",
                },
                {
                    title: "Product Marketing & Promotion",
                    company:
                        "Nam Anh Digital Media & Technology Co., Ltd.",
                    company_url: "#",
                    logo_path: "social_media.png",
                    duration: "24-11-2024",
                    location: "Hai Duong, Vietnam",
                    description:
                        "Curated and produced engaging tech product content across social channels. Managed affiliate marketing campaigns and analyzed traffic performance to optimize conversion rates and drive sales.",
                    color: "#ee3c26",
                },
            ],
        },
    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description:
        "A showcase of Full-Stack, Front-End, and Back-End web applications I have built and deployed, utilizing ReactJS, NodeJS, MongoDB, and modern web technologies.",
    avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
    title: "Publications",
    description: "Some of my published Articles, Blogs and Research.",
    avatar_image_path: "projects_image.svg",
};

const publications = {
    data: [
        // {
        //   id: "neuro-symbolic-sudoku-solver",
        //   name: "Neuro-Symbolic Sudoku Solver",
        //   createdAt: "2023-07-02T00:00:00Z",
        //   description: "Paper published in KDD KiML 2023",
        //   url: "",
        // },
        // {
        //   id: "mdp-diffusion",
        //   name: "MDP-Diffusion",
        //   createdAt: "2023-09-19T00:00:00Z",
        //   description: "Blog published in Paperspace",
        //   url: "",
        // },
        // {
        //   id: "consistency-models",
        //   name: "Consistency Models",
        //   createdAt: "2023-10-12T00:00:00Z",
        //   description: "Blog published in Paperspace",
        //   url: "",
        // },
    ],
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        profile_image_path: "animated_son.png",
        description:
            "I'm always open to discussing new opportunities, creative ideas, or potential collaborations. Feel free to connect with me via email or social media!",
    },
    blogSection: {
        title: "Blogs",
        subtitle:
            "Writing about modern web development trends, tutorials, and hands-on coding experiences.",
        avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
        title: "Location",
        subtitle: "Hai Duong / Hai Phong, Vietnam",
        locality: "Hai Phong",
        country: "VIE",
        region: "Hai Phong",
        postalCode: "01234",
        streetAddress: "An Ninh",
        avatar_image_path: "address_image.svg",
        location_map_link: "https://maps.app.goo.gl/KQ62LCffH16o92z9A",
    },
    phoneSection: {
        title: "",
        subtitle: "+84 987 349 519",
    },
};

export {
    settings,
    seo,
    greeting,
    socialMediaLinks,
    skills,
    competitiveSites,
    degrees,
    certifications,
    experience,
    projectsHeader,
    publicationsHeader,
    publications,
    contactPageData,
};
