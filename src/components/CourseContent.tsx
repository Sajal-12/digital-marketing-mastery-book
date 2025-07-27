import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Users, TrendingUp, AlertCircle, Lightbulb, Target, BarChart, Zap } from "lucide-react";

interface CourseContentProps {
  activeSection: string;
}

const sectionContent: Record<string, any> = {
  "what-is-digital-marketing": {
    title: "What is Digital Marketing?",
    duration: "15 min",
    difficulty: "Beginner",
    content: {
      definition: "Digital marketing is the use of digital channels, platforms, and technologies to promote products, services, and brands to consumers and businesses. It encompasses all marketing efforts that use an electronic device or the internet.",
      keyPoints: [
        "Uses digital channels like search engines, social media, email, and websites",
        "Allows for real-time interaction with customers",
        "Provides measurable results and data-driven insights",
        "Cost-effective compared to traditional marketing",
        "Enables global reach with targeted precision"
      ],
      components: [
        {
          title: "Search Engine Optimization (SEO)",
          description: "Optimizing websites to rank higher in search engine results pages",
          example: "A bakery optimizing their website for 'best cupcakes near me' to appear when locals search for baked goods"
        },
        {
          title: "Pay-Per-Click Advertising (PPC)",
          description: "Paid advertising where you pay each time someone clicks your ad",
          example: "Running Google Ads for 'wedding photography' to capture couples planning their big day"
        },
        {
          title: "Social Media Marketing",
          description: "Using social platforms to build brand awareness and engage customers",
          example: "A fitness brand sharing workout videos on Instagram to build a community of health enthusiasts"
        },
        {
          title: "Content Marketing",
          description: "Creating valuable content to attract and retain customers",
          example: "A software company publishing tutorials and guides to help users succeed with their product"
        },
        {
          title: "Email Marketing",
          description: "Sending targeted messages to nurture leads and retain customers",
          example: "An e-commerce store sending personalized product recommendations based on past purchases"
        }
      ],
      statistics: [
        "4.9 billion people use the internet globally",
        "90% of consumers research products online before buying",
        "Digital marketing is 62% less expensive than traditional marketing",
        "Email marketing has an average ROI of $42 for every $1 spent"
      ],
      practicalExample: {
        title: "Case Study: Local Restaurant",
        scenario: "A local restaurant wants to increase customers and online orders",
        strategy: [
          "SEO: Optimize for 'best Italian restaurant [city name]'",
          "Social Media: Share food photos and behind-the-scenes content",
          "Email: Send weekly menu updates and special offers",
          "PPC: Run ads for food delivery keywords",
          "Content: Create blog posts about Italian cuisine and cooking tips"
        ],
        results: "40% increase in online orders, 25% growth in new customers, 60% boost in social media engagement"
      }
    }
  },
  "evolution": {
    title: "Evolution of Marketing",
    duration: "12 min",
    difficulty: "Beginner",
    content: {
      definition: "Marketing has evolved from simple product announcements to sophisticated, data-driven, personalized customer experiences across multiple digital touchpoints.",
      timeline: [
        {
          era: "1950s-1960s: Product Era",
          focus: "Mass production and product features",
          channels: "Print ads, radio, early TV",
          example: "Ford's Model T - 'Any color as long as it's black'"
        },
        {
          era: "1970s-1980s: Brand Era",
          focus: "Brand identity and emotional connection",
          channels: "Television, magazines, billboards",
          example: "Coca-Cola's 'I'd Like to Buy the World a Coke' campaign"
        },
        {
          era: "1990s: Relationship Era",
          focus: "Customer relationships and loyalty programs",
          channels: "Direct mail, early email, customer databases",
          example: "Amazon's recommendation engine and customer reviews"
        },
        {
          era: "2000s: Digital Revolution",
          focus: "Online presence and search marketing",
          channels: "Websites, search engines, banner ads",
          example: "Google AdWords launch transforming search advertising"
        },
        {
          era: "2010s: Social & Mobile Era",
          focus: "Social engagement and mobile optimization",
          channels: "Social media, mobile apps, influencer marketing",
          example: "Instagram's visual storytelling and influencer partnerships"
        },
        {
          era: "2020s: AI & Personalization Era",
          focus: "Artificial intelligence and hyper-personalization",
          channels: "Voice search, chatbots, programmatic advertising",
          example: "Netflix's AI-powered content recommendations"
        }
      ],
      keyShifts: [
        "From interruption to permission marketing",
        "From mass marketing to personalization",
        "From one-way to two-way communication",
        "From brand-centric to customer-centric",
        "From intuition-based to data-driven decisions"
      ],
      futuretrends: [
        "Voice search optimization",
        "Augmented and virtual reality marketing",
        "Blockchain for transparency",
        "Privacy-first marketing",
        "Sustainability and social responsibility"
      ]
    }
  },
  "seo-fundamentals": {
    title: "SEO Fundamentals",
    duration: "20 min",
    difficulty: "Intermediate",
    content: {
      definition: "Search Engine Optimization (SEO) is the practice of optimizing websites and content to rank higher in search engine results pages (SERPs) organically, without paying for placement.",
      howItWorks: {
        title: "How Search Engines Work",
        steps: [
          {
            step: "Crawling",
            description: "Search engines send bots to discover and scan web pages",
            analogy: "Like a library cataloger browsing through books to understand what's available"
          },
          {
            step: "Indexing", 
            description: "Pages are analyzed and stored in the search engine's database",
            analogy: "Creating detailed card catalogs with summaries of each book's content"
          },
          {
            step: "Ranking",
            description: "Algorithms determine which pages best answer user queries",
            analogy: "A librarian recommending the most relevant books for your research topic"
          }
        ]
      },
      rankingFactors: [
        {
          category: "Content Quality",
          factors: ["Relevance to search query", "Comprehensive coverage of topic", "Freshness and accuracy", "User engagement metrics"],
          weight: "35%",
          example: "A detailed guide on 'how to train a puppy' that covers all aspects comprehensively"
        },
        {
          category: "Technical SEO",
          factors: ["Page load speed", "Mobile responsiveness", "SSL certificate", "Site architecture"],
          weight: "25%",
          example: "A website that loads in under 3 seconds on mobile devices"
        },
        {
          category: "Backlinks",
          factors: ["Quality of linking sites", "Relevance of links", "Anchor text diversity", "Link authority"],
          weight: "25%",
          example: "Getting linked by authoritative sites like industry publications or universities"
        },
        {
          category: "User Experience",
          factors: ["Click-through rates", "Bounce rate", "Time on page", "Core Web Vitals"],
          weight: "15%",
          example: "Users spending 5+ minutes reading your article instead of immediately leaving"
        }
      ],
      seoTypes: [
        {
          type: "On-Page SEO",
          description: "Optimizing individual pages for target keywords",
          tactics: ["Title tag optimization", "Meta descriptions", "Header structure (H1, H2, H3)", "Internal linking", "Keyword placement"],
          example: "Optimizing a blog post about 'best coffee beans' with proper headings and related keywords"
        },
        {
          type: "Technical SEO",
          description: "Improving website's technical foundation",
          tactics: ["Site speed optimization", "Mobile optimization", "XML sitemaps", "Robots.txt", "Schema markup"],
          example: "Implementing structured data to help search engines understand your product pages"
        },
        {
          type: "Off-Page SEO",
          description: "Building authority and trust through external signals",
          tactics: ["Link building", "Social signals", "Brand mentions", "Local citations", "Guest posting"],
          example: "Getting featured in industry publications with links back to your expertise"
        }
      ],
      practicalSteps: [
        "Conduct keyword research to understand what your audience searches for",
        "Create high-quality, comprehensive content around those keywords",
        "Optimize page titles, meta descriptions, and headers",
        "Build internal links between related pages",
        "Improve site speed and mobile experience",
        "Earn quality backlinks from relevant websites",
        "Monitor performance and adjust strategy based on data"
      ]
    }
  },
  "keyword-research": {
    title: "Keyword Research",
    duration: "18 min", 
    difficulty: "Intermediate",
    content: {
      definition: "Keyword research is the process of finding and analyzing search terms that people enter into search engines with the goal of using that data to optimize content for better search rankings.",
      keyPoints: [
        "Foundation of all SEO and content marketing efforts",
        "Reveals what your audience is actively searching for", 
        "Helps identify market opportunities and content gaps",
        "Enables strategic content planning and optimization",
        "Critical for PPC campaign success and cost management"
      ],
      practicalExample: {
        title: "Case Study: Local Bakery Keyword Research",
        scenario: "A local bakery wants to attract more customers through search",
        strategy: [
          "Target 'custom birthday cakes [city]' - low competition, high intent",
          "Create content for 'how to order custom cake' - informational intent",
          "Optimize for 'best bakery [city]' - high value local keyword",
          "Target seasonal: 'Christmas cookies delivery', 'Valentine's Day cakes'"
        ],
        results: "300% increase in organic traffic, 150% boost in online orders, ranking #1 for 5 local keywords"
      }
    }
  },
  "content-strategy": {
    title: "Content Strategy",
    duration: "18 min",
    difficulty: "Intermediate", 
    content: {
      definition: "Content strategy is the planning, development, and management of content—written or in other media—to achieve specific business goals while serving your audience's needs.",
      keyPoints: [
        "Aligns content creation with business objectives",
        "Ensures consistency across all content touchpoints",
        "Maximizes content ROI through strategic planning",
        "Builds brand authority and customer trust",
        "Drives measurable business results"
      ],
      practicalExample: {
        title: "Case Study: SaaS Content Strategy",
        scenario: "B2B SaaS company wants to increase trial signups and reduce churn",
        strategy: [
          "Awareness Stage: SEO blog posts addressing industry challenges",
          "Consideration Stage: Comparison guides and case studies",
          "Decision Stage: Free trial content and demo videos",
          "Retention Stage: Onboarding guides and advanced tutorials"
        ],
        results: "40% increase in trial signups, 25% reduction in churn, 60% more qualified leads from content"
      }
    }
  },
  "social-strategy": {
    title: "Social Media Strategy", 
    duration: "17 min",
    difficulty: "Intermediate",
    content: {
      definition: "Social media strategy is a comprehensive plan that outlines how to use social media platforms to achieve business goals, build brand awareness, engage with customers, and drive measurable results.",
      keyPoints: [
        "Aligns social media efforts with overall business objectives",
        "Defines target audience and platform selection",
        "Establishes consistent brand voice and visual identity",
        "Creates frameworks for content creation and engagement",
        "Enables measurement and optimization of social media ROI"
      ],
      practicalExample: {
        title: "Case Study: E-commerce Social Strategy",
        scenario: "Online jewelry store wants to increase brand awareness and sales among millennials",
        strategy: [
          "Platform Selection: Instagram (primary), Pinterest (secondary), TikTok (experimental)",
          "Content Mix: Product styling (40%), customer stories (30%), behind-scenes (20%), promotions (10%)",
          "Engagement Focus: Respond within 2 hours, encourage user-generated content"
        ],
        results: "200% increase in social followers, 150% boost in website traffic from social, 85% increase in social-driven sales"
      }
    }
  },
  "email-fundamentals": {
    title: "Email Marketing Fundamentals",
    duration: "15 min",
    difficulty: "Beginner",
    content: {
      definition: "Email marketing is a digital marketing strategy that involves sending targeted emails to prospects and customers to build relationships, promote products or services, and drive business growth.",
      keyPoints: [
        "Highest ROI of all digital marketing channels ($42 for every $1 spent)",
        "Direct communication channel you own (unlike social media)",
        "Highly personalized and segmentable",
        "Measurable with detailed analytics",
        "Scalable from small businesses to enterprises"
      ],
      practicalExample: {
        title: "Case Study: E-learning Platform Email Strategy",
        scenario: "Online course platform wants to increase course completion rates and reduce churn",
        strategy: [
          "Welcome Series: 5-email onboarding sequence for new students",
          "Progress Nudges: Automated emails when students fall behind",
          "Achievement Celebrations: Emails celebrating milestones and completions",
          "Re-engagement: Win-back campaign for inactive students"
        ],
        results: "45% increase in course completion, 30% reduction in churn, 60% higher student satisfaction"
      }
    }
  },
  "ppc-basics": {
    title: "PPC Fundamentals",
    duration: "16 min",
    difficulty: "Intermediate",
    content: {
      definition: "Pay-Per-Click (PPC) advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked, essentially buying visits to their site rather than earning them organically.",
      keyPoints: [
        "Immediate visibility in search results and social feeds",
        "Highly targeted based on demographics, interests, and behavior",
        "Complete budget control with flexible spending limits",
        "Measurable ROI with detailed performance tracking",
        "Faster results compared to organic marketing efforts"
      ],
      practicalExample: {
        title: "Case Study: B2B Software PPC Campaign",
        scenario: "Project management software wants to acquire new business customers",
        strategy: [
          "Google Ads: Target high-intent keywords like 'project management software'",
          "LinkedIn Ads: Target decision-makers in specific industries",
          "Retargeting: Re-engage website visitors who didn't convert",
          "Landing Page Optimization: Create dedicated pages for each campaign"
        ],
        results: "250% increase in qualified leads, 35% lower cost per acquisition, 180% ROI"
      }
    }
  },
  "analytics-setup": {
    title: "Analytics Setup",
    duration: "18 min",
    difficulty: "Intermediate",
    content: {
      definition: "Analytics setup involves implementing tracking systems to measure, collect, analyze, and report web data to understand and optimize digital marketing performance.",
      keyPoints: [
        "Provides data-driven insights for decision making",
        "Tracks customer journey across all touchpoints",
        "Measures ROI of marketing campaigns and channels",
        "Identifies opportunities for optimization",
        "Enables audience segmentation and personalization"
      ],
      practicalExample: {
        title: "Case Study: E-commerce Analytics Implementation",
        scenario: "Online retailer wants to understand customer behavior and optimize conversions",
        strategy: [
          "Google Analytics 4: Track website behavior and conversions",
          "Google Tag Manager: Manage all tracking codes centrally",
          "Enhanced Ecommerce: Track purchase funnel and product performance",
          "Custom Dashboards: Create executive summary reports"
        ],
        results: "Identified 40% cart abandonment rate, optimized checkout flow, increased conversions by 25%"
      }
    }
  },
  "conversion-optimization": {
    title: "Conversion Rate Optimization",
    duration: "25 min",
    difficulty: "Advanced",
    content: {
      definition: "Conversion Rate Optimization (CRO) is the systematic process of increasing the percentage of website visitors who complete desired actions, such as making a purchase or filling out a form.",
      keyPoints: [
        "Improves ROI without increasing traffic costs",
        "Uses data and testing to make informed decisions",
        "Focuses on user experience and removing friction",
        "Provides continuous improvement methodology",
        "Impacts bottom line directly through increased conversions"
      ],
      practicalExample: {
        title: "Case Study: SaaS Landing Page Optimization",
        scenario: "Software company's trial signup page has low conversion rate",
        strategy: [
          "A/B Test Headlines: Test benefit-focused vs feature-focused messaging",
          "Form Optimization: Reduce form fields from 8 to 3",
          "Social Proof: Add customer testimonials and usage statistics",
          "CTA Testing: Test button colors, text, and placement"
        ],
        results: "127% increase in trial signups, 43% improvement in qualified leads, $2M additional revenue"
      }
    }
  }
};

