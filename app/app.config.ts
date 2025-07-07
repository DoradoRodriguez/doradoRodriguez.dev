export default defineAppConfig({
  global: {
    meetingLink: 'https://calendly.com/doradorodriguez/30min',
    available: true,
  },
  profile: {
    name: 'Dorado Rodriguez',
    job: 'Frontend Architect and Designer',
    email: 'contact@doradorodriguez.dev',
    phone: '(+34) 673 81 4040',
    picture: 'https://avatars.githubusercontent.com/u/49807723?v=4',
  },
  socials: {
    github: 'https://github.com/doradorodriguez',
    twitter: 'https://twitter.com/',
    linkedin: 'https://www.linkedin.com/in/doradorodriguez/',
  },
  seo: {
    title: 'Dorado Rodriguez - Frontend Architect and Designer',
    description: 'I am a Frontend Architect and Designer with over 10 years of experience in the industry. I specialize in creating scalable and maintainable web applications using modern technologies.',
    url: 'https://doradoRodriguez.dev',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})