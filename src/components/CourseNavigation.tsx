import { useState } from "react";
import { ChevronDown, ChevronRight, BookOpen, TrendingUp, Users, Mail, Search, BarChart, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Chapter {
  id: string;
  title: string;
  icon: React.ElementType;
  sections: {
    id: string;
    title: string;
    duration: string;
  }[];
}

const chapters: Chapter[] = [
  {
    id: "intro",
    title: "Introduction to Digital Marketing",
    icon: BookOpen,
    sections: [
      { id: "what-is-digital-marketing", title: "What is Digital Marketing?", duration: "15 min" },
      { id: "evolution", title: "Evolution of Marketing", duration: "12 min" },
      { id: "digital-vs-traditional", title: "Digital vs Traditional Marketing", duration: "10 min" },
      { id: "career-opportunities", title: "Career Opportunities", duration: "8 min" }
    ]
  },
  {
    id: "seo",
    title: "SEO & Website Optimization",
    icon: Search,
    sections: [
      { id: "seo-fundamentals", title: "SEO Fundamentals", duration: "20 min" },
      { id: "keyword-research", title: "Keyword Research", duration: "18 min" },
      { id: "on-page-seo", title: "On-Page SEO", duration: "25 min" },
      { id: "technical-seo", title: "Technical SEO", duration: "22 min" },
      { id: "link-building", title: "Link Building Strategies", duration: "15 min" }
    ]
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: TrendingUp,
    sections: [
      { id: "content-strategy", title: "Content Strategy", duration: "18 min" },
      { id: "content-types", title: "Types of Content", duration: "16 min" },
      { id: "content-creation", title: "Content Creation Process", duration: "20 min" },
      { id: "content-distribution", title: "Content Distribution", duration: "14 min" }
    ]
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    icon: Users,
    sections: [
      { id: "social-strategy", title: "Social Media Strategy", duration: "17 min" },
      { id: "platform-specific", title: "Platform-Specific Marketing", duration: "25 min" },
      { id: "social-advertising", title: "Social Media Advertising", duration: "20 min" },
      { id: "community-management", title: "Community Management", duration: "12 min" }
    ]
  },
  {
    id: "email",
    title: "Email Marketing",
    icon: Mail,
    sections: [
      { id: "email-fundamentals", title: "Email Marketing Fundamentals", duration: "15 min" },
      { id: "list-building", title: "List Building Strategies", duration: "18 min" },
      { id: "email-campaigns", title: "Email Campaign Types", duration: "20 min" },
      { id: "automation", title: "Email Automation", duration: "22 min" }
    ]
  },
  {
    id: "ppc",
    title: "Pay-Per-Click Advertising",
    icon: Target,
    sections: [
      { id: "ppc-basics", title: "PPC Fundamentals", duration: "16 min" },
      { id: "google-ads", title: "Google Ads Mastery", duration: "30 min" },
      { id: "facebook-ads", title: "Facebook Advertising", duration: "25 min" },
      { id: "campaign-optimization", title: "Campaign Optimization", duration: "20 min" }
    ]
  },
  {
    id: "analytics",
    title: "Analytics & Data-Driven Marketing",
    icon: BarChart,
    sections: [
      { id: "analytics-setup", title: "Analytics Setup", duration: "18 min" },
      { id: "data-interpretation", title: "Data Interpretation", duration: "22 min" },
      { id: "kpis-metrics", title: "KPIs and Metrics", duration: "15 min" },
      { id: "reporting", title: "Reporting & Insights", duration: "17 min" }
    ]
  },
  {
    id: "advanced",
    title: "Advanced Strategies",
    icon: Zap,
    sections: [
      { id: "conversion-optimization", title: "Conversion Rate Optimization", duration: "25 min" },
      { id: "marketing-automation", title: "Marketing Automation", duration: "20 min" },
      { id: "growth-hacking", title: "Growth Hacking", duration: "18 min" },
      { id: "future-trends", title: "Future Trends & AI", duration: "15 min" }
    ]
  }
];

interface CourseNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function CourseNavigation({ activeSection, onSectionChange }: CourseNavigationProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>(["intro"]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const getActiveChapter = () => {
    return chapters.find(chapter => 
      chapter.sections.some(section => section.id === activeSection)
    )?.id || "intro";
  };

  const activeChapter = getActiveChapter();

  return (
    <div className="w-80 bg-card border-r border-border h-full overflow-y-auto">
      <div className="p-6 border-b border-border">
        <h2 className="text-xl font-bold text-foreground mb-2">Digital Marketing Mastery</h2>
        <p className="text-sm text-muted-foreground">Complete course from basics to advanced</p>
      </div>

      <div className="p-4 space-y-2">
        {chapters.map((chapter) => {
          const isExpanded = expandedChapters.includes(chapter.id);
          const isActive = activeChapter === chapter.id;
          const Icon = chapter.icon;

          return (
            <div key={chapter.id} className="space-y-1">
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start p-3 h-auto",
                  isActive && "bg-primary/10 text-primary"
                )}
                onClick={() => toggleChapter(chapter.id)}
              >
                <Icon className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="flex-1 text-left font-medium">{chapter.title}</span>
                {isExpanded ? (
                  <ChevronDown className="h-4 w-4 flex-shrink-0" />
                ) : (
                  <ChevronRight className="h-4 w-4 flex-shrink-0" />
                )}
              </Button>

              {isExpanded && (
                <div className="ml-8 space-y-1">
                  {chapter.sections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className={cn(
                        "w-full justify-start p-2 h-auto text-sm",
                        activeSection === section.id 
                          ? "bg-primary text-primary-foreground" 
                          : "text-muted-foreground hover:text-foreground"
                      )}
                      onClick={() => onSectionChange(section.id)}
                    >
                      <div className="flex-1 text-left">
                        <div>{section.title}</div>
                        <div className="text-xs opacity-70">{section.duration}</div>
                      </div>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}