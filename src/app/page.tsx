 
import HomePage from "./(home-page)/HomePage";
import {  NavigationHomePage } from "@/components/admin/NavigationHomePage";
import { Metadata } from 'next';
import WhatIProvide from "./(whatIProvide)/What-i-provide";
import Skills from "./(skills)/Skills";
import ProjectsPage from "./(projects)/Projects";
import ContactPage from "./(contact)/ContactPage";

export const metadata: Metadata = {
  title: 'Abdalraheem Ghannam',
  description: 'Front-End Developer and Information Technology Professional ',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
};
export default function Home() {
  return (
    <div> 

      <NavigationHomePage/>
 
      <HomePage id="home"/>
      <WhatIProvide id="what-i-provide"/>
      <Skills id="skills" />
      <ProjectsPage id="projects"/>
      <ContactPage id="contact-me"/>
    </div>
        
      
  );
}
