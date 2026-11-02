import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/App.jsx';
import Navbar from './src/components/Navbar.jsx';
import Hero from './src/components/Hero.jsx';
import About from './src/components/About.jsx';
import Skills from './src/components/Skills.jsx';
import Projects from './src/components/Projects.jsx';
import ProjectModal from './src/components/ProjectModal.jsx';
import Experience from './src/components/Experience.jsx';
import Certifications from './src/components/Certifications.jsx';
import Education from './src/components/Education.jsx';
import Contact from './src/components/Contact.jsx';
import Footer from './src/components/Footer.jsx';
import ResumeModal from './src/components/ResumeModal.jsx';
import { ThemeProvider } from './src/context/ThemeContext.jsx';
import { featuredProjects, personalInfo } from './src/data/portfolioData.js';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    console.log(`  ✓ PASS: ${message}`);
    passedTests++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
  }
}

console.log('====================================================');
console.log('STARTING SECTION-BY-SECTION COMPREHENSIVE TEST SUITE');
console.log('====================================================\n');

// 1. Test Entire App Render
console.log('Test 1: App Component & Global Layout');
try {
  const appHtml = renderToString(<App />);
  assert(appHtml.length > 5000, `App rendered full HTML (${appHtml.length} chars)`);
  assert(appHtml.includes('Peddi Akshay'), 'App includes owner name');
  assert(appHtml.includes('id="hero"'), 'Hero section ID exists');
  assert(appHtml.includes('id="about"'), 'About section ID exists');
  assert(appHtml.includes('id="skills"'), 'Skills section ID exists');
  assert(appHtml.includes('id="projects"'), 'Projects section ID exists');
  assert(appHtml.includes('id="experience"'), 'Experience section ID exists');
  assert(appHtml.includes('id="certifications"'), 'Certifications section ID exists');
  assert(appHtml.includes('id="education"'), 'Education section ID exists');
  assert(appHtml.includes('id="contact"'), 'Contact section ID exists');
  
  // Verify exclusions
  assert(!appHtml.includes('Testimonials'), 'Exclusion verified: No Testimonials section');
  assert(!appHtml.includes('Frequently Asked Questions'), 'Exclusion verified: No FAQs section');
  assert(!appHtml.includes("Let's Work Together"), 'Exclusion verified: No duplicate Let\'s Work Together section');
} catch (e) {
  assert(false, `App render failed: ${e.message}`);
}

// 2. Test Navigation Component
console.log('\nTest 2: Navigation Bar Component');
try {
  const navHtml = renderToString(
    <ThemeProvider>
      <Navbar onOpenResume={() => {}} />
    </ThemeProvider>
  );
  assert(navHtml.includes('AP'), 'Navbar contains AP logo mark');
  assert(navHtml.includes('href="#hero"'), 'Navbar has Home link');
  assert(navHtml.includes('href="#about"'), 'Navbar has About link');
  assert(navHtml.includes('href="#skills"'), 'Navbar has Skills link');
  assert(navHtml.includes('href="#projects"'), 'Navbar has Projects link');
  assert(navHtml.includes('href="#experience"'), 'Navbar has Experience link');
  assert(navHtml.includes('href="#certifications"'), 'Navbar has Certifications link');
  assert(navHtml.includes('href="#education"'), 'Navbar has Education link');
  assert(navHtml.includes('href="#contact"'), 'Navbar has Contact link');
  assert(navHtml.includes('Resume'), 'Navbar has Resume button');
  assert(navHtml.includes('aria-label='), 'Navbar has accessible aria labels for buttons');
} catch (e) {
  assert(false, `Navbar render failed: ${e.message}`);
}

// 3. Test Hero Section
console.log('\nTest 3: Hero Section');
try {
  const heroHtml = renderToString(<Hero onOpenResume={() => {}} />);
  assert(heroHtml.includes('Turning Raw Data Into'), 'Hero headline rendered');
  assert(heroHtml.includes('Meaningful Business Insights'), 'Hero gradient subheadline rendered');
  assert(heroHtml.includes('Open to Data Analyst Opportunities'), 'Availability indicator rendered');
  assert(heroHtml.includes('Explore My Projects'), 'Primary CTA Explore My Projects rendered');
  assert(heroHtml.includes('Download Resume'), 'Secondary CTA Download Resume rendered');
  assert(heroHtml.includes('Python') && heroHtml.includes('SQL') && heroHtml.includes('Power BI'), 'Tech badges rendered');
  assert(heroHtml.includes('5,000+'), 'Records metric rendered');
  assert(heroHtml.includes('18') && (heroHtml.includes('Forecast') || heroHtml.includes('FORECAST') || heroHtml.includes('Inventory')), 'Forecast metric rendered');
  assert(heroHtml.includes('<svg'), 'Dashboard SVG chart rendered');
} catch (e) {
  assert(false, `Hero render failed: ${e.message}`);
}

