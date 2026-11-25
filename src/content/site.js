/**
 * Edit this file to update the portfolio.
 *
 * Confirmed facts stay as plain strings.
 * Anything still unfinished uses { pending: true, text: "..." }.
 * The page labels those blocks "To add" until you replace them.
 *
 * Email href: "mailto:you@school.edu" or "you@school.edu"
 * Other links: full https URL
 * Screenshots: put files in public/screenshots, then set image src to
 * publicAsset("screenshots/your-file.png").
 *
 * To add a project, copy the ElliCess object, change the id, and fill the fields.
 * Set showEmptySlot to false when you no longer want the spare card.
 */

export function publicAsset(path) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export const profile = {
  name: "Hannah Ellise L. Cruz",
  nickname: "Liz",
  track: "AI Solutions Development",
  program: "Innovation Fellowship",
  headline: "Growing Ideas, Building Solutions.",
  subtitle:
    "A little collection of my experiences, projects, discoveries, and growth throughout the Innovation Fellowship.",
  welcome:
    "I'm Liz, a Computer Science student specializing in Intelligent Systems.",
};

export const about = {
  paragraphs: [
    "Hi! I'm Hannah Ellise L. Cruz, but you can call me Liz.",
    "I'm a 3rd-year BS Computer Science student specializing in Intelligent Systems at De La Salle University–Dasmariñas (DLSU-D). For the Innovation Fellowship, I am part of the AI Solutions Development track.",
    "I enjoy exploring how technology and artificial intelligence can solve real-world problems. I'm especially interested in AI-powered applications, intelligent systems, workflow automation, and the intersection of AI and cybersecurity.",
    "Beyond technology, I enjoy playing musical instruments, swimming, playing badminton, chess, and exploring arts and crafts. I consider myself someone who enjoys learning new things, trying different experiences, and challenging myself. What motivates me is the opportunity to grow, discover what I'm capable of, and use what I learn to create something meaningful. I believe there's always room for improvement, and I enjoy the process of learning and growing, even when things get challenging.",
  ],
};

