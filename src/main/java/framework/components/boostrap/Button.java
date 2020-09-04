package framework.components.boostrap;

import framework.components.boostrap.Constants.Size;

public class Button extends BaseBootstrap{
	
	private boolean outline = false;
	
	private boolean disabled = false;
	
	private boolean block = false;

	private Size size = Size.NORMAL;

	
	public Button(String name, String tag) {
		super(name, tag);
		if(tag.equalsIgnoreCase("a")) {
			setAttribute("role", "button");
			setAttribute("href", "javascript:void(0);");
		}
	}

	@Override
	public String getBoostrapName() {
		if(outline) {
			return "btn-outline";
		}else {
			return "btn";
		}
	}

	public boolean isOutline() {
		return outline;
	}

	public void setOutline(boolean outline) {
		this.outline = outline;
		refresh();
	}
	
	
	public Button setSize(Constants.Size size) {
		this.size = size;
		if(size.getValue() == "sm") {
			if(hasClass("btn-lg")) {
				removeClass("btn-lg");
			}
			addClass("btn-sm");
		}else if(size.getValue() == "lg") {
		
			if(hasClass("btn-sm")) {
				removeClass("btn-sm");
			}
			addClass("btn-lg");
		}else {
			if(hasClass("btn-sm")) {
				removeClass("btn-sm");
			}
			if(hasClass("btn-lg")) {
				removeClass("btn-lg");
			}
		}
		return this;
	}
	
	

	public Size getSize() {
		return size;
	}

	public boolean isDisabled() {
		return disabled;
	}

	public void setDisabled(boolean disabled) {
		this.disabled = disabled;
		if(disabled) {
			if(getTag().equalsIgnoreCase("a")) {
				setAttribute("aria-disabled", "true");
				if(!hasClass("disabled"))
					addClass("disabled");
				setAttribute("tabindex", "-1");
			}else {
				setAttribute("disabled", "true");
			}
		}else {
			if(getTag().equalsIgnoreCase("a")) {
				setAttribute("aria-disabled", null);
				if(hasClass("disabled"))
					removeClass("disabled");
				setAttribute("tabindex", null);
			}else {
				setAttribute("disabled",null);
			}
		}
	}

	public boolean isBlock() {
		return block;
	}

	public void setBlock(boolean block) {
		this.block = block;
		if(block && !hasClass("btn-block")) {
			addClass("btn-block");
		}else {
			removeClass("btn-block");
		}
	}
	
	
	
	

}
