// One-off migration: replaces the placeholder mock content in Sanity with
// the real resume content (transcribed from resume.pdf). Overwrites the
// existing project/experience/education/certification/profile documents and
// deletes the now-stale placeholder docs that have no real-world equivalent.
//
// Usage:
//   node --experimental-strip-types --env-file=.env.local scripts/seed-resume.mts

import { createClient } from '@sanity/client'

import { apiVersion, dataset, projectId } from '../src/sanity/env.ts'

const token = process.env.SANITY_WRITE_TOKEN
if (!token) {
  throw new Error(
    'Missing SANITY_WRITE_TOKEN. Add an Editor-permission API token to .env.local (see sanity.io/manage).'
  )
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false })

const tx = client.transaction()

tx.createOrReplace({
  _id: 'profile',
  _type: 'profile',
  name: 'Thwin E Maung',
  headline: 'Software Engineer',
  bio: 'Highly motivated and results-driven software engineer with over four years experience in various technical knowledge and have a deep passion for developing innovative solutions that address complex business challenges.',
  phone: '+66 9 80394656',
  languages: [
    { _type: 'language', _key: 'burmese', name: 'Burmese', level: 'Native' },
    { _type: 'language', _key: 'english', name: 'English', level: 'Full Professional' },
  ],
  skills: [
    {
      _type: 'skillGroup',
      _key: 'tools',
      cat: 'Tools & Programming Languages',
      tags: [
        'C#', 'ASP.NET Core', 'JavaScript', 'TypeScript',
        'React.js', 'Next.js', 'CI/CD', 'Azure DevOps',
        'Docker', 'Oracle SQL', 'REST API', 'Git',
        'Power Apps', 'Power Automate', 'Angular', 'Tailwind CSS',
      ],
    },
    {
      _type: 'skillGroup',
      _key: 'soft',
      cat: 'Soft Skills',
      tags: ['Analytical Decision Making', 'Communication', 'Delegation', 'Teamwork', 'Adaptability'],
    },
  ],
  socials: [
    { _type: 'social', _key: 'portfolio', id: 'portfolio', label: 'Portfolio', href: 'https://thwin-portfolio.vercel.app' },
    { _type: 'social', _key: 'email', id: 'email', label: 'Email', href: 'mailto:thwinemaung@gmail.com' },
    { _type: 'social', _key: 'linkedin', id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/thwinemaung' },
    { _type: 'social', _key: 'github', id: 'github', label: 'GitHub', href: 'https://github.com/thwinemaung' },
    { _type: 'social', _key: 'kaggle', id: 'kaggle', label: 'Kaggle', href: 'https://kaggle.com/thwine' },
  ],
  contactLinks: [
    { _type: 'contactLink', _key: 'email', id: 'email', label: 'Email', value: 'thwinemaung@gmail.com', href: 'mailto:thwinemaung@gmail.com', note: 'Best way to reach me' },
    { _type: 'contactLink', _key: 'linkedin', id: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/thwinemaung', href: 'https://linkedin.com/in/thwinemaung', note: 'Connect professionally' },
    { _type: 'contactLink', _key: 'github', id: 'github', label: 'GitHub', value: 'github.com/thwinemaung', href: 'https://github.com/thwinemaung', note: 'See my work' },
    { _type: 'contactLink', _key: 'portfolio', id: 'portfolio', label: 'Portfolio', value: 'thwin-portfolio.vercel.app', href: 'https://thwin-portfolio.vercel.app', note: 'View my site' },
  ],
})

const experience = [
  {
    title: 'Application Development Specialist (Power Platform)',
    company: 'Pahtama Group Co., Ltd.',
    location: '',
    period: 'Oct 2023 – Present',
    summary: '',
    bullets: [
      'Designed, developed, and maintained custom Power Apps solutions to automate manual processes such as Inventory Management and Stock Issue, Advance Payment and Claim, Outlet Store Planning, and various survey collection processes',
      'Integrated Power Apps with SharePoint lists, Dataverse, and SQL as data sources to enable seamless data exchange and manipulation within custom applications',
      'Designed scalable applications and data models using different delegable functions and operations from different data sources',
      'Implemented Power Automate flows to automate approval workflows, notifications, and data synchronization, improving operational efficiency and reducing manual efforts',
      'Successfully developed an Outlet Store Planning System with user authentication, maps, force update, and reverse geocoding API',
      "Collaborated closely with stakeholders to gather requirements, define technical specifications, and deliver customized solutions aligned with project goals and user needs",
    ],
    stack: ['Power Apps', 'Power Automate', 'SharePoint', 'Dataverse', 'SQL'],
    team: '',
  },
  {
    title: 'eHealth Officer (Data Analyst & Developer)',
    company: 'PSI Myanmar',
    location: '',
    period: 'Aug 2020 – Dec 2022',
    summary: '',
    bullets: [
      "Gathered operational requirements by cooperating with cross-functional teams and transformed them into a comprehensive system requirement specification, including underlying logic for technical implementation and system use-cases",
      'Created data connections to retrieve data from online sources, then analyzed and cleaned the data in Power Query to develop interactive, user-friendly dashboards using Power BI',
      'Designed, developed, and maintained Microsoft Power Apps to assist operations such as an Attendance Management System and Performance Evaluation System, using SharePoint Lists/Online Excel as databases and Power Automate for email notifications and scheduling',
      "Developed chatbots using the Pipe Chatbots platform to provide information and self-assessment for users' health concerns",
      'Participated in DHIS2 academy courses and generated weekly and monthly DHIS2 reports to communicate key findings to the operations team',
      'Explored and learned UI/UX, Python, and basic Django to support future projects',
    ],
    stack: ['Power BI', 'Power Apps', 'Power Automate', 'Power Query', 'SharePoint', 'DHIS2', 'Python'],
    team: '',
  },
  {
    title: 'Product Engineer',
    company: 'Myanmar ShweTech Co., Ltd.',
    location: '',
    period: 'Aug 2019 – Aug 2020',
    summary: '',
    bullets: [
      "Involved in project kick-off meetings to establish a common understanding of the project's goals, objectives, scope, and expectations, and to outline the project plan, timeline, and deliverables",
      'Conducted thorough needs analysis and requirements-gathering sessions with clients to identify business requirements and develop customized ERP & HRMS solutions',
      'Successfully implemented HRMS solutions for multiple organizations, including a nationwide corporation with over 1,000 employees, increasing efficiency and accuracy of HR processes',
      "Analyzed clients' requirements and operation flow to implement ERP systems such as Purchasing, Finance, and Inventory Management",
      'Conducted user training and provided ongoing support to ensure successful adoption of ERP & HRMS solutions',
    ],
    stack: ['ERP', 'HRMS'],
    team: '',
  },
  {
    title: 'Web Developer Intern',
    company: 'ICT Star Group Myanmar Co., Ltd.',
    location: '',
    period: 'May 2018 – Jul 2018',
    summary: '',
    bullets: [
      'Participated in a research project on a GPS device system and retrieving location data',
      'Contributed to developing a job-searching web application aiming to bridge employers and job seekers',
      'Collaborated with a team of developers to implement new features and enhancements to ensure quality and reliability of the application',
    ],
    stack: [],
    team: '',
  },
]
experience.forEach((e, i) => tx.createOrReplace({ _id: `experience-${i}`, _type: 'experience', ...e }))
tx.delete('experience-4')

tx.createOrReplace({
  _id: 'education-0',
  _type: 'education',
  degree: 'Bachelor of Science in Engineering (ICT)',
  school: 'Asian Institute of Technology, Thailand',
  year: 'Sep 2015 – May 2019',
  desc: '',
  highlights: [
    'CGPA: 3.21 out of 4',
    'Capstone Project: Web Application for Drone Fleet Control System',
    'Praxis II: Automated Line-Following and Obstacle-Removing Car',
    'Praxis I: Laser Alarm System',
  ],
})

const certifications = [
  { badge: 'UX', name: 'UX Design (Google)', issuer: 'Coursera', year: '' },
  { badge: 'FSW', name: 'Full Stack Web Development', issuer: 'Udemy', year: '' },
  { badge: 'ML', name: 'Machine Learning', issuer: 'Youth Career Institute', year: '' },
  { badge: 'DHIS2', name: 'DHIS2 Tracker App', issuer: 'DHIS2 Academy', year: '' },
]
certifications.forEach((c, i) => tx.createOrReplace({ _id: `certification-${i}`, _type: 'certification', ...c }))

const projects = [
  {
    kind: 'personal',
    name: 'Meeting Room Booking System',
    desc: 'Developed a meeting room booking web application using React.js, Tailwind CSS, and Firebase.',
    tags: ['React.js', 'Tailwind CSS', 'Firebase'],
    type: 'Full-stack',
    year: '',
    role: '',
    duration: '',
    client: '',
    url: '',
    outcomes: [
      'Designed a simple and easy-to-use user interface using HTML, Tailwind CSS, and React.js',
      'Implemented real-time updates using Firebase, enabling users to view meeting room availability and make instant bookings',
      'Integrated Firebase authentication for secure login and implemented role-based access control to manage user permissions',
      'Ensured responsiveness across desktops, tablets, and mobile phones to accommodate diverse user needs',
    ],
  },
  {
    kind: 'personal',
    name: 'Netflix Clone',
    desc: 'Developed a Netflix clone web application using React, Next.js, Tailwind CSS, Prisma, MongoDB, NextAuth, and Vercel.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Prisma', 'MongoDB', 'NextAuth', 'Vercel'],
    type: 'Full-stack',
    year: '',
    role: '',
    duration: '',
    client: '',
    url: '',
    outcomes: [
      'Created a user-friendly interface resembling the Netflix platform, allowing users to browse and stream movies and TV shows',
      'Implemented dynamic content fetching from a MongoDB database using Prisma ORM for efficient data management',
      'Integrated NextAuth for user authentication and authorization, enabling secure registration and login',
      "Utilized React's component-based architecture and Next.js server-side rendering for optimized performance and UX",
      'Deployed the application on Vercel, ensuring seamless scalability and fast-loading times',
    ],
  },
]
projects.forEach((p, i) => tx.createOrReplace({ _id: `project-${i + 1}`, _type: 'project', ...p }))
;['project-3', 'project-4', 'project-5', 'project-6'].forEach((id) => tx.delete(id))

const result = await tx.commit()
console.log(`Updated dataset "${dataset}" with ${result.results.length} document operations.`)
