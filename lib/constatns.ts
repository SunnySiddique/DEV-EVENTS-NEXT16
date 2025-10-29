export interface DevEvent {
  title: string;
  image: string; // path under /images in public
  slug: string;
  location: string;
  date: string; // human friendly date
  time: string; // human friendly time
  description?: string;
}

export const events: DevEvent[] = [
  {
    title: "React Summit",
    image: "/images/event1.png",
    slug: "react-summit-2026",
    location: "Amsterdam, Netherlands",
    date: "May 12, 2026",
    time: "09:00 AM",
    description:
      "A gathering for React developers featuring talks, workshops and networking with industry leaders.",
  },
  {
    title: "JSConf EU",
    image: "/images/event2.png",
    slug: "jsconf-eu-2026",
    location: "Berlin, Germany",
    date: "April 21, 2026",
    time: "10:00 AM",
    description:
      "The European edition of JSConf — deep-dive sessions on modern JavaScript and ecosystem tooling.",
  },
  {
    title: "GitHub Universe",
    image: "/images/event3.png",
    slug: "github-universe-2025",
    location: "San Francisco, CA, USA",
    date: "November 12, 2025",
    time: "09:30 AM",
    description:
      "GitHub's flagship event with product announcements, community stories, and hands-on sessions.",
  },
  {
    title: "HackMIT",
    image: "/images/event4.png",
    slug: "hackmit-2026",
    location: "Cambridge, MA, USA",
    date: "January 17, 2026",
    time: "06:00 PM",
    description:
      "An annual student-run hackathon focused on fast prototyping, mentorship, and prizes.",
  },
  {
    title: "NodeConf Global",
    image: "/images/event5.png",
    slug: "nodeconf-global-2026",
    location: "London, UK",
    date: "February 9, 2026",
    time: "09:00 AM",
    description:
      "Conference for Node.js contributors and users covering performance, native modules and scaling.",
  },
  {
    title: "KubeCon + CloudNativeCon",
    image: "/images/event6.png",
    slug: "kubecon-2026",
    location: "Seattle, WA, USA",
    date: "March 3, 2026",
    time: "08:30 AM",
    description:
      "The largest cloud native conference — sessions on Kubernetes, observability, and platform design.",
  },
];

export default events;
