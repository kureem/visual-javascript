package framework.components.boostrap;

import framework.components.JSContainer;

public class ButtonGroup extends JSContainer{
	
	public final static String SIZE_LARGE = "lg";
	
	public final static String SIZE_SMALL = "sm";
	
	public final static String SIZE_NORMAL = "";
	
	private boolean vertical = false;

	public ButtonGroup(String name) {
		super(name, "div");
		addClass("btn-group");
	}
	
	
	public boolean isVertical() {
		return vertical;
	}


	public void setVertical(boolean vertical) {
		if(vertical && !hasClass("btn-group-vertical")) {
			addClass("btn-group-vertical");
			if(hasClass("btn-group")) {
				removeClass("btn-group");
			}
		}else {
			removeClass("btn-group-vertical");
			if(!hasClass("btn-group")) {
				addClass("btn-group");
			}
		}
		this.vertical = vertical;
	}


	public ButtonGroup setSize(String size) {
		if(size == "sm") {
			if(hasClass("btn-group-lg")) {
				removeClass("btn-group-lg");
			}
			addClass("btn-group-sm");
		}else if(size == "lg") {
		
			if(hasClass("btn-group-sm")) {
				removeClass("btn-group-sm");
			}
			addClass("btn-group-lg");
		}else {
			if(hasClass("btn-group-sm")) {
				removeClass("btn-group-sm");
			}
			if(hasClass("btn-group-lg")) {
				removeClass("btn-group-lg");
			}
		}
		return this;
	}

}
