// Edit this file to update your products and socials.

export const profile = {
  name: 'Mohit Vaswani',
  role: 'Indie Hacker',
  initials: 'MV',
};

export type Product = {
  name: string;
  url: string;
  domain: string;
  status: 'Live' | 'Acquired';
};

export const products: Product[] = [
  { name: 'Homy', url: 'https://tryhomy.app', domain: 'tryhomy.app', status: 'Live' },
  { name: 'AgentsKit', url: 'https://agentskit.co', domain: 'agentskit.co', status: 'Live' },
  { name: 'Trymacapps', url: 'https://trymacapps.com', domain: 'trymacapps.com', status: 'Live' },
  { name: 'Notch Buddy', url: 'https://notchbuddy.com', domain: 'notchbuddy.com', status: 'Live' },
  { name: 'Disk Buddy', url: 'https://diskbuddy.com', domain: 'diskbuddy.com', status: 'Acquired' },
];

export type Social = {
  name: string;
  url: string;
  icon: string; // name from the Iconify "simple-icons" set
  followers: string;
  bg: string; // brand color for the icon tile
};

export const socials: Social[] = [
  { name: 'Twitter', url: 'https://x.com/hii_mohit', icon: 'x', followers: '~10k', bg: '#000000' },
  { name: 'Medium', url: 'https://medium.com/@hii_mohit', icon: 'medium', followers: '~8.8k', bg: '#121212' },
  { name: 'Threads', url: 'https://www.threads.com/@thatismohit', icon: 'threads', followers: '450', bg: '#101010' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/mohit-vaswani-10/', icon: 'linkedin', followers: '400', bg: '#0A66C2' },
  { name: 'Instagram', url: 'https://www.instagram.com/helloo_mohit', icon: 'instagram', followers: '112', bg: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)' },
];
