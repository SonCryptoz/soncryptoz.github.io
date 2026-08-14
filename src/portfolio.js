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
    title: "Nguyễn Sơn",
    logo_name: "Nson",
    nickname: "(^o.o^)",
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
                "Phát triển giao diện web bằng ReactJS, NextJS, TypeScript và Tailwind CSS.",
                "Tối ưu hiệu suất tải trang, SEO và thiết kế responsive đa thiết bị.",
                "Kết nối và xử lý dữ liệu từ nhiều nguồn API.",
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
                "Xây dựng RESTful API bằng Node.js, ExpressJS phục vụ ứng dụng production.",
                "Thiết kế và quản lý cơ sở dữ liệu với MongoDB, MySQL, Supabase.",
                "Triển khai xác thực, phân quyền và bảo mật dữ liệu cho hệ thống.",
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
            title: "Đại học Hải Dương",
            subtitle: "Cử nhân Công nghệ thông tin",
            logo_path: "dhhd.png",
            alt_name: "ITUHD",
            duration: "2021 - 2025",
            descriptions: [
                "Có nền tảng về Cấu trúc dữ liệu & Thuật toán, Cơ sở dữ liệu, Mạng máy tính, Hệ điều hành.",
                "Web Development: HTML, CSS, JavaScript, React, Node.js — từ giao diện đến xử lý dữ liệu client-server.",
                "Thực hành qua các dự án CRUD, authentication, RESTful API; sử dụng Git trong quy trình phát triển phần mềm.",
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
    title: "Kinh nghiệm",
    subtitle: "Làm việc và Thực tập",
    description:
        "Thực tập Full-Stack Developer tại Công ty TNHH Công nghệ và Truyền thông số Nam Anh, trực tiếp xây dựng và triển khai website cho khách hàng thực tế. Chịu trách nhiệm phát triển giao diện, tối ưu hiệu suất và phối hợp cùng đội ngũ trong quy trình phát triển website.",
    header_image_path: "experience.svg",
    sections: [
        {
            title: "Công việc đã làm",
            work: true,
            experiences: [
                {
                    title: "Thực tập sinh Front-End Developer",
                    company:
                        "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
                    company_url:
                        "https://github.com/SonCryptoz/Nhom-Kinh-Nhat-Kim",
                    logo_path: "nhat-kim-logo.png",
                    duration: "16-02-2025",
                    location: "Hải Dương, Việt Nam",
                    description:
                        "Phát triển website quảng cáo nhằm giới thiệu sản phẩm, dịch vụ của Công ty Cổ phần Nhôm kính Nhất Kim, với giao diện responsive và trải nghiệm tối ưu trên đa thiết bị.",
                    color: "#ee3c26",
                },
                {
                    title: "Thực tập sinh Full-Stack Developer",
                    company:
                        "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
                    company_url:
                        "https://github.com/SonCryptoz/Linh-Kien-Nam-Anh",
                    logo_path: "namanh_logo.png",
                    duration: "02-01-2025",
                    location: "Hải Dương, Việt Nam",
                    description:
                        "Phát triển website thương mại điện tử cho công ty, tập trung vào quản lý sản phẩm và quy trình đặt hàng. Đưa website vào vận hành thực tế, phục vụ nhu cầu kinh doanh và khách hàng của doanh nghiệp.",
                    color: "#000000",
                },
                {
                    title: "Tiếp thị và Quảng bá sản phẩm",
                    company:
                        "Công ty TNHH Công nghệ và Truyền thông số Nam Anh",
                    company_url: "#",
                    logo_path: "social_media.png",
                    duration: "24-11-2024",
                    location: "Hải Dương, Việt Nam",
                    description:
                        "Lựa chọn và quảng bá sản phẩm thông qua nội dung trên các nền tảng mạng xã hội. Tạo nội dung giới thiệu sản phẩm, liên kết affiliate và theo dõi hiệu quả nhằm tăng lượt truy cập và thúc đẩy đơn hàng.",
                    color: "#ee3c26",
                },
            ],
        },
    ],
};

// Projects Page
const projectsHeader = {
    title: "Dự án",
    description:
        "Các dự án Website Full-Stack, Front-End và Back-End của tôi đã xây dựng và triển khai thực tế, sử dụng ReactJS, NodeJS, MongoDB cùng nhiều công nghệ khác.",
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
        title: "Liên hệ với tôi",
        profile_image_path: "animated_son.png",
        description:
            "Tôi luôn sẵn sàng đón nhận những cơ hội và thử thách mới. Nếu bạn có câu hỏi hoặc muốn hợp tác, hãy liên hệ qua email hoặc các kênh mạng xã hội bên dưới.",
    },
    blogSection: {
        title: "Blogs",
        subtitle:
            "Tôi thường chia sẻ kiến thức và trải nghiệm về các công nghệ mới trên blog cá nhân.",
        avatar_image_path: "blogs_image.svg",
    },
    addressSection: {
        title: "Địa chỉ",
        subtitle: "Hải Dương, Hải Phòng, Việt Nam",
        locality: "Hải Phòng",
        country: "VIE",
        region: "Hải Phòng",
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
