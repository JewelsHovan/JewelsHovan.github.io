import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaLaptopCode, FaChalkboardTeacher, FaUniversity, FaRobot, FaCheck } from 'react-icons/fa';
import { SiPython } from 'react-icons/si';
import Button from '../components/Button';
import umichImage from '../assets/images/umich.png';

// Placeholder images - replace with actual images when available
const tutorImage = umichImage;
const webScrapingImage = 'https://placehold.co/600x400/1E2A45/38AECC?text=Web+Scraping+Projects';
const umichLogo = 'https://placehold.co/200x200/121A2B/38AECC?text=UMich+Logo';

const CodeBlock = ({ children }) => (
  <motion.div
    className="bg-slate text-accent-cyan p-4 rounded-lg shadow-lg font-mono text-xs md:text-sm border border-steel-blue overflow-x-auto"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <pre className="whitespace-pre-wrap break-words">{children}</pre>
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-md border border-slate"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex items-center mb-4">
      <Icon className="text-accent-cyan text-2xl mr-3" />
      <h3 className="text-xl font-bold text-text-light">{title}</h3>
    </div>
    <p className="text-text-muted">{description}</p>
  </motion.div>
);

const TestimonialCard = ({ text, name, role }) => (
  <motion.div
    className="bg-card p-6 rounded-lg shadow-md border border-slate"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <p className="text-text-muted mb-4 italic">"{text}"</p>
    <div>
      <p className="font-bold text-text-light">{name}</p>
      <p className="text-text-muted text-sm">{role}</p>
    </div>
  </motion.div>
);

