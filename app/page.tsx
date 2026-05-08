import Hero from '@/components/sections/Hero';
import Strengths from '@/components/sections/Strengths';
import Products from '@/components/sections/Products';
import Bousai from '@/components/sections/Bousai';
import News from '@/components/sections/News';
import Sustainability from '@/components/sections/Sustainability';
import CTA from '@/components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <Strengths />
      <Products />
      <Bousai />
      <Sustainability />
      <News />
      <CTA />
    </>
  );
}
