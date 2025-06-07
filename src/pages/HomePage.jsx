import React from 'react';
import Jade from './Jade';
import Team from './Team';
import Vision from './Vision';
import Challenges from './Challenges';
import Solution from './Solution';
import UseCases from './UseCases';
import Validation from './Validation';

export const navItems = [
  { id: 'jade', label: 'Jade', sectionId: 'jade-section' },
  { id: 'team', label: 'Team', sectionId: 'team-section' },
  { id: 'vision', label: 'Vision', sectionId: 'vision-section' },
  { id: 'challenges', label: 'Challenges', sectionId: 'challenges-section' },
  { id: 'solution', label: 'Solution', sectionId: 'solution-section' },
  { id: 'usecases', label: 'Use-cases', sectionId: 'usecases-section' },
  { id: 'validation', label: 'Validation', sectionId: 'validation-section' }
];

const commonSectionBg = "scroll-section bg-gradient-to-br from-slate-50 via-white to-emerald-50/20";

export default function HomePage() {
  return (
    <>
      <section id="jade-section" className={commonSectionBg}> {/* Ensures this section has the standard background */}
        <Jade />
      </section>
      <section id="team-section" className={commonSectionBg}>
        <Team />
      </section>
      <section id="vision-section" className={commonSectionBg}>
        <Vision />
      </section>
      <section id="challenges-section" className={commonSectionBg}>
        <Challenges />
      </section>
      <section id="solution-section" className={commonSectionBg}>
        <Solution /> 
      </section>
      <section id="usecases-section" className={commonSectionBg}>
        <UseCases />
      </section>
      <section id="validation-section" className={commonSectionBg}>
        <Validation />
      </section>
    </>
  );
}