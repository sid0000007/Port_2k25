/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddharth",
  title: "Hola! I love software developement.",
  subTitle: emoji(
    "So far, Interned and worked with startups, build an mvp during college but still everything looks exciting to me. Skilling up for AI and ML"
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  twitter: "https://x.com/siddgupta007",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full stack developer, leverage LLM's to make Progressive web applications",
  skills: [
    emoji("⚡ Progressive Web Applications ( PWA ) "),

    emoji("⚡ Build scalable backend using Node.js, Express.js"),
    emoji("⚡ Integration of third party services such as AWS, Firebase"),
    emoji("⚡ Develop highly interactive UI web applications")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "reactjs/nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "USICT, IP University",
      logo: require("./assets/images/ipu.png"),
      subHeader: "Engineer in Computer Science",
      duration: "Sept 2022 - Dec 2025",

      descBullets: [
        "Core: Operating system, Artifical Intelligence, Machine Learning",
        "CS majors: Data Structures, Algorithms, Computer Networks, Database Management System"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Gudswap",
      companylogo: require("./assets/images/gudswap.png"),
      date: "Sept 2024 – Dec 2024",
      desc: "",
      descBullets: [
        "An Inventory based startup where I built PWA for there B to C clients, that has 1000+ daily foot-falls",
        "Built a admin management software for the B to B clients to handle the orders and making CRUD operations, manages about 200+ pickup orders a day",
        "Designed and implemented a relational schema and database with 6 tables.",
        "Utilized an S3 bucket for storing 34+ client assets and set up an EC2 postgres instance for schema table creation."
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Eventory",
      companylogo: require("./assets/images/eventory.png"),
      date: "May 2024 – july 2024",
      desc: "",
      descBullets: [
        "Developed 27 backend schema tables and frontend components, improving workflow efficiency by 50% and increasing user session duration by 30%.",
        "Led AWS S3 migration and codebase modernization efforts, reducing load times and enhancing security while maintaining CI/CD best practices.",
        "Collaborated with a team of 5 to implement CI/CD workflows, including PR previews and code quality checks, with 71 commits and 15 PRs merged over two months."
      ]
    },
    {
      role: "Full Stack Intern",
      company: "Alpha Humans (NGO)",
      companylogo: require("./assets/images/alphahumans.png"),
      date: "March 2024 – July 2024",
      desc: "",
      descBullets: [
        "Contributed to a non-profit initiative aimed at solving blood shortages in India by developing a web platform using React.js and Node.js.",
        "Created user authentication systems and integrated backend APIs for seamless communication between blood donors and recipients. Helped establish a more efficient blood donation process",
        " ensuring timely assistance to those in need."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "MVP's and Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/scraper.png"),
      projectName: "Web Scraper (VM's and AWS EC2)",
      projectDesc: "Scrape data from websites using Virtual machines and AWS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/sid0000007/v4wZf7GF9x"
        }
      ]
    },
    {
      image: require("./assets/images/daccotta.png"),
      projectName: "Daccotta",
      projectDesc:
        "A social network platform for movie buff's. With 30+ contributors and 80+ starred on github",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/daccotta-org/daccotta"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/mocbot.png"),
      projectName: "Mocbot - AI Chatbot",
      projectDesc:
        "A chatbot that helps users to solve queries based on the context and Coal data",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/Siddharthgupta007/mocbot"
        }
      ]
    },
    {
      image: require("./assets/images/kyc_form.png"),
      projectName: "KYC Progress Form",
      projectDesc:
        "A KYC form for a financial firm from wallstreet build with typescript and framer",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://kyc-lemon-xi.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/admin_panel.png"),
      projectName: "Admin Panel",
      projectDesc:
        "A admin panel for a startup with pixel perfect UI. Build with Next.js and Shadcn in 4 hours",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ca-yc-front.vercel.app/"
        }
      ]
    }
  ],

  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ZS scholar 2022",
      subtitle:
        "ZS scholar 2022, a scholarship program for students who are passionate about technology and want to make a difference in the world.",
      image: require("./assets/images/zs.png"),
      imageAlt: "ZS associates",
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/1RBaRDlanfEu0SqGbKuzCSaIqgVP3oG-5/view?usp=sharing"
        }
      ]
    },
    {
      title: "Project Admin in GSSOC-24",
      subtitle:
        " Proposed daccotta as project for GSSOC-24 and got selected as project admin, got 140+ PR's merged and 30+ contributors",
      image: require("./assets/images/gssoc24.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Appreciation Letter",
          url: "https://drive.google.com/file/d/1WloL8ejxhNYq2qaXrz5L-IabhR23vTUb/view?usp=sharing"
        }
      ]
    },

    {
      title: "IBM watsonx Certification",
      subtitle: "Completed the IBM watsonx certification on AI chatbots",
      image: require("./assets/images/IBM_watsonx.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Completion Badge",
          url: "https://drive.google.com/file/d/11_ka04KlcaKaUJGRLZF54maiGW6uK7ek/view?usp=sharing"
        }
      ]
    },
    {
      title: "Participated in Sparkthon-24 (Walmart)",
      subtitle: "Participated in Sparkthon-24, a hackathon by Walmart",
      image: require("./assets/images/walmart.png"),
      imageAlt: "Walmart Logo",
      footerLink: [
        {
          name: "Certificate of Participation",
          url: "https://drive.google.com/file/d/1UK21gpGgpxfGjiKmxcSBWGcZS8soru3P/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's connect for a short call",
  number: "+91 9267963125",
  email_address: "siddharthgt125@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
