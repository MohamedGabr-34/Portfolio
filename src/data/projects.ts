import type { Project } from "../types/projects";

export const projects: Project[] = [
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    description:
      "A YouTube-style video browsing interface with search, categories, channels, and a full video page. Consumes the RapidAPI YouTube API to load real video data with dynamic routing between pages.",
    techStack: ["React", "JavaScript", "CSS", "RapidAPI"],
    liveDemo: "https://mohamedgabr-34.github.io/youtube-clone/",
    github: "https://github.com/MohamedGabr-34/youtube-clone",
    thumbnail: "/images/projects/YT/Main.png",
    featured: true,
    challenges:
      "Handling API rate limits from RapidAPI while keeping the UI responsive and managing loading/error states cleanly.",
    whatILearned:
      "Deepened my understanding of REST API integration, dynamic routing, and building scalable component structures in React.",
    video: "/videos/youtube.mp4",
    gallery: [
      {
        image: "/images/projects/YT/Channel.png",
        description: "Channel",
      },
      {
        image: "/images/projects/YT/PlayList.png",
        description: "PlayList",
      },
      {
        image: "/images/projects/YT/Videos.png",
        description: "Videos",
      },
      {
        image: "/images/projects/YT/Main.png",
        description: "Main",
      },
    ],
  },

  {
    id: "lms-frontend",
    title: "LMS Frontend",
    description:
      "A responsive Learning Management System frontend inspired by Udemy. Features course browsing, authentication via Clerk, and a scalable component structure ready for backend integration.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Clerk", "Vite"],
    liveDemo: "https://mohamedgabr-34.github.io/LMS/",
    github: "https://github.com/MohamedGabr-34/LMS",
    thumbnail: "/images/projects/lms-frontend-thumbnail.png",
    featured: true,
    challenges:
      "Designing a scalable component structure that could support future role-based features and backend integration.",
    whatILearned:
      "Gained experience with Clerk authentication, component architecture for large apps, and Tailwind CSS layout systems.",
    video: "/videos/lms.mp4",
    gallery: [
      {
        image: "/images/projects/lms-frontend-homePage.png",
        description: "lms-frontend-homePage",
      },
      {
        image: "/images/projects/course-detailsPage.png",
        description: "course-detailsPage",
      },
      {
        image: "/images/projects/progressPage.png",
        description: "progressPage",
      },
      {
        image: "/images/projects/coursePage.png",
        description: "coursePage",
      },
      {
        image: "/images/projects/instruactorDash.png",
        description: "instruactorDash",
      },
      {
        image: "/images/projects/addCourse.png",
        description: "addCourse",
      },
      {
        image: "/images/projects/instructorCourses.png",
        description: "instructorCourses",
      },
      {
        image: "/images/projects/CourseList.png",
        description: "CourseList",
      },
    ],
  },
  {
    id: "doctor-appointments",
    title: "Doctor Appointments",
    description:
      "A responsive doctor appointment booking application that allows patients to browse doctors, view profiles, and schedule appointments through an intuitive interface. Built with a scalable architecture ready for backend integration and real-time appointment management.",
    techStack: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    liveDemo: "https://mohamedgabr-34.github.io/DoctorAppiontments/",
    github: "https://github.com/MohamedGabr-34/DoctorAppiontments",
    thumbnail: "/images/projects/DocApp/doctor-appointments-thumbnail.png",
    featured: true,
    challenges:
      "Designing an appointment booking workflow while keeping the application modular and scalable for future backend integration, authentication, and doctor availability management.",
    whatILearned:
      "Improved my skills in building multi-page React applications, managing application state, creating reusable UI components, and designing user-friendly booking flows with Tailwind CSS.",
    video: "/videos/doctor-appointments.mp4",
    gallery: [
      {
        image: "/images/projects/DocApp/homePage.png",
        description: "Home Page",
      },
      {
        image: "/images/projects/DocApp/Doctors.png",
        description: "All Doctors",
      },

      {
        image: "/images/projects/DocApp/Appointment.png",
        description: "Appointment Booking",
      },
      {
        image: "/images/projects/DocApp/MyAppointments.png",
        description: "My Appointments",
      },
      {
        image: "/images/projects/DocApp/AboutUs.png",
        description: "AboutUs",
      },
      {
        image: "/images/projects/DocApp/ContactUs.png",
        description: "ContactUs",
      },
      {
        image: "/images/projects/DocApp/MyProfile.png",
        description: "MyProfile",
      },
    ],
  },
];