export default function CourseContent({ activeSection }: CourseContentProps) {
  const content = sectionContent[activeSection];
  
  if (!content) {
    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground mb-4">Content Coming Soon</h2>
            <p className="text-muted-foreground">This section is being developed. Please check other sections.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {content.duration}
            </Badge>
            <Badge variant="outline">{content.difficulty}</Badge>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{content.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">{content.content.definition}</p>
        </div>

        {/* Key Points */}
        {content.content.keyPoints && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {content.content.keyPoints.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Components/Timeline */}
        {content.content.components && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Core Components
            </h2>
            <div className="grid gap-6">
              {content.content.components.map((component: any, index: number) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{component.title}</h3>
                    <p className="text-muted-foreground mb-4">{component.description}</p>
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-foreground">Example: </span>
                          <span className="text-foreground">{component.example}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Timeline */}
        {content.content.timeline && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Marketing Evolution Timeline
            </h2>
            <div className="space-y-6">
              {content.content.timeline.map((era: any, index: number) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/20 last:border-l-0">
                  <div className="absolute -left-2 top-2 h-4 w-4 bg-primary rounded-full"></div>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-primary mb-2">{era.era}</h3>
                      <p className="text-foreground mb-2"><strong>Focus:</strong> {era.focus}</p>
                      <p className="text-muted-foreground mb-3"><strong>Channels:</strong> {era.channels}</p>
                      <div className="bg-muted p-3 rounded-lg">
                        <span className="font-medium text-foreground">Example: </span>
                        <span className="text-foreground">{era.example}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Statistics */}
        {content.content.statistics && (
          <Card className="mb-8 bg-gradient-subtle">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart className="h-5 w-5 text-accent" />
                Industry Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {content.content.statistics.map((stat: string, index: number) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-background rounded-lg">
                    <div className="h-3 w-3 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground font-medium">{stat}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Practical Example */}
        {content.content.practicalExample && (
          <Card className="mb-8 border-accent">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-accent" />
                {content.content.practicalExample.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{content.content.practicalExample.scenario}</p>
              <h4 className="font-semibold text-foreground mb-3">Digital Marketing Strategy:</h4>
              <ul className="space-y-2 mb-4">
                {content.content.practicalExample.strategy.map((item: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h5 className="font-semibold text-accent mb-2">Results:</h5>
                <p className="text-foreground">{content.content.practicalExample.results}</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Steps */}
        <div className="mt-12 p-6 bg-gradient-primary rounded-lg text-primary-foreground">
          <h3 className="text-xl font-bold mb-3">Ready to Apply What You've Learned?</h3>
          <p className="mb-4">Continue to the next section to build on these foundations and develop your digital marketing expertise further.</p>
          <div className="flex items-center gap-2">
            <Progress value={65} className="flex-1 bg-primary-foreground/20" />
            <span className="text-sm font-medium">65% Complete</span>
          </div>
        </div>
      </div>
    </div>
  );
}