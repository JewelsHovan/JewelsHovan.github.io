import React from "react";
import { motion } from "framer-motion";
import {
  FaDatabase,
  FaLaptopCode,
  FaMountain,
  FaChartLine,
  FaLightbulb,
} from "react-icons/fa";
import headshot from "../assets/images/headshot_hovan.png";

const TerminalHeader = ({ title, variant = "default" }) => {
  const colors = {
    default: "text-cyber-accent",
    magenta: "text-cyber-magenta",
    cyan: "text-cyber-cyan",
  };
  return (
    <div className="flex items-center gap-2 border-b border-cyber-border pb-2 mb-4">
      <span className="flex gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
      </span>
      <span className={`font-mono text-xs ${colors[variant]} tracking-wider`}>
        {title}
      </span>
    </div>
  );
};

const TerminalPanel = ({ title, variant, children, className = "" }) => (
  <motion.div
    className={`bg-cyber-card border border-cyber-border cyber-chamfer p-6 ${className}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <TerminalHeader title={title} variant={variant} />
    {children}
  </motion.div>
);

const SectionLabel = ({ children }) => (
  <h3 className="font-cyber-heading text-sm tracking-[0.2em] text-cyber-accent uppercase mb-6">
    // {children}
  </h3>
);

const NeonDivider = () => (
  <div className="relative py-6 flex items-center justify-center">
    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent opacity-30" />
    <div className="relative">
      <FaDatabase className="text-cyber-accent text-xs opacity-50" />
    </div>
  </div>
);

const skills = [
  "Python", "SQL", "Databricks", "Dataiku", "AWS",
  "Docker", "Kubernetes", "Spark", "Kafka", "dbt",
  "React", "TypeScript", "Git", "Terraform",
];

const About = () => {
  return (
    <motion.div
      className="min-h-screen bg-cyber-bg py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Profile */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="w-48 h-48 cyber-chamfer overflow-hidden border-2 border-cyber-accent shadow-[0_0_20px_rgba(0,255,136,0.3)]">
              <img
                src={headshot}
                alt="Julien Hovan"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyber-accent" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyber-accent" />
          </div>
          <h1 className="font-cyber-heading text-3xl sm:text-4xl font-bold text-cyber-fg tracking-wider mb-2">
            JULIEN M. HOVAN
          </h1>
          <p className="font-mono text-sm text-cyber-accent tracking-wider">
            // DATA_ENGINEER.exe
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyber-accent to-transparent mt-4" />
        </div>

        {/* Education */}
        <TerminalPanel title="~/education" variant="cyan">
          <SectionLabel>Education</SectionLabel>
          <div className="relative pl-6 border-l-2 border-cyber-cyan space-y-8">
            <div className="relative">
              <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[25px] top-1 shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
              <span className="font-mono text-xs text-cyber-muted-fg">[2018-2023]</span>
              <h4 className="text-lg font-semibold text-cyber-fg mt-1">McGill University</h4>
              <p className="text-cyber-cyan text-sm">Bachelor of Science — Computer Science &amp; Biology</p>
            </div>
            <div className="relative">
              <div className="absolute w-3 h-3 bg-cyber-cyan rounded-full -left-[25px] top-1 shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
              <span className="font-mono text-xs text-cyber-muted-fg">[2023-PRESENT]</span>
              <h4 className="text-lg font-semibold text-cyber-fg mt-1">University of Michigan</h4>
              <p className="text-cyber-cyan text-sm">Master of Applied Data Science</p>
            </div>
          </div>
        </TerminalPanel>

        <NeonDivider />

        {/* Journey */}
        <TerminalPanel title="~/journey" variant="default">
          <SectionLabel>
            My_Journey
          </SectionLabel>
          <div className="font-mono text-sm text-cyber-fg space-y-4 leading-relaxed">
            <p>
              <span className="text-cyber-accent mr-2">&gt;</span>
              Discovered programming passion in first Java course. Python became language of choice — especially for web scraping: reverse engineering APIs, scheduling extraction, building datasets.
            </p>
            <p>
              <span className="text-cyber-accent mr-2">&gt;</span>
              At McGill, learned R for statistical analysis and test simulations, building a strong foundation in data manipulation.
            </p>
            <p>
              <span className="text-cyber-accent mr-2">&gt;</span>
              Post-graduation internship at 3Genii expanded skills into .NET platform development and C#.
            </p>
            <p>
              <span className="text-cyber-accent mr-2">&gt;</span>
              In 2023, growing interest in deep learning led to pursuing a Master&apos;s in Applied Data Science — fascinated by AI history and evolving applications.
            </p>
          </div>
        </TerminalPanel>

        <NeonDivider />

        {/* Skills */}
        <TerminalPanel title="~/skills --list" variant="magenta">
          <SectionLabel>Technical_Skills</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="font-mono text-xs px-3 py-1.5 border border-cyber-border bg-cyber-bg text-cyber-accent hover:border-cyber-accent hover:shadow-[0_0_8px_rgba(0,255,136,0.2)] transition-all duration-200 cyber-chamfer-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </TerminalPanel>

        <NeonDivider />

        {/* Experience */}
        <TerminalPanel title="~/experience" variant="cyan">
          <SectionLabel>Professional_Experience</SectionLabel>
          <div className="border-l-2 border-cyber-accent pl-4">
            <h4 className="font-cyber-heading text-base font-semibold text-cyber-fg">
              Compass Analytics
            </h4>
            <p className="font-mono text-xs text-cyber-magenta mb-2">
              DATA_ENGINEERING_CONSULTANT // CURRENT
            </p>
            <p className="text-sm text-cyber-fg leading-relaxed">
              Building scalable data architectures and pipelines. Specializing in Databricks and Dataiku to transform raw data into actionable insights.
            </p>
          </div>
        </TerminalPanel>

        <NeonDivider />

        {/* Interests & Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TerminalPanel title="~/interests" variant="default">
            <SectionLabel>Interests</SectionLabel>
            <p className="text-sm text-cyber-fg leading-relaxed">
              Hiking, photography, exploring data engineering and cloud computing. Avid reader of Eastern fantasy novels and LitRPGs. Regularly follows latest AI research papers.
            </p>
          </TerminalPanel>

          <TerminalPanel title="~/goals" variant="magenta">
            <SectionLabel>Goals</SectionLabel>
            <p className="text-sm text-cyber-fg leading-relaxed">
              Continuously enhance data engineering skills while helping organizations leverage data effectively. Aspires to create own products and run a business applying technical expertise.
            </p>
          </TerminalPanel>
        </div>

        {/* Contact footer */}
        <div className="text-center py-4">
          <p className="font-mono text-xs text-cyber-muted-fg">
            // end_of_file —{" "}
            <a href="/#/contact" className="text-cyber-cyan hover:text-cyber-accent underline underline-offset-2">
              ./contact.sh
            </a>
            {" "}to connect
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default About;