const Tutor = () => {
  const subjects = [
    { 
      icon: SiPython, 
      title: "Python Programming", 
      description: "From basics to advanced concepts, including data structures, algorithms, and best practices for clean, efficient code."
    },
    { 
      icon: FaDatabase, 
      title: "Data Science", 
      description: "Data analysis, visualization, machine learning, and statistical methods using Python libraries like Pandas, NumPy, and Scikit-learn."
    },
    { 
      icon: FaRobot, 
      title: "Web Scraping", 
      description: "Building robust web scrapers using Beautiful Soup, Selenium, Scrapy, and handling challenges like authentication, pagination, and rate limiting."
    },
    { 
      icon: FaLaptopCode, 
      title: "UMSI Courses", 
      description: "Specialized tutoring for University of Michigan School of Information courses including SI 106, SI 206, SI 506, SI 507, and SIADS 505."
    }
  ];

  const pricingPlans = [
    {
      title: "Single Session",
      price: "20",
      description: "One-time tutoring session for specific questions or concepts",
      features: [
        "60-minute session",
        "Personalized instruction",
        "Follow-up materials",
        "Session recording available"
      ]
    },
    {
      title: "Monthly Package",
      price: "200",
      description: "Regular weekly sessions for ongoing support",
      popular: true,
      features: [
        "4 weekly 60-minute sessions",
        "Personalized learning plan",
        "Practice exercises",
        "Email support between sessions",
        "Session recordings available"
      ]
    },
    {
      title: "Web Scraping Project",
      price: "100+",
      description: "Learn by building a complete web scraping project",
      features: [
        "Custom project scope",
        "4-6 sessions to build your scraper",
        "Code review and optimization",
        "Deployment guidance",
        "Ongoing support for 2 weeks"
      ]
    }
  ];

  const pythonCode = `# Simple web scraper example
import requests
from bs4 import BeautifulSoup

def scrape_website(url):
    # Send request and get response
    response = requests.get(url)
    
    # Parse HTML content
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extract data
    data = []
    for item in soup.select('.item'):
        title = item.select_one('.title').text.strip()
        price = item.select_one('.price').text.strip()
        data.append({'title': title, 'price': price})
    
    return data

# Usage
results = scrape_website('https://example.com/products')
print(f"Found {len(results)} products")`;

  return (
    <div className="bg-dark-blue min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-xl shadow-2xl overflow-hidden border border-slate"
              >
                <div className="relative">
                  <img src={tutorImage} alt="University of Michigan Tutoring" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 right-4 bg-accent-cyan rounded-full p-2">
                    <img src={umichLogo} alt="University of Michigan" className="w-12 h-12 rounded-full" />
                  </div>
                  <div className="bg-accent-cyan text-dark-blue py-8 px-6">
                    <h1 className="text-3xl font-bold mb-2">University of Michigan Tutoring</h1>
                    <p className="text-navy-900 font-medium">
                      Data Science & Computer Science Specialist
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <FaUniversity className="text-accent-cyan text-3xl mr-3" />
                  <h2 className="text-3xl font-bold text-text-light text-shadow">UMSI Programming Peer Tutor</h2>
                </div>
                <p className="text-text-muted mb-6 leading-relaxed">
                  I'm a Programming Peer Tutor at the University of Michigan School of Information, specializing in Python programming, data science, and web scraping. With extensive experience in both academic and professional settings, I help students master complex concepts through personalized teaching methods.
                </p>
                <p className="text-text-muted mb-6 leading-relaxed">
                  <span className="text-accent-cyan font-medium">Web scraping enthusiast?</span> I offer specialized tutoring for those interested in learning how to build robust web scrapers for data collection and analysis. From basic HTML parsing to handling complex scenarios with authentication and dynamic content, I can help you master the art of web scraping.
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href="mailto:JulienH15@icloud.com"
                    className="bg-accent-cyan text-dark-blue px-4 md:px-6 py-3 rounded-lg font-bold hover:bg-accent-teal transition duration-300 text-sm md:text-base"
                  >
                    Book a Session
                  </a>
                  <a
                    href="#web-scraping"
                    className="bg-slate text-text-light px-4 md:px-6 py-3 rounded-lg font-bold hover:bg-steel-blue transition duration-300 text-sm md:text-base"
                  >
                    Web Scraping Tutoring
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-text-light text-center text-shadow">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subjects.map((subject, index) => (
              <FeatureCard key={index} icon={subject.icon} title={subject.title} description={subject.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Web Scraping Focus Section */}
      <section id="web-scraping" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-text-light text-shadow">Specialized Web Scraping Tutoring</h2>
              <p className="text-text-muted mb-6">
                Web scraping is a powerful skill for data collection and analysis. Whether you're a researcher, data scientist, or developer, I can help you master the techniques to extract data from websites efficiently and ethically.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaCheck className="text-accent-cyan mt-1 mr-3" />
                  <span className="text-text-light">Learn to build scrapers with Beautiful Soup, Selenium, and Scrapy</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent-cyan mt-1 mr-3" />
                  <span className="text-text-light">Handle pagination, authentication, and dynamic content</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent-cyan mt-1 mr-3" />
                  <span className="text-text-light">Implement rate limiting and proxies to avoid blocking</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent-cyan mt-1 mr-3" />
                  <span className="text-text-light">Store and analyze the collected data effectively</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-accent-cyan mt-1 mr-3" />
                  <span className="text-text-light">Build complete projects from scratch to deployment</span>
                </li>
              </ul>
              <a
                href="mailto:JulienH15@icloud.com?subject=Web%20Scraping%20Tutoring%20Inquiry"
                className="bg-accent-cyan text-dark-blue px-4 md:px-6 py-3 rounded-lg font-bold hover:bg-accent-teal transition duration-300 inline-block text-sm md:text-base"
              >
                Inquire About Web Scraping Tutoring
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="bg-slate rounded-xl overflow-hidden shadow-lg border border-steel-blue">
                <img src={webScrapingImage} alt="Web Scraping Projects" className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-text-light">Sample Web Scraping Code</h3>
                  <CodeBlock>{pythonCode}</CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* University of Michigan Courses */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-text-light text-center text-shadow">University of Michigan Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SI 106/506</h3>
              <p className="text-text-muted">Programs for Manipulating Data - Introduction to Python programming with a focus on data manipulation.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SI 206</h3>
              <p className="text-text-muted">Data-Oriented Programming - Advanced Python programming with databases, APIs, and web scraping.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SI 507</h3>
              <p className="text-text-muted">Intermediate Programming - Object-oriented design, data structures, and algorithms in Python.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SIADS 505</h3>
              <p className="text-text-muted">Data Manipulation - Advanced data manipulation techniques using Pandas and NumPy.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SIADS 511</h3>
              <p className="text-text-muted">SQL and Databases - Working with relational databases and SQL for data analysis.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md border border-slate">
              <h3 className="text-xl font-bold mb-4 text-accent-cyan">SIADS 521</h3>
              <p className="text-text-muted">Visual Exploration of Data - Data visualization techniques using Python libraries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-text-light text-center text-shadow">Tutoring Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  plan.popular ? "border-2 border-accent-cyan" : "border border-slate"
                }`}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`p-4 md:p-6 ${plan.popular ? "bg-accent-cyan text-dark-blue" : "bg-card text-text-light"}`}>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{plan.title}</h3>
                  <div className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">${plan.price}</div>
                  <p className={`text-sm md:text-base ${plan.popular ? "text-navy-900" : "text-text-muted"}`}>{plan.description}</p>
                </div>
                <div className="p-4 md:p-6 bg-card">
                  <ul className="mb-6 md:mb-8 text-sm md:text-base">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start mb-3 text-text-muted">
                        <FaCheck className="text-accent-cyan mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`mailto:JulienH15@icloud.com?subject=Tutoring%20Package%20Inquiry:%20${plan.title}`}
                    className={`block text-center py-2 md:py-3 rounded-lg font-bold text-sm md:text-base ${
                      plan.popular
                        ? "bg-accent-cyan text-dark-blue hover:bg-accent-teal"
                        : "bg-slate text-text-light hover:bg-steel-blue"
                    } transition duration-300`}
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="bg-accent-cyan rounded-xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-dark-blue">Ready to Enhance Your Skills?</h2>
            <p className="text-navy-900 mb-6 md:mb-8 max-w-2xl mx-auto font-medium text-sm md:text-base">
              Whether you're struggling with a specific concept, working on a project, or want to master web scraping, I'm here to help. Contact me today to schedule your first session.
            </p>
            <a
              href="mailto:JulienH15@icloud.com?subject=Tutoring%20Inquiry"
              className="inline-block bg-dark-blue text-text-light px-6 md:px-8 py-2 md:py-3 rounded-lg font-bold hover:bg-navy transition duration-300 text-sm md:text-base"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tutor;
