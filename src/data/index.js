// Single source of truth. For each project, fill in repo, demo, api and screenshots ONLY when real; the page shows them automatically.
//   api: { title: 'POST /predict', request: '...', response: '...' }   screenshots: [{ src: '/screens/x.webp', alt: '...' }]
//  Every fact here comes from the resume or your own brief.
export const meta = {
  name: 'Kunisetty Rahithya', email: 'krahithya7@gmail.com', phone: '+91-8143526740',
  location: 'Guntur, Andhra Pradesh, India', relocation: 'Open to relocation, Bengaluru preferred',
  github: 'https://github.com/Rahithya47',
  linkedin: 'https://www.linkedin.com/in/rahithya-kunisetty-2778342a3/',
  resume: '/resume.pdf',
};
export const profiles = [
  { name: 'GitHub', handle: 'Rahithya47', url: meta.github },
  { name: 'LinkedIn', handle: 'rahithya-kunisetty', url: meta.linkedin },
  { name: 'LeetCode', handle: 'cDYh7QJQnp', url: 'https://leetcode.com/u/cDYh7QJQnp/' },
  { name: 'HackerRank', handle: 'krahithya7', url: 'https://www.hackerrank.com/profile/krahithya7' },
  { name: 'GeeksforGeeks', handle: 'rk506ar93', url: 'https://www.geeksforgeeks.org/user/rk506ar93/' },
];
export const highlights = [
  ['8.3 / 10', 'B.Tech IT CGPA'], ['2027', 'Graduation year'],
  ['100+', 'Coding challenges solved'], ['300+', 'Attendees at the fest I coordinated'],
];
export const projects = [
  { id: 'resume', filters: ['Backend', 'AI / ML'], title: 'AI Resume Builder', kind: 'Backend and generative AI',
    summary: 'A full-stack resume builder. An LLM tailors resume content and suggests ATS keywords for a job description, then the app exports a PDF.',
    stack: ['Python', 'Flask', 'MySQL', 'JavaScript', 'LLM APIs', 'ReportLab'],
    problem: 'Resumes are often filtered by ATS software before a person reads them, and tailoring one to every job description takes time.',
    solution: 'Users enter their details. An LLM API drafts a tailored professional summary and keyword suggestions, and ReportLab renders the result as a PDF in several templates.',
    contribution: ['Designed the REST APIs for resume parsing, authentication and PDF generation', 'Built the MySQL models and CRUD handling', 'Integrated the LLM API for summaries and ATS keyword optimization'],
    flow: ['User input', 'Flask REST API', 'LLM API', 'MySQL', 'ReportLab PDF'],
    decisions: ['LLM calls, database models and PDF rendering live in separate layers so each can change on its own.'],
    repo: null, demo: null, api: null, screenshots: [] },
  { id: 'mouse', filters: ['Computer Vision', 'AI / ML'], title: 'AI Virtual Mouse', kind: 'Computer vision',
    summary: 'Control the cursor with your hand through a webcam. Move, click, drag and scroll with gestures.',
    stack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'PyAutoGUI'],
    problem: 'Pointing normally needs a physical mouse. I wanted to see how far a plain webcam could replace it.',
    solution: 'MediaPipe finds hand landmarks in each frame, and gesture rules turn finger positions into real operating-system cursor events.',
    contribution: ['Built the pipeline that maps hand landmarks to cursor events', 'Implemented click, drag and scroll gestures', 'Tuned frame processing to reduce latency and added image preprocessing for changing light'],
    flow: ['Webcam frame', 'OpenCV preprocessing', 'MediaPipe landmarks', 'Gesture rules', 'PyAutoGUI cursor'],
    decisions: ['Preprocessing adapts to lighting so tracking stays steady indoors and near windows.'],
    repo: null, demo: null, api: null, screenshots: [] },
  { id: 'spam', filters: ['AI / ML', 'Backend'], results: ['About 92% accuracy, as reported on my resume.'], title: 'Spam Email Classification System', kind: 'Machine learning',
    summary: 'A classifier that flags spam in real time, served through a Flask API. About 92% accuracy.',
    stack: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
    problem: 'Spam needs to be caught the moment a message arrives, not in a batch afterwards.',
    solution: 'Text is cleaned, converted with TF-IDF, and classified by a tuned Scikit-learn model that a Flask endpoint exposes for instant predictions.',
    contribution: ['Built the text pre-processing pipeline and TF-IDF vectorization', 'Tuned hyperparameters with Scikit-learn', 'Deployed the model behind a Flask REST API'],
    flow: ['Email text', 'Pre-processing', 'TF-IDF', 'Scikit-learn model', 'Flask API'],
    decisions: ['The model and the API are kept apart, so retraining does not touch the web layer.'],
    repo: null, demo: null, api: null, screenshots: [] },
];
export const skillGroups = [
  ['Programming', ['Python', 'JavaScript', 'SQL', 'C', 'C# (basics)']],
  ['Backend', ['Flask', 'REST APIs']],
  ['Frontend', ['HTML', 'CSS', 'JavaScript']],
  ['Databases', ['MySQL']],
  ['AI / ML', ['Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'MediaPipe', 'LLM APIs', 'Prompt engineering']],
  ['DevOps / Tools', ['Git', 'GitHub', 'GitHub Actions', 'Docker']],
  ['Testing', ['Postman', 'Selenium', 'Unit testing']],
];
export const learning = ['Java', 'Spring Boot', 'React', 'AWS', 'System design'];
export const experience = [
  { title: 'Academic project work', org: 'Vignan University', when: '2024', note: 'Built three end-to-end projects: an AI Resume Builder, an AI Virtual Mouse and a Spam Email Classification System. The case studies are in the Projects section.' },
  { title: 'Cybersecurity Analyst Virtual Experience', org: 'TCS, via Forage', when: 'Virtual program', note: 'A self-paced virtual job simulation. It is not employment.' },
  { title: 'Student Coordinator, Mahotsav Cultural Fest', org: 'Vignan University', when: '2024', note: 'Student leadership role. Managed event execution for 300+ attendees.' },
];
export const education = [
  { level: 'B.Tech, Information Technology', school: "Vignan's Foundation for Science, Technology & Research", place: 'Vadlamudi, Guntur, Andhra Pradesh', when: 'Expected graduation 2027', score: 'CGPA 8.3 / 10', courses: ['Data Structures and Algorithms', 'Object-Oriented Programming', 'Database Management Systems', 'Operating Systems', 'Computer Networks', 'AI and machine learning fundamentals'] },
  { level: 'Intermediate (10+2)', school: 'Arka Junior College', when: '2023', score: '89.7%' },
  { level: 'SSC (10th grade)', school: 'R.J.S. High School', when: '2021', score: '98.1%' },
];
export const achievements = [
  { title: 'Student Coordinator, Mahotsav Cultural Fest 2024', text: 'Managed event execution for 300+ attendees at Vignan University.' },
  { title: '100+ coding challenges solved', text: 'Practice across LeetCode, HackerRank and GeeksforGeeks.' },
];
export const certifications = [
  ['Python Essentials 1', 'Cisco', 'Programming'], ['Python Essentials 2', 'Cisco', 'Programming'],
  ['Introduction to Data Science', 'Cisco', 'AI and data'], ['Introduction to Modern AI', 'Cisco', 'AI and data'],
  ['Artificial Intelligence Virtual Experience', 'Accenture', 'AI and data'], ['Machine Learning for Beginners', 'Simplilearn', 'AI and data'],
  ['CCNA: Introduction to Networks', 'Cisco', 'Networking'], ['CCNA: Switching, Routing and Wireless', 'Cisco', 'Networking'],
  ['CCNA: Enterprise Networking, Security and Automation', 'Cisco', 'Networking'],
  ['Cybersecurity Analyst Virtual Experience', 'TCS, via Forage', 'Security'],
].map(([title, issuer, category]) => ({ title, issuer, category, kind: /Virtual Experience/.test(title) ? 'Virtual job simulation' : 'Course completion' }));
