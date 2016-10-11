var bio = {
  name: 'Ankit Muchhala',
  role: 'Front-End Developer, Designer, Football Enthusiast, Occasional Cartoonist',
  contacts: {
    mobile: '9876543210',
    email: 'muchhalaankit@gmail.com',
    github: 'ankit-m',
    twitter: 'ankit_muchhala',
    location: 'Gandhinagar',
    blog: 'ankit-m.github.io'
  },
  welcomeMessage: 'Seeking full time positions as a software developer in an environment where I can utilize my existing skills, learn and gain experience.',
  skills: [
    'JavaScript, C, C++, Python',
    'Firebase, MySQL',
    'React, Angular, Node',
    'Mocha, Chai, Jasmine, Enzyme'
  ],
  biopic: 'images/avatar.jpg',
  display: function() {}
};

var education = {
  schools: [{
    name: 'DA-IICT',
    location: 'Gandhinagar',
    degree: 'B Tech',
    majors: ['ICT'],
    dates: '2013 - Present',
    url: 'http://www.daiict.ac.in/daiict/index.html'
  },
  {
    name: 'KV INS Hamla',
    location: 'Mumbai',
    degree: 'High School',
    majors: ['Computer Science'],
    dates: '2011 - 2013',
    url: 'http://www.kvinshamla.net/'
  }],
  onlineCourses: [{
    title: 'Udacity Front-End Nanodegree',
    school: 'Udacity',
    dates: 'Aug 2016 - Present',
    url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }],
  display: function() {}
};

var work = {
  jobs: [{
    employer: 'Google Summer of Code',
    title: 'CSE at TU Wien',
    location: 'Gandhinagar',
    dates: 'April 2016 - August 2016',
    description: 'Developed and deployed a language learning Chrome extension - Mind The Word. '
  },
  {
    employer: 'Lyearn',
    title: 'Web Developer',
    location: 'Gandhinagar',
    dates: 'June 2015 - November 2015',
    description: 'Developed an employee training module with various performance monitoring and evaluation features.'
  }],
  display: function() {}
};

var awards = {
  items: [{
    title: 'Winner ThinkQuest 2011',
    url: '',
    description: ''
  },
  {
    title: 'Winner InOut Hackathon 2016',
    url: '',
    description: ''
  },
  {
    title: 'Chairperson Google Developer Group DAIICT',
    url: '',
    description: ''
  }],
  display: function() {}
};

var projects = {
  projects: [{
    title: 'Project Surat',
    dates: 'August 2016',
    description: 'A real-time, location based file sharing system. Designed and optimized for mobile use.',
    images: [
      'images/surat1.jpg'
    ]
  },
  {
    title: 'SFIP',
    dates: 'Jan 2016 - April 2016',
    description: 'Portal to simplify interaction of students and faculty of various insitutions.',
    images: [
      'images/sfip1.jpg',
      'images/sfip2.jpg',
      'images/sfip3.jpg'
    ]
  }],
  display: function() {}
};
