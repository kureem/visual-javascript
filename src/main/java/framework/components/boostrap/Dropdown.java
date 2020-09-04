package framework.components.boostrap;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;

public class Dropdown extends JSContainer{

	private Button button = new Button("button", "button");
	
	private Button btnSplit = new Button("split", "button");
	
	private DropdownMenu menu = new DropdownMenu("menu");
	
	private boolean split = false;
	
	public Dropdown(String name, String tag) {
		super(name, tag);
		addClass("dropdown");
		addChild(button);
		addChild(btnSplit.setStyle("display", "none"));
		btnSplit.addClass("dropdown-toggle dropdown-toggle-split");
		btnSplit.setAttribute("data-toggle", "dropdown").setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "false");
		btnSplit.setHtml("<span class=\"sr-only\">Toggle Dropdown</span>");
		addChild(menu);
		button.addClass("dropdown-toggle").setAttribute("data-toggle", "dropdown");
		button.setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "false");
	}

	public Button getButton() {
		return button;
	}

	public DropdownMenu getMenu() {
		return menu;
	}
	
	
	public Dropdown setSplit(boolean b) {
		if(b) {
			btnSplit.setStyle("display", null);
		}else {
			btnSplit.setStyle("display", "none");
		}
		this.split = b;
		return this;
	}

	

	@Override
	public void render(HTMLElement parent) {
		if(this.split) {
			this.btnSplit.setSize(button.getSize());
			this.btnSplit.setContext(button.getContext());
			this.btnSplit.setDisabled(button.isDisabled());
		}
		super.render(parent);
	}
	
	
	
	

}
