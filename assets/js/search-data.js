// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/AutonomousAgentsLab/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AutonomousAgentsLab/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Lab projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AutonomousAgentsLab/projects/";
          },
        },{id: "nav-people",
          title: "people",
          description: "Agents of the lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AutonomousAgentsLab/people/";
          },
        },{id: "nav-contact",
          title: "contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AutonomousAgentsLab/_pages/contact/";
          },
        },{id: "nav-values",
          title: "values",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/AutonomousAgentsLab/_pages/values/";
          },
        },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/AutonomousAgentsLab/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-building-learning-tools",
          title: 'Building Learning Tools',
          description: "By this, we mean both (1) tools that facilitate human learning and inquiry, and (2) tools that themselves can learn and adapt to users and tasks. We&#39;re particularly interested in developing wearable and augmented reality tools, in the mold of the [Autism Glass Project](http://autismglass.stanford.edu/).",
          section: "Projects",handler: () => {
              window.location.href = "/AutonomousAgentsLab/projects/building_tools/";
            },},{id: "projects-engineering-interactive-learning-in-artificial-systems",
          title: 'Engineering Interactive Learning in Artificial Systems',
          description: "We look to develop machines that learn through autonomous exploration of and interaction with their environments -- as humans learn. To do this, we use deep reinforcement learning and employ and develop techniques in curiosity, active learning, and self-supervised learning. In doing so, we hope to create artificial systems that can learn more autonomously, flexibly, and robustly, with less demand on data.",
          section: "Projects",handler: () => {
              window.location.href = "/AutonomousAgentsLab/projects/engineering_learning/";
            },},{id: "projects-modeling-human-learning-and-developmental-differences",
          title: 'Modeling Human Learning and Developmental Differences',
          description: "We seek to create computational models of human learning and development, and in particular, models of developmental differences such as Autism Spectrum Disorder. To do this, we engineer artificial systems that learn as humans do, in complex, real-world situations, and we compare artificial behavior to human behavior.",
          section: "Projects",handler: () => {
              window.location.href = "/AutonomousAgentsLab/projects/human_learning/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%68%61%62%65%72 %61%74 %73%74%61%6E%66%6F%72%64 %64%6F%74 %65%64%75", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nick-haber-90922b76", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=euNCoVYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/nickhaber", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
