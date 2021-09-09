import GitBranchDialog from "../features/git-branch-dialog";

const branches = [
  "main",
  "development",
  "fix-chat-slow-load",
  "fix-logout-crash",
  "feature-pagination",
];
const tags = ["v1.0", "v2.0", "v2.1", "v2.3", "v3.0"];

export default function Homepage({}) {
  return (
    <div className='container mx-auto mt-8'>
      <GitBranchDialog branches={branches} tags={tags} />
      <h1 className='text-gray-200 text-xl'>
        Richard's Coding Corner. Github sample.
      </h1>
    </div>
  );
}
