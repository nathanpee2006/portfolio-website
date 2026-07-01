import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Github } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "FitLog",
    description:
      "A fitness logger web app to track workout progress such as sets, reps, and weight.",
    technologies: [
      "Docker",
      "Django",
      "JavaScript",
      "PostgreSQL",
      "Python",
      "React",
    ],
    websiteUrl: "",
    githubUrl: "https://github.com/nathanpee2006/FitLog",
    hasWebsite: false,
  },
];

export default function SampleProjects({ showAll = false, limit = 2 }) {
  const projectsToShow = showAll ? projectsData : projectsData.slice(0, limit);
  const sectionTitle = showAll ? "all projects" : "sample projects";

  return (
    <section className="flex flex-col gap-8">
      <h1 className={sectionTitle === "all projects" ? "text-4xl" : "text-2xl"}>
        {sectionTitle}
      </h1>
      <div className="flex gap-4 flex-wrap">
        {projectsToShow.map((project) => (
          <Card key={project.id} className="flex-1 flex flex-col min-w-[300px]">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap flex-1 gap-1">
              {project.technologies.map((tech, index) => (
                <Badge key={index}>{tech}</Badge>
              ))}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-2">
              {project.hasWebsite && (
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    <Globe />
                    Website
                  </Button>
                </a>
              )}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <Github />
                  Github
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
