
const logotext = "PATEL";

const meta = {
    title: "Hill Patel - Portfolio",
    description: "Developer, Engineer, Student, Learner, or even Failure – that's me but always evolving. Dedicated software developer specializing in full-stack development, automation, and web scraping. Experienced in Python, JavaScript, React, AWS, and others with a passion for solving complex problems and building innovative solutions.",
};

const introdata = {
    title: "I’m Hill Patel",
    animated: {
        first: "Hello World!",
    },
    service: {
        first: "Web Development",
        second: "Mobile App Development",
        third: "Data Scraping",
        fourth: "Automation Solutions"
    },
    description: {
        first: "I’m a software engineer with a strong foundation in ",
        second: ". I'm committed to building impactful software solutions."
    }
};

const dataabout = {
    title: "A bit about myself",
    aboutme: "I am a dedicated software developer with experience in full-stack development, automation, and web scraping. I thrive on solving complex problems and continuously improving my skills.",
};

const worktimeline = [
    {
        jobtitle: "Software / E-commerce Associate",
        where: "Canadian Outlet",
        date: "Jan 2024 - Present",
    },
    {
        jobtitle: "Freelancer",
        where: "Somewhere",
        date: "Mar 2023 - Present",
    },
    // {
    //     jobtitle: "Sales Associate / Cashier",
    //     where: "Mega Continental - Joe Fresh Pop Up Store",
    //     date: "Jul 2023 - Jan 2024",
    // },
    {
        jobtitle: "Software Developer",
        where: "Grasphopp Pvt. Ltd.",
        date: "Sep 2022 - Mar 2023",
    },
];

const skills = [
    {
        name: "Python",
        value: 90,
    },
    {
        name: "JavaScript",
        value: 85,
    },
    {
        name: "Django",
        value: 80,
    },
    {
        name: "React",
        value: 70,
    },
    {
        name: "SQL",
        value: 80,
    },
];

const services = [
    {
        title: "Full Stack Web Development",
        description: "Building responsive and user-friendly web applications using modern technologies.",
    },
    {
        title: "Automation Solutions",
        description: "Creating automated tools to enhance productivity and efficiency in business processes.",
    },
    {
        title: "Data Scraping",
        description: "Extracting valuable data from websites for market analysis and business intelligence.",
    },
    {
        title: "Cross-Platform Mobile App Development",
        description: "Developing mobile applications that run seamlessly on both iOS and Android platforms from a single codebase."
    }
];

