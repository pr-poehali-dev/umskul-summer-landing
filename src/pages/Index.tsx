import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CourseProgram from "@/components/CourseProgram";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Benefits />
      <CourseProgram />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
