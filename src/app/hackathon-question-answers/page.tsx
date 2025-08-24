import { Metadata } from 'next';
import HackathonQAPage from './HackathonQAPage';

export const metadata: Metadata = {
  title: 'Hackathon Q&A',
  description: 'Hackathon question and answer collection',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Page() {
  return <HackathonQAPage />;
}
