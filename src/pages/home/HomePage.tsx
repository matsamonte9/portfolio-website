import { HomeHeader } from './HomeHeader';
import { HomeHero } from './HomeHero';
import { StackSection } from './StackSection';
import { SelectedWorkSection } from './SelectedWorkSection';
import { ExperienceSection } from './ExperienceSection';
import { ByNightSection } from './ByNightSection';
import { Reveal } from '../../components/Reveal';
import { Footer } from '../../components/Footer';
import { BootSplash } from '../../components/BootSplash';

export function HomePage() {
  return (
    <div className="page-shell">
      <BootSplash />
      <div className="page-container">
        <HomeHeader />
        <HomeHero />
        <Reveal><StackSection /></Reveal>
        <Reveal><SelectedWorkSection /></Reveal>
        <Reveal><ExperienceSection /></Reveal>
        <Reveal><ByNightSection /></Reveal>
        <Reveal><Footer /></Reveal>
      </div>
    </div>
  );
}
