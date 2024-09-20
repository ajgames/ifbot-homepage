import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import type { MetaFunction } from "@remix-run/node";
import Yarn from "~/components/Yarn";
import { collection } from "~/database/mongoDbClient";

export const meta: MetaFunction = () => {
  return [
    { title: "If Bot (ifbot.ai) - AI Worker Bot" },
    { name: "description", content: "Welcome to the IfBot. We make your work and life easier by providing LLM's context that is relevant to you. We prompt YOU for if and when you want to take action. " },
  ];
};

export async function loader({request}: LoaderFunctionArgs) {
  const fullUrl = new URL(request.url);
  await collection.metrics.insertOne({
      event: "PageView",
      uri: `${fullUrl.origin}${fullUrl.pathname}`,
      user: null,
      createdAt: new Date()
  })
  return null;
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <header className="flex flex-row items-center gap-1">
            <div className="w-[100px] "><Yarn /></div>
            {/* https://looka.com/editor/197294338 */}
            <h1 className="text-[100px] font-bold text-gray-100 flex flex-row gap-2">
              <span className="italic bg-gradient-to-t from-[#f1853b] to-[#e35d00] bg-clip-text text-transparent">if</span> <span className="text-gray-100">Bot</span>
            </h1>
        </header>
      </div>
    </div>
  );
}