// 4. Test About Me Section
console.log('\nTest 4: About Me Section');
try {
  const aboutHtml = renderToString(<About />);
  assert(aboutHtml.includes('Passionate About Data') && aboutHtml.includes('Driven by Insights'), 'About Me title rendered');
  assert(aboutHtml.includes('Bhaskar Engineering College'), 'College name rendered');
  assert(aboutHtml.includes('B.Tech Computer Science Engineering'), 'Degree rendered');
  assert(aboutHtml.includes('2027'), 'Graduation year rendered');
  assert(aboutHtml.includes('Hyderabad, Telangana'), 'Location rendered');
  assert(aboutHtml.includes('akshaypeddi91@gmail.com'), 'Email rendered');
  assert(aboutHtml.includes('+91 9182171443'), 'Phone rendered');
} catch (e) {
  assert(false, `About render failed: ${e.message}`);
}

// 5. Test Skills & Expertise Section
console.log('\nTest 5: Skills & Expertise Section');
try {
  const skillsHtml = renderToString(<Skills />);
  assert(skillsHtml.includes('Tools I Use') && skillsHtml.includes('Transform Data Into Insights'), 'Skills section title rendered');
  assert(skillsHtml.includes('Data Analytics'), 'Data Analytics category present');
  assert(skillsHtml.includes('Programming'), 'Programming category present');
  assert(skillsHtml.includes('Databases'), 'Databases category present');
  assert(skillsHtml.includes('Business Intelligence'), 'BI category present');
  assert(skillsHtml.includes('Business Reporting'), 'Reporting category present');
  assert(skillsHtml.includes('Professional Skills'), 'Professional skills category present');
  assert(skillsHtml.includes('Data Cleaning') && skillsHtml.includes('Pandas') && skillsHtml.includes('Pivot Tables'), 'Core skills tags present');
} catch (e) {
  assert(false, `Skills render failed: ${e.message}`);
}

// 6. Test Featured Projects & Modal
console.log('\nTest 6: Featured Projects & Case Study Modal');
try {
  const projectsHtml = renderToString(<Projects />);
  assert(projectsHtml.includes('Turning Data Into') && projectsHtml.includes('Real-World Solutions'), 'Projects section title rendered');
  assert(projectsHtml.includes('Food Stall Sales Analytics'), 'Flagship project rendered');
  assert(projectsHtml.includes('5,000+ Records Analyzed'), 'Flagship highlight metric rendered');
  assert(projectsHtml.includes('18% Reported Inventory Forecast Improvement'), 'Flagship impact metric rendered');
  assert(projectsHtml.includes('Explore Full Case Study'), 'Case study action button rendered');

  // Test Modal render directly
  const modalHtml = renderToString(
    <ProjectModal 
      project={featuredProjects[0]} 
      isOpen={true} 
      onClose={() => {}} 
    />
  );
  assert(modalHtml.includes('Step-by-Step Analytical Pipeline'), 'Case Study pipeline tab rendered');
  assert(modalHtml.includes('Tools &amp; Technologies Used') || modalHtml.includes('Tools & Technologies Used'), 'Case Study tech stack rendered');
  assert(modalHtml.includes('Volume Processed'), 'Case study volume highlight rendered');
} catch (e) {
  assert(false, `Projects render failed: ${e.message}`);
}

// 7. Test Professional Journey / Experience Section
console.log('\nTest 7: Professional Journey (Experience) Section');
try {
  const expHtml = renderToString(<Experience />);
  assert(expHtml.includes('My Professional') && expHtml.includes('Journey'), 'Experience section title rendered');
  assert(expHtml.includes('CodeAlpha'), 'CodeAlpha internship present');
  assert(expHtml.includes('CodeSoft'), 'CodeSoft internship present');
  assert(expHtml.includes('Bite &amp; Buzz') || expHtml.includes('Bite & Buzz'), 'Bite & Buzz operations role present');
  assert(expHtml.includes('Singareni Collieries Company Limited'), 'Singareni Collieries role present');
} catch (e) {
  assert(false, `Experience render failed: ${e.message}`);
}

