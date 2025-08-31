import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Background() {
  return (
    <Tabs className="flex w-full" defaultValue="work">
      <TabsList>
        <TabsTrigger value="work">work</TabsTrigger>
        <TabsTrigger value="education">education</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        <Card>
          <CardHeader>
            <CardTitle>uhmmmm...</CardTitle>
            <CardDescription>
              zero job experience... soon ( ͡° ͜ʖ ͡°)
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6"></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="education">
        <Card>
          <CardHeader>
            <time className="text-xs">Mar 2025 - Ongoing</time>
            <CardTitle>Auckland University of Technology</CardTitle>
            <CardDescription>
              <p>Bachelor of Computer and Information Sciences</p>
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6"></CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
