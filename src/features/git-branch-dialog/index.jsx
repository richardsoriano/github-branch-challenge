import { useState } from "react";
import BranchIcon from "../../ui/icons/branch";
import SelectedIcon from "../../ui/icons/selectedIcon";
import BranchList from "./branchList";
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

            <div onClick={() => setOpen(false)}>x</div>
          </div>
          <div className='px-2 py-1 border-b border-black '>
            <input
              className='rounded px-2 w-full text-gray-200 bg-black-500 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent'
              type='text'
              placeholder='Find or create a branch...'
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

          <BranchList
            filter={filter}
            branches={branches}
            tags={tags}
            selectedTab={selectedTab}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
          />

          <div className='text-center text-sm '>
            <a href='#' className='text-blue-400'>
              view all branches
            </a>
          </div>

          {/* {selectedTab === "branches" ? (
            <ul className='px-4'>
              {branches.map((branch) => (
                <li
                  onClick={() => setSelectedBranch(branch)}
                  className='hover:bg-gray-500'
                >
                  <div className='flex spaces-x-1 items-center'>
                    {selectedBranch === branch ? (
                      <SelectedIcon />
                    ) : (
                      <div className='mx-2'></div>
                    )}
                    <div className='px-1 text-sm'>{branch}</div>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <ul className='px-4'>
              {tags.map((tag) => (
                <li
                  onClick={() => setSelectedBranch(tag)}
                  className='hover:bg-gray-500'
                >
                  <div className='flex spaces-x-1 items-center'>
                    {selectedBranch === tag ? (
                      <SelectedIcon />
                    ) : (
                      <div className='mx-2'></div>
                    )}
                    <div className='px-1 text-sm'>{tag}</div>
                  </div>
                </li>
              ))}
            </ul>
          )} */}
        </div>
      )}
    </div>
  );
}
