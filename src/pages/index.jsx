import GitBranchDialog from "../features/git-branch-dialog";

const branches = ["main", "richard/my-new-feature"];
const tags = ["v1.0", "v2.0"];

export default function Homepage({}) {
  return (
    <div className='container mx-auto mt-8'>
      <GitBranchDialog branches={branches} tags={tags} />
      <h1>Hello.</h1>
    </div>
  );
}
