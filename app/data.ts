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
    image: '/SuperCorners.webp',
    id: 'project1',
  },
  {
    name: 'MenuScores',
    description: 'Live Scores. Right From Your Menubar',
    link: 'https://github.com/daniyalmaster693/MenuScores',
    image: '/MenuScores.webp',
    id: 'project2',
  },
  {
    name: 'Sportssync',
    description: 'View sports scores, news, and standings in Raycast',
    link: 'https://www.raycast.com/daniyal_master/sportssync',
    image: '/Sportssync-Project-Page.webp',
    id: 'project3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Building MenuScores',
    description: 'How I built MenuScores: from idea to product.',
    link: '/blog/building-menuscores',
    uid: 'blog-1',
  },
  {
    title: 'Using an Android Phone with a Mac',
    description:
      'Tips, tools, and tricks for making Android and macOS play nicely together.',
    link: '/blog/using-an-android-phone-with-a-mac',
    uid: 'blog-2',
  },
  {
    title: 'My Mac Setup',
    description:
      'A look into my development environment, tools I use, and how it all fits together.',
    link: '/blog/my-mac-setup',
    uid: 'blog-3',
  },
  {
    title: 'My Raycast Setup',
    description:
      'How I customized Raycast to speed up my workflow and stay focused.',
    link: '/blog/my-raycast-setup',
    uid: 'blog-4',
  },
  {
    title: 'Sportssync Developer Blog #2',
    description: 'Major Features and New Commands',
    link: '/blog/sportssync-developer-blog-2',
    uid: 'blog-5',
  },
  {
    title: 'Sportssync Developer Blog #1',
    description: 'New Features and Visual Updates',
    link: '/blog/sportssync-developer-blog-1',
    uid: 'blog-6',
  },
  {
    title: 'Building Sportssync',
    description: 'Building an all in one sports extension for Raycast.',
    link: '/blog/building-sportssync',
    uid: 'blog-7',
  },
]

export const EMAIL = 'daniyalmaster693@gmail.com'
