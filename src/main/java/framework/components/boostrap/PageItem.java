package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.Size;

public class PageItem extends JSContainer{

	public PageItem(String name) {
		super(name, "li");
		addClass("page-item");
	}
	
	
	public PageItem setDisabled(boolean b) {
		if(b && !hasClass("disabled")) {
			addClass("disabled");
		}else if(!b &&  hasClass("disabled")) {
			removeClass("disabled");
		}
		return this;
	}
	
	
	public PageItem setActive(boolean b) {
		if(b && !hasClass("active")) {
			addClass("active");
		}else if(!b &&  hasClass("active")) {
			removeClass("active");
		}
		return this;
	}
	


}
