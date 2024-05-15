import Tabs from "./tabs";

function TabThreeContent() {
  return <h1>Tab 3 content from a function</h1>;
}

export default function CustomTabs() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>Tab 1 content</div>,
    },
    {
      label: "Tab 2",
      content: <div>Tab 2 content</div>,
    },
    {
      label: "Tab 3",
      content: <TabThreeContent />,
    },
  ];

  function applyChange(index) {}

  return <Tabs tabsData={tabs} onChange={applyChange} />;
}
