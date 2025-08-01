'use client';

import dynamic from 'next/dynamic';
import SkeletonHero from './heroComp/skeleton';

const HeroPage = dynamic(() => import('@/pages/hero'), {
  loading: () => <SkeletonHero />,
  ssr: false,
});

export default function HomeClient() {
  return <HeroPage />;
}