export const links = [
  { id: "email", label: "Email", href: "hannahellisecruz@gmail.com" },
  { id: "github", label: "GitHub", href: "https://github.com/ellisecruz" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/hannah-ellise-cruz" },
];

export const nav = [
  { id: "welcome", href: "#welcome", label: "Welcome" },
  { id: "about", href: "#about", label: "About" },
  { id: "journey", href: "#journey", label: "Journey" },
  { id: "projects", href: "#projects", label: "Projects" },
  { id: "journal", href: "#journal", label: "Journal" },
  { id: "next", href: "#next", label: "Next" },
];

export const journey = {
  stops: [
    {
      id: "prompts",
      title: "Prompt Engineering and Working with LLMs",
      description:
        "I learned how to communicate more effectively with Large Language Models (LLMs) through prompt engineering. I explored how the way we structure instructions, provide context, and refine prompts can influence the quality of AI-generated outputs. This helped me understand that using AI is not just about asking questions, but also about knowing how to guide it toward useful and relevant results.",
    },
    {
      id: "tools",
      title: "AI-Powered Tools and APIs",
      description:
        "I became more familiar with different AI-powered tools and how APIs allow applications to communicate with AI models and other services. I explored how these technologies can be integrated into applications to make tasks more efficient and intelligent. This gave me a better understanding of how AI capabilities can go beyond simple conversations and become part of actual solutions.",
    },
    {
      id: "agents",
      title: "AI Agents and Workflow Automation",
      description:
        "I explored the concept of AI agents and how they can perform tasks, follow instructions, and support automated workflows. I learned how combining AI models, tools, and logical steps can help simplify repetitive processes. It also opened my perspective on how automation can improve productivity and reduce manual work.",
    },
    {
      id: "data",
      title: "Data Preparation and Model Selection",
      description:
        "I learned that building effective AI solutions involves more than simply choosing an AI model. Understanding the data, preparing it properly, and selecting the appropriate model are important steps in developing reliable solutions. This helped me appreciate how the quality of data and the suitability of a model can affect the overall performance of an AI application.",
    },
    {
      id: "responsible",
      title: "Responsible AI Development",
      description:
        "Throughout the fellowship, I became more aware of the importance of developing and using AI responsibly. I learned to consider factors such as accuracy, bias, privacy, transparency, and the potential impact of AI-generated outputs. It reminded me that creating useful AI solutions also means understanding the responsibilities that come with using this technology.",
    },
    {
      id: "collab",
      title: "Collaborating with Fellow Participants",
      description:
        "One of the most memorable parts of my EIF journey was collaborating with my project partner, Princess. Working together allowed us to exchange ideas, share responsibilities, and learn from each other's perspectives. Despite the challenges of developing a project within a limited time, our collaboration made the experience more meaningful and enjoyable. It taught me that building solutions is not just about technical skills, but also about communication, teamwork, and learning together.",
    },
    {
      id: "ideas",
      title: "Turning Ideas into Practical Solutions",
      description:
        "One of my biggest takeaways from EIF was learning how to transform ideas into actual solutions. Through the fellowship, I experienced how identifying a problem, planning an approach, exploring technologies, and developing a project all come together. It helped me see how the concepts I learned in AI development can be applied to address real-world needs. More importantly, it encouraged me to become more confident in experimenting, building, and bringing ideas to life.",
    },
  ],
};

export const projects = [
  {
    id: "ellicess",
    name: "ElliCess",
    category:
      "AI-Powered Application Development | Full-Stack Development | AI Solutions Development",
    summary:
      "An AI-powered college admissions advisor console for centralized, revisitable CET guidance.",
    images: [
      {
        src: publicAsset("screenshots/ellicess-sign-in.png"),
        alt: "ElliCess sign-in screen",
      },
      {
        src: publicAsset("screenshots/ellicess-advisor-console.png"),
        alt: "ElliCess college admissions advisor console",
      },
      {
        src: publicAsset("screenshots/ellicess-advisor-response.png"),
        alt: "ElliCess advisor responding to a college admissions question",
      },
      {
        src: publicAsset("screenshots/ellicess-prompt-safety.png"),
        alt: "ElliCess refusing a request to reveal its system prompt",
      },
    ],
    overview:
      "ElliCess is an AI-powered college admissions advisor console designed to assist college admissions advisors during the College Entrance Test (CET) season. It provides a centralized chat interface where users can receive AI-generated guidance while allowing conversations to be saved and revisited. The project was developed by me and my partner, Princess, as part of our Eskwelabs Innovation Fellowship.",
    context: {
      problem:
        "During CET season, college admissions advisors may rely on separate AI tools, such as Custom GPTs and Gems, to assist with student inquiries. However, managing these tools, their instructions, and conversations across different platforms can become difficult.",
      why:
        "We wanted to create a more organized and manageable solution where AI-assisted admissions guidance could be accessed through one centralized platform. It also allowed us to explore how AI could support real-world advising workflows.",
      users:
        "The primary users are college admissions advisors who need AI assistance in handling student inquiries.",
    },
    role: {
      responsibility:
        "I was responsible for several aspects of ElliCess, including backend authentication, governance, administrative functionalities, frontend development, evaluation, and project documentation. I also worked on database integration and ensuring that the different components of the application worked together.",
      tasks: [
        "Developed the user registration functionality with password hashing using bcrypt.",
        "Implemented HMAC-based session verification middleware to authenticate protected requests.",
        "Configured the PostgreSQL database schema and SSL connection.",
        "Prepared the environment variable template (.env.example) for project configuration.",
        "Resolved backend dependencies and configuration issues during development.",
        "Contributed to frontend development and the integration of user interface components with backend functionalities.",
        "Worked on governance and administrative-related features to support the application's management and functionality.",
        "Conducted project evaluation and testing to assess the application's functionality, identify issues, and determine areas for improvement.",
        "Prepared and organized project documentation, including technical information and development-related documentation.",
        "Collaborated in integrating and refining the different components of the application.",
      ],
      decisions:
        "I contributed to decisions concerning the application's backend structure, authentication, and session management. I also considered security practices, such as keeping sensitive credentials and configuration values in environment variables. Beyond development, I participated in discussions about the application's governance, administrative functionalities, and overall user experience.",
      collaboration:
        "I worked closely with my project partner, Princess, throughout the development process. We divided responsibilities, exchanged ideas, shared progress updates, and discussed technical decisions. We also collaborated in integrating our respective contributions and addressing challenges to develop a functional and cohesive application.",
    },
    outputs: [
      { label: "Screenshots", href: "", note: "Add image files, or say if there are none yet." },
    ],
    skills: [
      "Full-Stack Development",
      "Backend Development",
      "Frontend Development",
      "Node.js and Express.js",
      "PostgreSQL Database Management",
      "REST API Development",
      "User Authentication and Session Management",
      "Password Hashing and Security",
      "HMAC-Based Authentication",
      "Database Integration",
      "Environment Configuration",
      "AI Application Integration",
      "Application Testing and Evaluation",
      "Technical Documentation",
      "Problem-Solving and Debugging",
      "System Design and Integration",
      "Critical Thinking",
      "Technical Research",
      "Project Documentation",
      "Governance and Administrative Planning",
      "Quality Assurance",
      "Team Collaboration",
      "Communication",
      "Time Management and Adaptability",
    ],
    learnings: {
      learned:
        "Developing ElliCess helped me understand that building an AI-powered application involves much more than integrating an AI model. I gained practical experience in backend development, database management, authentication, and connecting different parts of an application. I also learned the importance of security, proper configuration, and collaboration when developing a working solution.",
      improve:
        "If I had another opportunity to improve ElliCess, I would dedicate more time to testing, debugging, and integrating all components before the final demonstration. I would also improve the overall user experience, strengthen security and usage monitoring, and further evaluate the AI responses to ensure that the application provides reliable and useful guidance.",
    },
  },
  {
    id: "showcase",
    name: "SHOWCASE",
    category:
      "AI-Powered Application Development | Full-Stack Development | AI Solutions Development",
    summary:
      "An async project gallery and collaboration platform for fellowship interns.",
    images: [
      {
        src: publicAsset("screenshots/showcase-sign-in.png"),
        alt: "SHOWCASE sign-in page",
      },
      {
        src: publicAsset("screenshots/showcase-home.png"),
        alt: "SHOWCASE home page and project gallery introduction",
      },
      {
        src: publicAsset("screenshots/showcase-gallery.png"),
        alt: "SHOWCASE project gallery with search and learning-track filters",
      },
      {
        src: publicAsset("screenshots/showcase-project-detail.png"),
        alt: "SHOWCASE project detail page",
      },
      {
        src: publicAsset("screenshots/showcase-project-activity.png"),
        alt: "SHOWCASE project page with weekly updates and comments",
      },
      {
        src: publicAsset("screenshots/showcase-create-project.png"),
        alt: "SHOWCASE create-project form",
      },
      {
        src: publicAsset("screenshots/showcase-search.png"),
        alt: "SHOWCASE project search results",
      },
      {
        src: publicAsset("screenshots/showcase-profile.png"),
        alt: "SHOWCASE community profile page",
      },
      {
        src: publicAsset("screenshots/showcase-weekly-digest.png"),
        alt: "SHOWCASE weekly digest page",
      },
      {
        src: publicAsset("screenshots/showcase-notifications.png"),
        alt: "SHOWCASE notifications page",
      },
      {
        src: publicAsset("screenshots/showcase-lead-view.png"),
        alt: "SHOWCASE lead view with project check-ins and track digests",
      },
      {
        src: publicAsset("screenshots/showcase-admin-overview.png"),
        alt: "SHOWCASE administration with learning tracks and member settings",
      },
      {
        src: publicAsset("screenshots/showcase-admin-moderation.png"),
        alt: "SHOWCASE administration with member roles and content moderation",
      },
    ],
    overview:
      "Showcase is a project gallery for Eskwelabs Innovation Fellowship interns to share their work, browse projects across learning tracks, exchange feedback, and document weekly progress. It uses AI to generate project summaries and tags, supports semantic project search, and produces weekly digests for interns and track leads.",
    context: {
      problem:
        "Interns work asynchronously across different tracks, making it difficult to discover what peers are building or find useful examples and solutions. Track leads also spend time collecting status updates, repeating information, and identifying blockers.",
      why:
        "The project made fellowship progress visible in a shared, searchable space. It reduced writing and status-chasing overhead while giving interns more opportunities to learn from and collaborate with one another.",
      users:
        "The primary users are Eskwelabs Innovation Fellowship interns, track leads, and administrators.",
    },
    role: {
      responsibility:
        "I contributed to developing and finalizing the complete project, covering frontend implementation, AI integration, project refinement, testing, and delivery of the working prototype.",
      tasks: [
        "Developed the frontend using Next.js, React, TypeScript, and Tailwind CSS.",
        "Built the project gallery and project-card interfaces.",
        "Built project details, search, profile, digest, and administration interfaces.",
        "Designed responsive layouts and reusable frontend components.",
        "Implemented project forms, screenshots, filters, drafts, and AI project-card review interfaces.",
        "Integrated the Groq API for AI-powered project-card generation and weekly digests.",
        "Configured Groq environment variables and connected Groq to the application's structured AI workflows.",
        "Improved project search and track filtering experiences.",
        "Implemented frontend loading, empty, success, and error states.",
        "Contributed to authentication and role-based interface experiences.",
        "Resolved frontend and integration issues during development.",
        "Finalized and refined the project for presentation and use.",
        "Reviewed the overall application to ensure the features worked cohesively.",
      ],
      decisions:
        "I used Groq as the hosted LLM to generate structured project information. I also helped clearly distinguish AI-generated content from author-written content, designed consistent project cards for browsing across tracks, prioritized an accessible recency-based gallery, and used responsive layouts for desktop and mobile screens.",
      collaboration:
        "I collaborated with my partner, Princess, to integrate and finalize the project. I combined frontend work with AI integration and overall project coordination to support a cohesive, working application.",
    },
    outputs: [
      {
        label: "Screenshots",
        href: "",
        note: "No project screenshots are currently included. The application supports private project screenshot uploads.",
      },
    ],
    deliverables: [
      "Responsive project gallery",
      "Project-card and project-detail interfaces",
      "Project creation, editing, draft, and publishing forms",
      "Groq-powered AI project-card functionality",
      "Search and track-filter interfaces",
      "Weekly update and comment interfaces",
      "Profile and digest pages",
      "Administration and moderation interfaces",
      "Reusable components and consistent Tailwind CSS styling",
      "A refined and finalized project prototype",
    ],
    skills: [
      "Frontend development",
      "Next.js 15",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive web design",
      "Groq API integration",
      "AI feature integration",
      "Structured LLM output",
      "Environment configuration",
      "Reusable component development",
      "React Server Components",
      "Server Actions",
      "Forms and interface states",
      "UI/UX implementation",
      "Authentication interface integration",
      "Search interface development",
      "AI integration debugging",
      "Frontend error and empty-state handling",
      "Accessibility-conscious development",
      "Project refinement and delivery",
      "Technical documentation",
    ],
    learnings: {
      learned:
        "I learned how to build complete frontend interfaces for a full-stack application and connect them to AI-powered workflows. I also gained experience integrating an external LLM provider, configuring API credentials, validating AI output, and handling errors when AI services fail or reach usage limits. Working across the frontend and Groq integration improved my understanding of how user interfaces, server functions, authentication, database data, and third-party APIs interact.",
      improve:
        "I would add more automated frontend and AI integration tests. I would improve component reuse, add more explicit monitoring of Groq usage, and conduct further usability testing with interns and track leads. With another opportunity, I would also refine the search experience, improve loading and fallback states, and gather more real-user feedback before finalizing the application.",
    },
  },
];

export const showEmptySlot = false;

export const journal = {
  intro:
    "My EIF journey taught me that meaningful AI solutions come from combining technical skills, thoughtful planning, teamwork, and responsible design.",
  entries: [
    {
      id: "learned",
      title: "What I Learned",
      body:
        "Throughout EIF, I learned a lot about AI development and gained hands-on experience with different tools and technologies. I was able to explore prompt engineering, AI tools and APIs, backend and frontend development, authentication, and database integration. I also learned the importance of collaboration, especially when working with my project partner, Princess. Sharing ideas, dividing responsibilities, and learning from each other's perspectives helped us work through challenges and develop our projects. One thing I realized is that building an AI-powered application is not just about connecting an AI model, but also making sure that everything works properly together.",
    },
    {
      id: "proud",
      title: "What I'm Most Proud Of",
      body:
        "I'm most proud that I was able to contribute to two projects, ElliCess and Showcase, and see our ideas turn into working prototypes. For ElliCess, I handled several tasks involving backend development, authentication, database integration, evaluation, and documentation. For Showcase, I contributed to the frontend and Groq integration while helping improve and finalize the application. I'm also proud of the collaboration we built with our teammates. Being able to exchange ideas, support each other, and work toward a common goal made the experience more meaningful. More than the projects themselves, I'm proud of how much I improved my technical skills and became more confident in working with others.",
    },
    {
      id: "challenges",
      title: "Challenges I Encountered",
      body:
        "One of the biggest challenges I encountered was making sure that all parts of our projects worked together, especially since we had limited time because of our schoolwork and other responsibilities. I also faced issues with backend configuration, authentication, database connections, frontend integration, AI services, and deployments. Another challenge was dividing tasks and making sure our contributions worked well together. Whenever something didn't work, we communicated, shared ideas, and tried to find solutions together. Through this experience, I learned that patience, communication, and teamwork are just as important as technical skills when developing an application.",
    },
    {
      id: "improve",
      title: "What I Would Improve",
      body:
        "If I could do things differently, I would manage my time better and start testing and documenting our work earlier. I would also make sure to check each feature and integration regularly instead of waiting until later stages of development. When it comes to collaboration, I would improve how we organize tasks, communicate progress, and coordinate our work to make the development process smoother. I realized that having good teamwork is not only about dividing responsibilities but also about understanding each other's work and helping one another when challenges arise. Moving forward, I want to become more organized, improve my technical skills, and become a better collaborator in future projects.",
    },
  ],
};

export const nextAdventure = {
  direction:
    "Moving forward, I want to keep exploring AI solutions development, software engineering, intelligent systems, and cybersecurity.",
  fields: [
    {
      label: "What I want to explore next",
      value:
        "I want to explore more about AI agents, workflow automation, and how different AI models can be integrated into real-world applications. I'm also interested in learning more about intelligent systems and how AI can be used to solve problems in different fields. Aside from AI, I would like to explore more about cybersecurity and how to build applications that are not only useful but also secure.",
    },
    {
      label: "Skills I want to strengthen",
      value:
        "I want to improve my programming, full-stack development, and problem-solving skills, especially when working with complex applications. I also want to become better at API integration, database management, debugging, and testing. Most importantly, I want to improve my ability to turn ideas into functional and reliable solutions while becoming more confident in my technical skills.",
    },
    {
      label: "Opportunities I want to pursue",
      value:
        "I want to pursue more opportunities where I can apply what I've learned, especially internships, collaborative projects, and hands-on experiences related to AI development and software engineering. I also want to work on more projects that allow me to explore different technologies, gain experience, and learn from other developers. In the future, I hope to become part of a team that develops meaningful and innovative technology solutions.",
    },
    {
      label: "How EIF prepared me",
      value:
        "EIF gave me the opportunity to go beyond learning concepts and actually apply them by developing projects with my teammates. It helped me gain hands-on experience with AI tools, APIs, automation, and software development. It also taught me how to collaborate, manage responsibilities, solve problems, and adapt when things don't go as planned. Through this experience, I became more confident in exploring new technologies and realized that I still have so much more to learn and build.",
    },
  ],
  closing:
    "And this is only the beginning... Every project, challenge, and experience has been part of my growth. I may still have a lot to learn, but I'm excited to keep exploring, building, and turning ideas into something meaningful. Just like a garden, growth takes time, patience, and curiosity. Here's to everything that's still waiting to bloom! 🍓",
};

export function hrefFor(link) {
  if (!link.href) return "";
  if (link.id === "email" && !link.href.startsWith("mailto:")) {
    return `mailto:${link.href}`;
  }
  return link.href;
}
