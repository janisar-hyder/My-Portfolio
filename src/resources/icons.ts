import { IconType } from "react-icons";

import {
  HiArrowUpRight,
  HiOutlineLink,
  HiArrowTopRightOnSquare,
  HiEnvelope,
  HiCalendarDays,
  HiArrowRight,
  HiOutlineEye,
  HiOutlineEyeSlash,
  HiOutlineDocument,
  HiOutlineGlobeAsiaAustralia,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import {
  PiHouseDuotone,
  PiUserCircleDuotone,
  PiGridFourDuotone,
  PiBookBookmarkDuotone,
  PiImageDuotone,
} from "react-icons/pi";

import {
  SiJavascript,
  SiNextdotjs,
  SiFigma,
  SiSupabase,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiPostgresql,

  SiDocker,
  SiTypescript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

import { 
  FaDiscord, 
  FaGithub, 
  FaLinkedin, 
  FaX, 
  FaThreads, 
  FaInstagram, 
  FaXTwitter, 
  FaFacebook, 
  FaPinterest, 
  FaWhatsapp, 
  FaReddit, 
  FaTelegram,
} from "react-icons/fa6";

// Import code icons from a different set
import { 
  HiCode,
  HiServer,
  HiCloud,
  HiDatabase,
} from "react-icons/hi";

export const iconLibrary: Record<string, IconType> = {
  // Navigation & UI Icons (keep your existing ones)
  arrowUpRight: HiArrowUpRight,
  arrowRight: HiArrowRight,
  email: HiEnvelope,
  globe: HiOutlineGlobeAsiaAustralia,
  person: PiUserCircleDuotone,
  grid: PiGridFourDuotone,
  book: PiBookBookmarkDuotone,
  openLink: HiOutlineLink,
  calendar: HiCalendarDays,
  home: PiHouseDuotone,
  gallery: PiImageDuotone,
  discord: FaDiscord,
  eye: HiOutlineEye,
  eyeOff: HiOutlineEyeSlash,
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaX,
  twitter: FaXTwitter,
  threads: FaThreads,
  arrowUpRightFromSquare: HiArrowTopRightOnSquare,
  document: HiOutlineDocument,
  rocket: HiOutlineRocketLaunch,
  javascript: SiJavascript,
  nextjs: SiNextdotjs,
  supabase: SiSupabase,
  figma: SiFigma,
  facebook: FaFacebook,
  pinterest: FaPinterest,
  whatsapp: FaWhatsapp,
  reddit: FaReddit,
  telegram: FaTelegram,
  instagram: FaInstagram,
  
  // Add the missing generic icons
  code: HiCode,
  server: HiServer,
  cloud: HiCloud,
  database: HiDatabase,
  
  // Add the new tech icons
  react: SiReact,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  python: SiPython,
  express: SiExpress,
  postgresql: SiPostgresql,

  docker: SiDocker,
  typescript: SiTypescript,
  html: SiHtml5,
  css: SiCss3,
};

export type IconLibrary = typeof iconLibrary;
export type IconName = keyof IconLibrary;