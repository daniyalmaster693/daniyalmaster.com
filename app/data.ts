type Project = {
  name: string
  description: string
  link: string
  image: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

export const PROJECTS: Project[] = [
  {
    name: 'SuperCorners',
    description: "Make Your Mac's Corners Useful Again",
    link: 'https://github.com/daniyalmaster693/SuperCorners',
    image: '/Screenshot 2025-06-01 at 8.57.32 AM.webp',
    id: 'project1',
  },
  {
    name: 'MenuScores',
    description: 'Live Scores. Right From Your Menubar',
    link: 'https://github.com/daniyalmaster693/MenuScores',
    image: '/Screenshot 2025-06-01 at 8.46.11 AM.webp',
    id: 'project2',
  },
  {
    name: 'Sportssync',
    description: 'View sports scores, news, and standings in Raycast',
    link: 'https://www.raycast.com/daniyal_master/sportssync',
    image: '/Raycast 2025-06-01 at 09.11.25.webp',
    id: 'project3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Keeping Apple Notes on Top',
    description:
      'An easy method to float an apple notes window on top of others.',
    link: '/blog/keeping-apple-notes-on-top',
    uid: 'blog-1',
  },
  {
    title: 'Running AI Locally with Raycast & Ollama',
    description:
      'How I set up Raycast to use local LLMs through Ollama for fast, private AI on my Mac.',
    link: '/blog/running-ai-locally-with-raycast-and-ollama',
    uid: 'blog-2',
  },
  {
    title: 'Building MenuScores',
    description: 'How I built MenuScores: from idea to product.',
    link: '/blog/building-menuscores',
    uid: 'blog-3',
  },
  {
    title: 'Using an Android Phone with a Mac',
    description:
      'Tips, tools, and tricks for making Android and macOS play nicely together.',
    link: '/blog/using-an-android-phone-with-a-mac',
    uid: 'blog-4',
  },
  {
    title: 'My Mac Setup',
    description:
      'A look into my development environment, tools I use, and how it all fits together.',
    link: '/blog/my-mac-setup',
    uid: 'blog-5',
  },
  {
    title: 'My Raycast Setup',
    description:
      'How I customized Raycast to speed up my workflow and stay focused.',
    link: '/blog/my-raycast-setup',
    uid: 'blog-6',
  },
  {
    title: 'Sportssync Developer Blog #2',
    description: 'Major Features and New Commands',
    link: '/blog/sportssync-developer-blog-2',
    uid: 'blog-7',
  },
  {
    title: 'Sportssync Developer Blog #1',
    description: 'New Features and Visual Updates',
    link: '/blog/sportssync-developer-blog-1',
    uid: 'blog-8',
  },
  {
    title: 'Building Sportssync',
    description: 'Building an all in one sports extension for Raycast.',
    link: '/blog/building-sportssync',
    uid: 'blog-9',
  },
]

export const EMAIL = 'daniyalmaster693@gmail.com'
