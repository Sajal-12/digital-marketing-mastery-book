import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, Trophy, Star } from "lucide-react";
import heroImage from "@/assets/digital-marketing-hero.jpg";

export default function CourseHeader() {
  return (
    <div className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Digital Marketing" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero/90" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                Complete Masterclass
              </Badge>
              <h1 className="text-5xl font-bold leading-tight">
                Digital Marketing
                <span className="block text-accent-glow">Mastery Course</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 leading-relaxed">
                Master every aspect of digital marketing from SEO to advanced analytics. 
                Transform from beginner to professional with our comprehensive, 
                example-rich curriculum designed by industry experts.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>8 Comprehensive Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>12+ Hours Content</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>Real-World Case Studies</span>
              </div>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Learning Now
            </Button>
          </div>

          {/* Right Content - Course Stats */}
          <div className="space-y-6">
            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary-foreground mb-4">Course Overview</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-primary-foreground/80">Progress</span>
                    <span className="text-primary-foreground font-medium">0%</span>
                  </div>
                  <Progress value={0} className="bg-primary-foreground/20" />
                  
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-foreground">35+</div>
                      <div className="text-sm text-primary-foreground/80">Lessons</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-foreground">50+</div>
                      <div className="text-sm text-primary-foreground/80">Examples</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-foreground">20+</div>
                      <div className="text-sm text-primary-foreground/80">Case Studies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-foreground">100%</div>
                      <div className="text-sm text-primary-foreground/80">Practical</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-primary-foreground mb-3">What You'll Master</h3>
                <div className="space-y-3">
                  {[
                    "SEO & Website Optimization",
                    "Social Media Marketing",
                    "PPC Advertising (Google & Facebook)",
                    "Email Marketing & Automation",
                    "Content Marketing Strategy",
                    "Analytics & Data Interpretation",
                    "Conversion Rate Optimization",
                    "Advanced Growth Strategies"
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Star className="h-4 w-4 text-accent-glow" />
                      <span className="text-primary-foreground/90">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}