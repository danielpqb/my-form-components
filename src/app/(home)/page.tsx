import { FormExample } from "@/components/Forms/FormExample";
import { DropFiles } from "@/components/DropFiles";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      Hello
      <FormExample />
      <div>
        <h1 className="text-2xl font-bold">Get Style from Cell</h1>
        <DropFiles />
      </div>
    </main>
  );
}
