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
  username: "Dipti",
  title: "Hi all, I'm Dipti",
  subTitle: emoji(
    "A passionate Software Engineer and Data Engineer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks. Along with this, I have the experience of working on Data using Python, Spark, SQL and AWS. 🤖"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1h_q3O8MY75luxA_oapuQ9oBYX4G6JDtv/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/diptime",
  linkedin: "https://www.linkedin.com/in/dipti-457b561b8/",
  gmail: "diptiimee@gmail.com",
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
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Full Stack Web Application Development"),
    emoji(
      "⚡ Integration of third party services such as Firebase / AWS"
    ),
    emoji(
      "⚡ Data Engineering to build systems for collecting, validating, and preparing that high-quality data."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      schoolName: "Dayananda Sagar College of Engineering",
      logo: require("./assets/images/dsce_logo.jpeg"),
      subHeader: "Bachelor of Engineering in Information Science",
      duration: "August 2019 - July 2023",
      desc: "Scored 9.33 / 10 CGPA. Took courses about Software Engineering, Database Management Systsems, Operating Systems.",
      descBullets: ["Member of Google Developers Student Club","Event Lead at Codechef Chapter"]
    },
    // {
    //   schoolName: "St. Michael's High School",
    //   logo: require("./assets/images/harvardLogo.png"),
    //   subHeader: "Master of Science in Computer Science",
    //   duration: "September 2017 - April 2019",
    //   desc: "Participated in the research of XXX and published 3 papers.",
    //   descBullets: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    //   ]
    // },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Engineering",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/amazonlogo.jpg"),
      date: "January 2023 – June 2023",
      desc: "Worked with the Devices and Services Finance team",
      descBullets: [
        "Built a Data Reconciliation Framework for the team",
        "Worked on the frontend and integration part of the project"
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Desi QnA",
      companylogo: require("./assets/images/DesiQnAlogo.png"),
      date: "October 2022 - December 2022",
      descBullets: ["Worked on the Design and Development part of a fully responsive webpage for a particular section of Desi QnA", "Integrated Recaptcha with the website - Google Layer of Protection for websites."]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Coding Profiles and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "30 Days of Google Cloud",
      subtitle:
        "Completed and earned badges for different challenges in Google Cloud and Machine Learning track",
      image: require("./assets/images/googlecloudlogo.webp"),
      imageAlt: "Completed 30 Days of Google Cloud",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.cloudskillsboost.google/public_profiles/477cc16e-a3c7-4ce6-9564-f75637e269eb"
        },
      ]
    },
    {
      title: "HackerRank Profile",
      subtitle:
        "Earned 5 stars in Java and C++. Also earned stars in Python, Javascript and Problem Solving. Got certified in Java.",
      image: require("./assets/images/hackerranklogo.png"),
      imageAlt: "HackerRank Logo",
      footerLink: [
        {
          name: "Java Certification",
          url: "https://www.hackerrank.com/certificates/0f09af3a5917"
        },
        {
          name: "View Profile",
          url: "https://www.hackerrank.com/diptiimee"
        }
      ]
    },

    {
      title: "Leetcode Profile",
      subtitle: "Got a peak rating of 1569 and solved 550+ Data Structure and Algorithmic problems.",
      image: require("./assets/images/leetcodelogo.png"),
      imageAlt: "Leetcode Logo",
      footerLink: [
        {
          name: "View Profile",
          url: "https://leetcode.com/me_diptii/"
        }
      ]
    },
    {
      title: "Codechef Profile",
      subtitle: "Got a peak rating of 1786 after securing a Global Rank of 121 in April Luchtime. Served as the Codechef Chapter Leader for my college.",
      image: require("./assets/images/codecheflogo.jpg"),
      imageAlt: "Codechef Logo",
      footerLink: [
        { name: "Chapter Leader", url: "https://www.codechef.com/certificates/public/d0ea7ec" },
        {
          name: "View Profile",
          url: "https://www.codechef.com/users/xor99"
        }
      ]
    },
    {
      title: "Linux Tools for Developers",
      subtitle: "Completed Certifcation from The Linux Foundation for Linux Tools for Developers",
      image: require("./assets/images/thelinuxflogo.png"),
      imageAlt: "The Linux Foundation logo",
      footerLink: [
        { name: "Certification", url: "https://www.coursera.org/account/accomplishments/certificate/KABENFSW5ABB" },
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
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
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
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
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
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7004779893",
  email_address: "diptiimee@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable
};
