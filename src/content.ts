export const profile = {
  name: 'Fatemeh Asghariomabad',
  title: 'Full-Stack Software Engineer',
  tagline: 'Full-stack engineer building with React, Angular, Python & Django, and designing microservices systems.',
  email: 'fatemehAOmabad@gmail.com',
  photo: new URL('./assets/profile.png', import.meta.url).href,
  links: {
    github: 'https://github.com/fatemeh-asghariomabad',
    linkedin: undefined as string | undefined,
  },
}

export const about = `I'm a full-stack software engineer who has worked across the stack:
React and Angular on the frontend, and Python, Django, and C++ on the backend. I build
production applications and microservices-based systems. At MARS Bioimaging I built
applications in React, C++, and Python; at the University of Canterbury I worked with
Angular and Django, where I developed a strong interest in system design and
microservices architecture.

My path into engineering started in physics: a Bachelor's, Master's, and PhD, where I
developed image processing algorithms and software to improve image quality in
motion-degraded medical scans. That background is where my problem-solving instincts
come from, and it's part of what I bring to engineering work today. I'm happiest when
I'm deep in a hard problem.`

export type SkillGroup = {
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  { label: 'Frontend', skills: ['React', 'Angular', 'TypeScript', 'JavaScript'] },
  { label: 'Backend', skills: ['Python', 'Django', 'C++', 'REST APIs'] },
  { label: 'Data', skills: ['PostgreSQL', 'MySQL', 'DBeaver'] },
  { label: 'Cloud & DevOps', skills: ['Docker', 'AWS (S3, CloudFront)', 'DNS and HTTPS', 'CI/CD'] },
  { label: 'Security', skills: ['Content Security Policy', 'Security headers', 'Spam and bot protection'] },
  { label: 'Version Control', skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket'] },
  { label: 'Testing', skills: ['Unit Testing'] },
  { label: 'Architecture', skills: ['Microservices', 'System Design'] },
  { label: 'Domain', skills: ['Image Processing', 'Algorithm Development', 'Medical Imaging'] },
]

export type ExperienceEntry = {
  company: string
  role: string
  period: string
  bullets: string[]
}

export const experience: ExperienceEntry[] = [
  {
    company: 'University of Canterbury',
    role: 'Software Engineer',
    period: '2023 to present',
    bullets: [
      'Designed and developed microservices-based systems using Angular, Django, and Python.',
      'Run and deploy containerized services with Docker and AWS, with CI/CD pipelines for delivery.',
      'Use Git-based workflows (GitHub, GitLab) and AI-assisted tooling to automate daily development tasks.',
    ],
  },
  {
    company: 'MARS Bioimaging',
    role: 'Software Engineer',
    period: '2020 to Jan 2023',
    bullets: [
      'Built medical imaging applications using React, C++, and Python.',
      'Worked with Docker, running scripts to manage containers.',
      'Used Bitbucket for version control.',
      'Brought a scientific research background to production software development.',
    ],
  },
]

export type Project = {
  name: string
  period: string
  description: string
  tech: string[]
  link?: string
  /** A short line shown above the link, e.g. when the code isn't public yet. */
  note?: string
}

export const personalProjects: Project[] = [
  {
    name: 'Tradie Toolkit',
    period: '2026',
    description:
      'Small, useful tools for trades businesses. The first is a tile calculator for a Christchurch tiling business: homeowners add their floors and walls, pick a tile and layout, and see how many tiles and boxes to buy. This one is a real app, so I built it with an Angular front end and a Django REST API. The tile maths lives in its own layer on the server, and the business owner can change cut allowances, tile sizes and suppliers in the Django admin without a new release. Nothing a visitor types is stored, and a test proves it. Over 100 automated tests and a CI pipeline check every change. Next I am putting it live on AWS and connecting it to the tiling business website. The Angular app will sit on S3 and CloudFront like the website, and the Django API will run on AWS Lambda, so there is no server to look after. A homeowner will open the calculator from the website, and their estimate will go straight into the quote form, ready to send.',
    tech: ['Angular', 'TypeScript', 'Django', 'Python', 'REST API', 'AWS Lambda (planned)'],
    link: 'https://github.com/fatemeh-asghariomabad/tradie-toolkit',
  },
  {
    name: 'Tiling business website',
    period: '2026',
    description:
      'A website for a tiling and waterproofing business in Christchurch. I first built it in Angular, then rebuilt it in plain HTML, CSS and JavaScript on purpose. For a small business site that is the more professional choice: it loads fast on phones, it is easy to keep secure, and there is no framework to upgrade every few months, so the owner isn\'t paying for work the site doesn\'t need. It has a filterable gallery of recent jobs, a quote form with spam checks, and a planning guide that helps homeowners understand tiling costs before they book. I host it on AWS myself. The files sit in a private S3 bucket that only CloudFront can read, with HTTPS, a strict Content Security Policy and other security headers, and a budget alert so a mistake can never turn into a surprise bill.',
    tech: ['HTML', 'CSS', 'JavaScript', 'AWS S3', 'CloudFront', 'DNS and HTTPS', 'Web security', 'SEO'],
    link: 'https://www.pixeltiling.co.nz',
  },
]

export const hobbies: string[] = []
