package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.Size;

public class Pagination extends JSContainer{
	

	public Pagination(String name) {
		super(name, "ul");
		addClass("pagination");
	}
	
	public Pagination addPageItem(PageItem pi) {
		addChild(pi);
		return this;
	}
		
	public Pagination setSize(Size size) {
		for(Size si : Size.values()) {
			if(si == size) {
				if((size != Size.NORMAL) && !hasClass("pagination-" + si.getValue())) {
					addClass("pagination-" + si.getValue());
				}
			}else {
				if((size != Size.NORMAL)&& hasClass("pagination-" +si.getValue())) {
					removeClass("pagination-" + si.getValue());
				}
			}
		}
		return this;
	}
	
	public Pagination setJustifyContent(Constants.JustifyContent justifyContent) {
		for (Constants.JustifyContent js : Constants.JustifyContent.values()) {
			removeClass("justify-content-" + js.getValue());
		}
		addClass("justify-content-" + justifyContent.getValue());
		return this;
	}

}
