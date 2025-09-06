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

export default function Projects() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-2xl">sample projects</h1>
      <div className="flex gap-4">
        {/* FitLog */}
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>FitLog</CardTitle>
            <CardDescription>
              A fitness logger web app to track workout progress such as sets,
              reps, and weight.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap flex-1 gap-1">
            <Badge>Docker</Badge>
            <Badge>Django</Badge>
            <Badge>JavaScript</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>Python</Badge>
            <Badge>React</Badge>
          </CardContent>
          <CardFooter className="flex flex-wrap gap-2">
            <a href="https://fitlog-frontend.vercel.app/" target="_blank">
              <Button variant="outline" size="sm">
                <Globe />
                Website
              </Button>
            </a>

            <a href="https://github.com/nathanpee2006/FitLog" target="_blank">
              <Button variant="outline" size="sm">
                <Github />
                Github
              </Button>
            </a>
          </CardFooter>
        </Card>
        {/* FitLog */}

        {/* PassLock */}
        <Card className="flex-1 flex flex-col">
          <CardHeader>
            <CardTitle>PassLock</CardTitle>
            <CardDescription>
              A password manager web app to store and manage sensitive
              credentials with encryption.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap flex-1 gap-1">
            <Badge>CSS</Badge>
            <Badge>Django</Badge>
            <Badge>HTML</Badge>
            <Badge>JavaScript</Badge>
            <Badge>Python</Badge>
          </CardContent>
          <CardFooter>
            <a href="https://github.com/nathanpee2006/PassLock" target="_blank">
              <Button variant="outline" size="sm">
                <Github />
                Github
              </Button>
            </a>
          </CardFooter>
        </Card>
        {/* PassLock */}
      </div>
    </section>
  );
}
