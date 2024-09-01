import img from "../assets/course1.jpeg"
import img1 from "../assets/courseImg1.png"
import img2 from "../assets/courseImg2.png"

const courseModel = [
  {
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
    description: "Learn the basics of React Native development and build your first mobile app.",
    enrollmentStatus: 'Open',
    thumbnail: img,
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
      { week: 1, topic: 'Introduction to React Native', content: 'Overview of React Native, setting up your development environment.' },
      { week: 2, topic: 'Building Your First App', content: 'Creating a simple mobile app using React Native components.' }
    ],
 
  },
  {
    id: 2,
    name: 'Advanced JavaScript',
    instructor: 'Jane Williams',
    description: "Deep dive into advanced JavaScript concepts like closures, async programming, and module bundlers.",
    enrollmentStatus: 'Open',
    thumbnail: img1,
    duration: '10 weeks',
    schedule: 'Mondays and Wednesdays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Intermediate JavaScript knowledge'],
    syllabus: [
      { week: 1, topic: 'Closures and Scope', content: 'Understanding closures and the scope chain.' },
      { week: 2, topic: 'Asynchronous Programming', content: 'Mastering promises, async/await, and event loops.' }
    ],
  
  },
  {
    id: 3,
    name: 'Full Stack Web Development',
    instructor: 'Mike Anderson',
    description: "Become a full-stack developer by mastering both frontend and backend development.",
    enrollmentStatus: 'InProgress',
    thumbnail: img2,
    duration: '16 weeks',
    schedule: 'Fridays and Saturdays, 10:00 AM - 12:00 PM',
    location: 'Online',
    prerequisites: ['Basic HTML, CSS, and JavaScript knowledge'],
    syllabus: [
      { week: 1, topic: 'Frontend Fundamentals', content: 'Introduction to HTML, CSS, and JavaScript.' },
      { week: 2, topic: 'Backend Basics', content: 'Getting started with Node.js and Express.' }
    ],
 
  },
  {
    id: 4,
    name: 'Data Structures and Algorithms',
    instructor: 'Sophia Martinez',
    description: "Master data structures and algorithms to improve problem-solving skills for technical interviews.",
    enrollmentStatus: 'Open',
    thumbnail: img,
    duration: '12 weeks',
    schedule: 'Tuesdays and Thursdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic programming knowledge in any language'],
    syllabus: [
      { week: 1, topic: 'Introduction to Data Structures', content: 'Overview of arrays, linked lists, stacks, and queues.' },
      { week: 2, topic: 'Algorithm Basics', content: 'Understanding sorting and searching algorithms.' }
    ],

  },
  {
    id: 5,
    name: 'Python for Data Science',
    instructor: 'Lucas Kim',
    description: "Learn Python programming and data science techniques to analyze and visualize data.",
    enrollmentStatus: 'Closed',
    thumbnail: img2,
    duration: '8 weeks',
    schedule: 'Wednesdays and Fridays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python programming knowledge'],
    syllabus: [
      { week: 1, topic: 'Python Basics', content: 'Introduction to Python syntax and data types.' },
      { week: 2, topic: 'Data Analysis with Pandas', content: 'Exploring data analysis using the Pandas library.' }
    ],

  },
  {
    id: 6,
    name: 'Cloud Computing with AWS',
    instructor: 'Emma Garcia',
    description: "Get hands-on experience with AWS services and cloud computing concepts.",
    enrollmentStatus: 'InProgress',
    thumbnail: img1,
    duration: '10 weeks',
    schedule: 'Mondays and Thursdays, 5:30 PM - 7:30 PM',
    location: 'Online',
    prerequisites: ['Basic networking and cloud computing knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Cloud Computing', content: 'Overview of cloud concepts and AWS services.' },
      { week: 2, topic: 'Working with EC2 and S3', content: 'Deploying applications and storing data in the cloud.' }
    ],

  },
  {
    id: 7,
    name: 'Machine Learning Fundamentals',
    instructor: 'David Johnson',
    description: "Learn the foundations of machine learning and build your first ML models.",
    enrollmentStatus: 'Open',
    thumbnail: img,
    duration: '14 weeks',
    schedule: 'Tuesdays and Fridays, 4:00 PM - 6:00 PM',
    location: 'Online',
    prerequisites: ['Basic Python programming', 'Statistics knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Machine Learning', content: 'Overview of machine learning concepts and types of algorithms.' },
      { week: 2, topic: 'Linear Regression', content: 'Implementing linear regression models from scratch.' }
    ],
  },
  {
    id: 8,
    name: 'UI/UX Design Essentials',
    instructor: 'Olivia Turner',
    description: "Understand the principles of UI/UX design and create user-friendly interfaces.",
    enrollmentStatus: 'Closed',
    thumbnail: img1,
    duration: '6 weeks',
    schedule: 'Mondays and Wednesdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic design knowledge', 'Familiarity with design tools like Figma'],
    syllabus: [
      { week: 1, topic: 'UI/UX Principles', content: 'Introduction to the fundamentals of UI/UX design.' },
      { week: 2, topic: 'Wireframing and Prototyping', content: 'Creating wireframes and prototypes for user interfaces.' }
    ],
  },
  {
    id: 9,
    name: 'DevOps with Kubernetes',
    instructor: 'Brian Wright',
    description: "Master DevOps practices and container orchestration using Kubernetes.",
    enrollmentStatus: 'Open',
    thumbnail: img,
    duration: '10 weeks',
    schedule: 'Thursdays and Saturdays, 5:00 PM - 7:00 PM',
    location: 'Online',
    prerequisites: ['Basic knowledge of Linux and containers'],
    syllabus: [
      { week: 1, topic: 'Introduction to DevOps', content: 'Understanding the DevOps lifecycle and CI/CD pipelines.' },
      { week: 2, topic: 'Working with Containers', content: 'Building and managing containers with Docker and Kubernetes.' }
    ],
  },
  {
    id: 10,
    name: 'Cybersecurity Fundamentals',
    instructor: 'Chris Edwards',
    description: "Learn the basics of cybersecurity, including network security, cryptography, and ethical hacking.",
    enrollmentStatus: 'InProgress',
    thumbnail: img,
    duration: '12 weeks',
    schedule: 'Tuesdays and Fridays, 7:00 PM - 9:00 PM',
    location: 'Online',
    prerequisites: ['Basic IT knowledge'],
    syllabus: [
      { week: 1, topic: 'Introduction to Cybersecurity', content: 'Overview of cybersecurity principles and threats.' },
      { week: 2, topic: 'Network Security Basics', content: 'Securing networks and understanding firewalls.' }
    ],
  }
];

export default courseModel;