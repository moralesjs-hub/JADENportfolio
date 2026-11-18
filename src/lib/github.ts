export interface GitHubRepo { name: string; html_url: string; stargazers_count: number; language: string | null; pushed_at: string; description: string | null; }
export interface GitHubProfile { login: string; public_repos: number; followers: number; html_url: string; repos: GitHubRepo[]; languages: string[]; latestPush: string | null; }
const fallback: GitHubProfile = { login:"moralesjs-hub", public_repos:0, followers:0, html_url:"https://github.com/moralesjs-hub", repos:[], languages:["Python","TypeScript","JavaScript"], latestPush:null };
export async function getGitHubProfile(): Promise<GitHubProfile> {
 try {
  const headers: HeadersInit = { Accept:"application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  const [userResponse,reposResponse] = await Promise.all([
   fetch("https://api.github.com/users/moralesjs-hub",{headers,next:{revalidate:3600}}),
   fetch("https://api.github.com/users/moralesjs-hub/repos?per_page=100&sort=updated",{headers,next:{revalidate:3600}})
  ]);
  if (!userResponse.ok || !reposResponse.ok) return fallback;
  const user = await userResponse.json() as { login:string; public_repos:number; followers:number; html_url:string };
  const repos = await reposResponse.json() as GitHubRepo[];
  const langs = [...new Set(repos.map(repo=>repo.language).filter((value): value is string=>Boolean(value)))].slice(0,5);
  const latestPush = repos.map(repo=>repo.pushed_at).sort().at(-1) ?? null;
  return { ...user, repos, languages:langs.length?langs:fallback.languages, latestPush };
 } catch { return fallback; }
}
