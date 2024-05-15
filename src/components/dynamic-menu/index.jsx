import MenuList from "./menu-list";
import menus from "./data";

export default function DynamicMenu({ menu = [] }) {
  return (
    <div className="dynamic-menu-container">
      <MenuList list={menus} />
    </div>
  );
}