const dataportfolio = [
    {
        url: "https://hillpatel.com",
        img: "/HP.webp",
        title: "Portfolio Website",
        description: "This portfolio website serves as a showcase of my skills, projects, and experiences as a software developer. Built using React and styled with Bootstrap, the site offers a responsive and user-friendly interface, making it accessible across various devices.",
        // link: "https://example.com/project1",
        details: `This portfolio website serves as a showcase of my skills, projects, and experiences as a software developer. Built using React and styled with Bootstrap, the site offers a responsive and user-friendly interface, making it accessible across various devices.

Key Features:
- Dynamic Project Showcase: A visually appealing grid layout that displays a selection of my work. Visitors can view project details in a popover on hover, with each project card including a title, description, and relevant technologies.
- Responsive Design: The layout adjusts seamlessly to different screen sizes, ensuring an optimal viewing experience on mobile, tablet, and desktop devices using Bootstrap's grid system.
- Interactive Elements: Users can engage with interactive components, such as buttons and popovers, enhancing exploration of my projects.
- Smooth Animations: Thoughtfully implemented animations provide a modern touch to the interface, making transitions fluid and visually appealing.
- Personal Branding: The website integrates custom colors and typography to reflect my personal style and create a professional online presence.

Technologies Used:
- React: For building dynamic and reusable UI components.
- Bootstrap: For responsive layout and pre-styled components.
- CSS: Custom styles for a unique look and feel.

This portfolio website highlights my technical skills and serves as a testament to my commitment to delivering high-quality web applications. Visitors can explore my journey as a developer and view my work, showcasing my expertise in modern web development technologies.`,
    },
    {
        url: "https://drmokshapatel.in",
        img: "/physio.webp",
        title: "Physiotherapy Services Website",
        description: "A professional website for Dr. Moksha Patel, offering freelance physiotherapy services, including home visits. Built with React and styled using Tailwind CSS, this site provides an elegant and user-friendly experience tailored for clients seeking physiotherapy solutions.",
        // link: "https://example.com/project2",
        details: `This website is designed to highlight Dr. Moksha Patel's expertise and physiotherapy services. Built with React and styled using Tailwind CSS, the site focuses on simplicity, accessibility, and professional branding to attract clients.
    
Key Features:
- Service Showcase: Detailed sections presenting physiotherapy services such as pain management, rehabilitation, and home visit consultations. Each service is displayed with descriptions and benefits.
- Booking System: An intuitive form that allows clients to book appointments easily, ensuring quick and hassle-free scheduling.
- Testimonials Section: Displays client feedback to build trust and credibility.
- Contact and Inquiry Forms: Enables visitors to reach out directly for queries or consultation requests, simplifying communication.
- Responsive Design: Optimized for all devices—mobile, tablet, and desktop—offering a seamless browsing experience.
- Smooth Animations: Subtle transitions and animations make navigation engaging and modern.
- SEO Optimization: Implemented SEO strategies to improve visibility on search engines and attract local clients.
    
Technologies Used:
- React: For dynamic UI components and state management.
- Tailwind CSS: For flexible and responsive styling.
- EmailJS: For integrating contact forms with email notifications.
- CSS Animations: To enhance visual appeal.
    
This website reflects Dr. Moksha Patel's commitment to providing high-quality physiotherapy care while showcasing her expertise and professionalism. It acts as an effective platform for reaching new clients and managing bookings efficiently.`
    },
    {
        url: "/kjj2.png",
        img: "kjj.jpg",
        title: "Kijiji Reposting Bot",
        description: "An automation tool designed to repost ads on Kijiji efficiently. Built using Python and Selenium, it streamlines ad reposting tasks, saving time and boosting visibility for listings.",
        // link: "https://example.com/project3",
        details: `The Kijiji Reposting Bot automates the process of reposting ads on Kijiji, helping users maintain visibility and attract more buyers. It simplifies repetitive tasks and reduces manual effort, providing an efficient solution for ad management.
    
Key Features:
- Automated Reposting: Deletes and reposts ads with updated timestamps to ensure listings appear fresh and remain at the top of search results.
- Multi-Account Support: Allows users to manage multiple Kijiji accounts for posting ads under different profiles.
- Custom Scheduling: Enables scheduling reposts at specific intervals, providing flexibility for ad management.
- Error Handling: Built-in mechanisms to handle login failures, CAPTCHA challenges, and session timeouts, ensuring smooth operation.
- Log Tracking: Keeps detailed logs of reposting activities, including timestamps and errors, for monitoring and debugging.
- Headless Mode: Supports headless browsing, allowing the bot to operate in the background without interfering with other tasks.
    
Technologies Used:
- Python: Core programming language for scripting and logic.
- Selenium: Web automation framework for browser interactions.
- ChromeDriver: For running automated tasks in Chrome.
- JSON: Configuration file handling for dynamic input and settings.
    
This Kijiji Reposting Bot is a powerful automation tool that optimizes ad posting workflows, increasing efficiency and maximizing listing visibility. It is ideal for businesses and individuals looking to save time while improving their ad performance.`
    }
    
    
];

const contactConfig = {
    YOUR_EMAIL: "hill@hillpatel.com", // Your email
    YOUR_FONE: "(416) 877-3865", // Your phone number
    description: "Feel free to reach out ..., Just to connect!",
    YOUR_SERVICE_ID: "service_wfab0qf",
    YOUR_TEMPLATE_ID: "template_h46a3mr",
    YOUR_USER_ID: "xQELRyVXuLLJ-Tong",
};

const socialprofils = {
    github: "https://github.com/PatelVro", // Your GitHub profile
    linkedin: "https://www.linkedin.com/in/hillpatel/", // Your LinkedIn profile
    instagram: "https://www.instagram.com/_hillpatel/",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
