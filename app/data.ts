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
    description: "Supercharge your Mac's Corners",
    link: 'https://github.com/daniyalmaster693/SuperCorners',
    image: '/SuperCorners-1.webp',
    id: 'project1',
  },
  {
    name: 'MenuScores',
    description: 'Live Scores, Designed for Mac',
    link: 'https://github.com/daniyalmaster693/MenuScores',
    image: '/MenuScores-1.webp',
    id: 'project2',
  },
  {
    name: 'Sportssync',
    description: 'An All-in-One Sports Extension for Raycast',
    link: 'https://www.raycast.com/daniyal_master/sportssync',
    image: '/Sportssync-1.webp',
    id: 'project3',
  },
  {
    name: 'MacToastKit',
    description: 'A minimal toast library for macOS',
    link: 'https://github.com/daniyalmaster693/MacToastKit',
    image: '/MacToastKit-1.webp',
    id: 'project4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Sports Scores in your Mac's Notch",
    description: 'Bringing a popular iOS Dynamic Island feature to macOS',
    link: '/blog/sports-scores-in-your-macs-notch',
    uid: 'blog-1',
  },
  {
    title: 'Creating beautiful toast messages for your Mac App',
    description: 'Create subtle and beautiful notifications for your Mac app.',
    link: '/blog/creating-beautiful-toast-messages',
    uid: 'blog-2',
  },
  {
    title: 'Automatic Swift Code Formatting in Xcode',
    description:
      'A quick guide to setting up automatic swift code formatting in Xcode.',
    link: '/blog/automatic-code-formatting-xcode',
    uid: 'blog-3',
  },
  {
    title: 'Keeping Apple Notes on Top',
    description:
      'An easy method to float an apple notes window on top of others.',
    link: '/blog/keeping-apple-notes-on-top',
    uid: 'blog-4',
  },
  {
    title: 'Running AI Locally with Raycast & Ollama',
    description:
      'How I set up Raycast to use local LLMs through Ollama for fast, private AI on my Mac.',
    link: '/blog/running-ai-locally-with-raycast-and-ollama',
    uid: 'blog-5',
  },
  {
    title: 'Building MenuScores',
    description: 'How I built MenuScores: from idea to product.',
    link: '/blog/building-menuscores',
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
    uid: 'blog-7',
  },
  {
    title: 'Building Sportssync',
    description: 'Building an all in one sports extension for Raycast.',
    link: '/blog/building-sportssync',
    uid: 'blog-9',
  },
]

export const EMAIL = 'daniyalmaster693@gmail.com'
