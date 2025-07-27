import { useState } from "react";
import CourseHeader from "@/components/CourseHeader";
import CourseNavigation from "@/components/CourseNavigation";
import CourseContent from "@/components/CourseContent";

const Index = () => {
  const [activeSection, setActiveSection] = useState("what-is-digital-marketing");

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader />
      <div className="flex h-[calc(100vh-400px)]">
        <CourseNavigation 
          activeSection={activeSection} 
          onSectionChange={setActiveSection}
        />
        <CourseContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default Index;
