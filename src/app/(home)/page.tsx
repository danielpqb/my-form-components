import { ExcelJs } from "@/components/ExcelJs";
import { FormExample } from "@/components/Forms/FormExample";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24 gap-2">
      Hello
      <ExcelJs />
      <FormExample />
    </main>
  );
}
