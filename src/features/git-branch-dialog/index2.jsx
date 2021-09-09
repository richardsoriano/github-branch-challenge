import { useState } from "react";
import BranchIcon from "../../ui/icons/branch";
import Tabs from "./tabs";

function truncate(str, max = 10) {
  if (!str) return "";
  return `${str.slice(0, max)}${str.length > max ? "..." : ""}`;
}

export default function GitBranchDialog({ branches, tags }) {
  const [open, setOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [selectedTab, setSelectedTab] = useState("branches");
  const [filter, setFilter] = useState("");

  return (
    <div className='relative'>
      <div className='inline-block border bg-gray-600 border-gray-400 rounded px-2 hover:bg-gray-500 hover:border-gray-200 text-gray-50 transition-all delay-100'>
        <div
          className='flex items-center'
          onClick={() => setOpen((prev) => !prev)}
        >
          <BranchIcon />
          <div className='text-small text-gray-50 px-2'>
            {truncate(selectedBranch, 14)}
          </div>
          <div className='dropdown-caret'></div>
        </div>
      </div>

      {open && (
        <div className='absolute mt-1  w-80 border bg-black-400 border-black-300 rounded'>
          <div className='flex justify-between px-2  border-b'>
            <div className='text-sm text-gray-50 px-2 '>
              Switch branches/tags
            </div>

            <div>x</div>
          </div>
          <div className='px-2 py-1 border-b'>
            <input
              className='rounded px-2 w-full bg-black-600'
              type='text'
              placeholder='Find or create a branch...'
              value={filter}
            />
          </div>
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <ul className='px-4'>
            {branches.map((branch) => (
              <li onClick={() => setSelectedBranch(branch)}>{branch}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
