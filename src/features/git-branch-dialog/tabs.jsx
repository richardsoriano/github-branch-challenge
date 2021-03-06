function Tab({ children, active = false, setActive }) {
  return (
    <li
      onClick={setActive}
      className={`${
        active ? "" : "border-transparent"
      } px-2 pt-1 rounded-t border-l border-r border-t hover:text-gray-400 transition delay-100`}
    >
      {children}
    </li>
  );
}

export default function Tabs({ selectedTab, setSelectedTab }) {
  return (
    <ul className='flex py-1 px-3 space-x-1'>
      <Tab
        active={selectedTab === "branches"}
        setActive={() => setSelectedTab("branches")}
      >
        <div className='text-sm'>branches</div>
      </Tab>
      <Tab
        active={selectedTab === "tabs"}
        setActive={() => setSelectedTab("tabs")}
      >
        <div className='text-sm'>tabs</div>
      </Tab>
    </ul>
  );
}
