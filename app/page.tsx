import { Portfolio } from "@/components/portfolio";
import { getGitHubProfile } from "@/lib/github";
export default async function Home() { const github = await getGitHubProfile(); return <Portfolio github={github}/>; }
