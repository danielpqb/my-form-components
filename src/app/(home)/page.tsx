import { Button } from "@/components/Button";
import { InputText } from "@/components/InputText";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      Hello
      <Button></Button>
      <InputText label="Input"/>
    </main>
  );
}
