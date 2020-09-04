package framework.components.boostrap;

public class ListGroupItem extends BaseBootstrap{

	public ListGroupItem(String name, String tag) {
		super(name, tag);
	}
	
	@Override
	public String getBoostrapName() {
		return "list-group-item";
	}
	
	public void setActive(boolean b) {
		if(b && !hasClass("active")) {
			addClass("active");
		}else if(!b && hasClass("active")) {
			removeClass("active");
		}
	}
	
	public boolean isActive() {
		return hasClass("active");
	}
	
	public void setDisabled(boolean b) {
		if(b && !hasClass("disabled")) {
			addClass("disabled");
		}else if(!b && hasClass("disabled")) {
			removeClass("disabled");
		}
		setAttribute("aria-disabled", b? "true":"false");
	}
	
	
	public boolean isDisabled() {
		return hasClass("disabled");
	}
	
	public void setActionable(boolean b) {
		if(b && !hasClass("list-group-item-action")) {
			addClass("list-group-item-action");
		}else if(!b && hasClass("list-group-item-action")) {
			removeClass("list-group-item-action");
		}
	}
	
	
	
	public boolean isActionable() {
		return hasClass("list-group-item-action");
	}

	
	
	

}
