'use client';
import { useState, useEffect } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('about');

  useEffect(() => {
    // Get initial tab from URL hash or default to 'about'
    const hash = window.location.hash.replace('#', '');
    setActiveTab(hash || 'about');

    // Update active tab when hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.replace('#', '');
      setActiveTab(newHash || 'about');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabClick = (tab: string) => {
    window.location.hash = tab;
    setActiveTab(tab);
  };

  return (
    <main className="min-h-screen py-24 about">
      <div className="tabs-container">
        <button 
          className={`tab ${activeTab === 'about' ? 'active' : ''}`}
          onClick={() => handleTabClick('about')}
        >
          About Me
        </button>
        <button 
          className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabClick('experience')}
        >
          Experience
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'about' && (
          <div className="about-me-section">
            <div className="about-me-content">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-12">
                I am an enthusiastic student seeking opportunities to gain experience in computer architecture, compilers, and software development. Eager to contribute my passion and skills to emerging technologies. 
              </p>

              <div className="about-sections-grid">
                <section className="education-section bg-opacity-5 bg-white rounded-xl p-6 backdrop-blur-sm mb-8">
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Education</h2>
                  <div className="education-content">
                    <div className="education-item">
                      <h3 className="text-xl font-semibold text-white">Istanbul Technical University</h3>
                      <p className="text-blue-400">Computer Engineering</p>
                      <p className="education-date">2022 - Present</p>
                    </div>
                  </div>
                </section>

                <section className="skills-section bg-opacity-5 bg-white rounded-xl p-6 backdrop-blur-sm">
                  <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Skills</h2>
                  <div className="skills">
                    <div className="skill-category">
                      <h3 className="text-lg font-semibold text-white mb-3">Programming Languages</h3>
                      <div className="skill-tags">
                        <div>C++</div>
                        <div>Python</div>
                        <div>Java</div>
                        <div>SQL</div>
                        <div>Verilog</div>
                      </div>
                    </div>
                    <div className="skill-category mt-6">
                      <h3 className="text-lg font-semibold text-white mb-3">Core Concepts</h3>
                      <div className="skill-tags">
                        <div>Object-Oriented Programming</div>
                        <div>Data Structures</div>
                        <div>Algorithms</div>
                        <div>Computer Architecture</div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'experience' && (
          <section className="experience-section">
            <div className="experience-header">
              <h2>Experience</h2>
            </div>
            <div className="timeline-wrapper">
              <div className="timeline-container">
                <div className="timeline">
                  <div className="timeline-item">
                    <h3 className="text-xl font-semibold">Trumore Product Owner/Software Developer</h3>
                    <p className="text-blue-400">TOGG • August 2024 - Present</p>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>Implemented a Java library for access controls to microphone and camera for TruStore app developments and tested this library with our own mini apps.</li>
                      <li>Helped testing and debugging apps in car environment. </li>
                      <li>Understood and gained an agile focused work system. </li>
                    </ul>
                  </div>
                  <div className="timeline-item">
                    <h3 className="text-xl font-semibold">Researcher</h3>
                    <p className="text-blue-400">ITU High Performance and Cloud Computing Lab • July 2024 - Present</p>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>Doing research about FHE computation optimization, compiler optimization, LLVM/MLIR, computer architecture </li>
                      <li>Contributed directly to an open source FHE compiler project by Google called HEIR and implemented a polynomial evaluation operation for polynomial dialect. Wrote two possible lowerings to more simple dialects for this operation with Horner and Paterson-Stockmeyer methods. </li>
                    </ul>
                  </div>
                  <div className="timeline-item past-experience">
                    <h3 className="text-xl font-semibold">UI/UX Designer – Game Developer</h3>
                    <p className="text-gray-400">T1D1 • September 2023 - July 2024</p>
                    <ul className="mt-2 space-y-1 text-gray-300">
                      <li>• Designed menu for 2D game project "KIDS FIGHT"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 