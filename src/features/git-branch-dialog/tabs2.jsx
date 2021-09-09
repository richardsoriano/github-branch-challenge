function Tab({ children, active = false, setActive }) {
  return (
    <li
      onClick={setActive}
      className={`${
        active ? "" : "border-transparent"
      } px-2 pt-1 rounded-t border-l border-r border-t`}
    >
      {children}
    </li>
  );
}

export default function Tabs({ selectedTab, setSelectedTab }) {
  return (
    <ul className='flex py-1 px-4 space-x-1'>
      <Tab
        active={selectedTab === "branches"}
        setActive={() => setSelectedTab("branches")}
      >
        Branches
      </Tab>
      <Tab
        active={selectedTab === "tags"}
        setActive={() => setSelectedTab("tags")}
      >
        Tags
      </Tab>
    </ul>
  );
}
