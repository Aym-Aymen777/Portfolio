import React from 'react';
import { Reveal, Tag, ScreenMockup, LinkBtn } from '../ui/index';
import { PROJECTS } from '../../data/index';
import type { Project } from '../../types/index';

const ExternalIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GithubSmIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

interface ProjectCardProps {
  project: Project;
  delay?: 0 | 1 | 2 | 3 | 4;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => (
  <Reveal delay={delay} className={`project-card${project.featured ? ' featured' : ''}`}>
    <ScreenMockup variant={project.featured ? 'default' : 'grid'} />
    <div className="project-body">
      <div className="project-tags">
        {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
      <div className="project-title">{project.title}</div>
      <p className="project-desc">{project.description}</p>
      <div className="project-links">
        {project.liveUrl && (
          <LinkBtn href={project.liveUrl} primary>
            <ExternalIcon /> Live Demo
          </LinkBtn>
        )}
        {project.githubUrl && (
          <LinkBtn href={project.githubUrl}>
            <GithubSmIcon /> GitHub
          </LinkBtn>
        )}
        {project.caseStudyId && (
          <LinkBtn href="#case-studies">Case Study →</LinkBtn>
        )}
      </div>
    </div>
  </Reveal>
);

const ProjectsSection: React.FC = () => (
  <section id="projects">
    <div className="container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '2rem',
          marginBottom: '3rem',
        }}
      >
        <Reveal>
          <div className="section-label">Featured work</div>
          <h2 className="section-title">Projects that ship</h2>
        </Reveal>
        <Reveal delay={1}>
          <p className="section-sub" style={{ maxWidth: 380 }}>
            Production-grade applications built with performance, scalability, and real users in mind.
          </p>
        </Reveal>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            delay={(i % 3) as 0 | 1 | 2}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