// 8. Test Certifications Section
console.log('\nTest 8: Certifications & Continuous Learning Section');
try {
  const certHtml = renderToString(<Certifications />);
  assert(certHtml.includes('Certifications') && certHtml.includes('Continuous Learning'), 'Certifications title rendered');
  assert(certHtml.includes('CodeAlpha'), 'CodeAlpha certification card present');
  assert(certHtml.includes('CodeSoft'), 'CodeSoft certification card present');
  assert(certHtml.includes('Completed'), 'Completion status present');
} catch (e) {
  assert(false, `Certifications render failed: ${e.message}`);
}

// 9. Test Education Section
console.log('\nTest 9: Education Section');
try {
  const eduHtml = renderToString(<Education />);
  assert(eduHtml.includes('Education') && eduHtml.includes('Qualifications'), 'Education title rendered');
  assert(eduHtml.includes('7.4 CGPA'), 'B.Tech CGPA present');
  assert(eduHtml.includes('8.9 CGPA'), 'Diploma CGPA present');
  assert(eduHtml.includes('10.0 GPA'), 'SSC GPA present');
} catch (e) {
  assert(false, `Education render failed: ${e.message}`);
}

// 10. Test Contact Section
console.log('\nTest 10: Contact Section (Single dedicated section)');
try {
  const contactHtml = renderToString(<Contact />);
  assert(contactHtml.includes("In Touch"), 'Contact title rendered');
  assert(contactHtml.includes('akshaypeddi91@gmail.com'), 'Email displayed');
  assert(contactHtml.includes('+91 9182171443'), 'Phone displayed');
  assert(contactHtml.includes('Hyderabad, Telangana, India'), 'Location displayed');
  assert(contactHtml.includes('Full Name'), 'Full name label present');
  assert(contactHtml.includes('Email Address'), 'Email label present');
  assert(contactHtml.includes('Subject'), 'Subject label present');
  assert(contactHtml.includes('Message'), 'Message label present');
  assert(contactHtml.includes('Send Message'), 'Send Message button present');
} catch (e) {
  assert(false, `Contact render failed: ${e.message}`);
}

// 11. Test Footer Section
console.log('\nTest 11: Footer Section');
try {
  const footerHtml = renderToString(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>
  );
  assert(footerHtml.includes('Peddi Akshay'), 'Footer has owner name');
  assert(footerHtml.includes('Uday Kumbhar'), 'Footer has developer credit for Uday Kumbhar');
  assert(footerHtml.includes('All rights reserved'), 'Footer has copyright line');
  assert(footerHtml.includes('Theme') || footerHtml.includes('Mode'), 'Footer has theme controls');
  assert(footerHtml.includes('Back to top') || footerHtml.includes('ArrowUp'), 'Footer has back to top button');
} catch (e) {
  assert(false, `Footer render failed: ${e.message}`);
}

// 12. Test Resume Modal
console.log('\nTest 12: Resume Modal Preview');
try {
  const resumeHtml = renderToString(
    <ResumeModal isOpen={true} onClose={() => {}} />
  );
  assert(resumeHtml.includes('Curriculum Vitae Preview'), 'Resume modal title rendered');
  assert(resumeHtml.includes('Print / Save as PDF'), 'Print button rendered');
  assert(resumeHtml.includes('Peddi Akshay'), 'Resume owner name rendered');
  assert(resumeHtml.includes('Bhaskar Engineering College'), 'Resume education rendered');
  assert(resumeHtml.includes('Food Stall Sales Analytics'), 'Resume project rendered');
} catch (e) {
  assert(false, `Resume modal render failed: ${e.message}`);
}

console.log('\n====================================================');
console.log(`TEST RESULTS: ${passedTests}/${totalTests} TESTS PASSED (${Math.round((passedTests/totalTests)*100)}%)`);
console.log('====================================================');

if (passedTests === totalTests) {
  console.log('SUCCESS: All sections rendered and validated without errors.');
  process.exit(0);
} else {
  console.error('ERROR: Some tests failed.');
  process.exit(1);
}
