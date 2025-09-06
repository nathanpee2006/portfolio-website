import { cn } from "@/lib/utils";

export default function Container({ 
  children, 
  className = "", 
  as: Component = "div",
  ...props 
}) {
  return (
    <Component 
      className={cn("mx-auto max-w-3xl px-10", className)} 
      {...props}
    >
      {children}
    </Component>
  );
}
