package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.ScreenSize;

public class ListGroup extends JSContainer {

	public ListGroup(String name, String tag) {
		super(name, tag);
		addClass("list-group");
	}

	public void setFlush(boolean b) {
		if (b && !hasClass("list-group-flush")) {
			addClass("list-group-flush");
		} else if (!b && hasClass("list-group-flush")) {
			removeClass("list-group-flush");
		}
	}

	public boolean isFlush() {
		return hasClass("list-group-flush");
	}
	
	public void setHorizontal(boolean b) {
		if(b && !hasClass("list-group-horizontal")) {
			addClass("list-group-horizontal");
		}else if(!b && hasClass("list-group-horizontal")) {
			removeClass("list-group-horizontal");
		}
	}
	
	public boolean isHorizontal() {
		return hasClass("list-group-horizontal");
	}
	
	private void clearHorizontalCls() {
		removeClass("list-group-horizontal");
		for(ScreenSize size : ScreenSize.values()) {
			removeClass("list-group-horizontal-" + size.getValue());
		}
	}
	
	
	public void setHorizontal(ScreenSize screenSize) {
		clearHorizontalCls();
		addClass("list-group-horizontal-" + screenSize.getValue());
	}
	
	public void addItem(ListGroupItem item) {
		addChild(item);
	}

}
