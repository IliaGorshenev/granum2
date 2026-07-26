import { ABOUT_HIGHLIGHTS } from '../config/content';
import { AboutFeatureCard } from './about-feature-card';
import { AboutProductionCard } from './about-production-card';

export const AboutHighlights = () => (
  <div className="grid min-w-0 grid-cols-1 gap-4 md:grid-cols-2 lg:auto-rows-[15rem] lg:grid-cols-12">
    <AboutProductionCard />
    <AboutFeatureCard
      {...ABOUT_HIGHLIGHTS.support}
      className="min-h-64 md:min-h-72 lg:col-span-5 lg:min-h-0"
      tone="accent"
    />
    <AboutFeatureCard
      {...ABOUT_HIGHLIGHTS.estimate}
      className="min-h-64 md:min-h-72 lg:col-span-5 lg:min-h-0"
      tone="warm"
    />
    <AboutFeatureCard
      {...ABOUT_HIGHLIGHTS.masters}
      className="min-h-64 lg:col-span-4 lg:min-h-0"
    />
    <AboutFeatureCard
      {...ABOUT_HIGHLIGHTS.personal}
      className="min-h-64 lg:col-span-4 lg:min-h-0"
    />
    <AboutFeatureCard
      {...ABOUT_HIGHLIGHTS.warranty}
      className="min-h-64 md:col-span-2 lg:col-span-4 lg:min-h-0"
      tone="warm"
    />
  </div>
);
