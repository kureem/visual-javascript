package framework.components.boostrap;

import framework.components.JSContainer;

public class DropdownMenu extends JSContainer{

	public DropdownMenu(String name) {
		super(name, "div");
		addClass("dropdown-menu");
		setAttribute("aria-labelledby", "dropdownMenuButton");
	}
	
	
	public DropdownItem addItem(String name, String text) {
		DropdownItem item = new DropdownItem(name, text);
		addChild(item);
		return item;
	}
	
	
	public static class DropdownItem extends JSContainer{

		public DropdownItem(String name, String text) {
			super(name, "a");
			setAttribute("href", "javascript:void(0)");
			addClass("dropdown-item");
			setHtml(text);
		}
		
		public DropdownItem setText(String text) {
			setHtml(text);
			return this;
		}
		
	}

}
