import SelectedIcon from "../../ui/icons/selectedIcon";
function Branch({ filter, branches, selectedBranch, setSelectedBranch }) {
  return (
    <>
      {branches
        .filter((branch) => branch.includes(filter))
        .map((filteredBranch) => (
          <li
            onClick={() => setSelectedBranch(filteredBranch)}
            className='hover:bg-gray-500'
          >
            <div className='flex spaces-x-1 items-center'>
              {selectedBranch === filteredBranch ? (
                <div className='text-gray-200'>
                  <SelectedIcon />
                </div>
              ) : (
                <div className='mx-2'></div>
              )}
              <div className='px-1 text-sm text-gray-200'>{filteredBranch}</div>
            </div>
          </li>
        ))}
    </>
  );
}
export default function BranchList({
  filter,
  branches,
  tags,
  selectedTab,
  selectedBranch,
  setSelectedBranch,
}) {
  return (
    <>
      {selectedTab === "branches" ? (
        <ul>
          <Branch
            filter={filter}
            branches={branches}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
          />
        </ul>
      ) : (
        <ul>
          <Branch
            filter={filter}
            branches={tags}
            selectedBranch={selectedBranch}
            setSelectedBranch={setSelectedBranch}
          />
        </ul>
      )}
    </>
  );
}
