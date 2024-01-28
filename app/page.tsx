import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Button variant="default" size="lg">
        Default
      </Button>
      <Button variant="outline" size="icon">
        <Camera />
      </Button>
    </main>
  );
}
