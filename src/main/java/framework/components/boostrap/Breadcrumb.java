package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;

public class Breadcrumb extends JSContainer {

	public Breadcrumb(String name) {
		super(name, "ol");
		addClass("breadcrumb");
	}

	public BreadcrumbItem addItem(String name, String label) {
		BreadcrumbItem item = new BreadcrumbItem(name, label);
		addChild(item);
		return item;
	}
	
	public void activate(String name) {
		for(Renderable r : getChildren()) {
			BreadcrumbItem item = (BreadcrumbItem)r;
			if(item.getName() == name) {
				if(!item.isActive()) {
					item.setActive(true);
					CustomEvent evt = new CustomEvent("activate");
					evt.$set("item", item);
					evt.$set("source", this);
					fireListener("activate", evt);
				}
			}else {
				if(item.isActive()) {
					item.setActive(false);
				}
			}
		}
	}

	public static class BreadcrumbItem extends JSContainer {

		private String label_;
		private boolean active = false;

		public BreadcrumbItem(String name, String label) {
			super(name, "li");
			addClass("breadcrumb-item");
			setLabel(label);
			addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					 ((Breadcrumb)source.getParent()).activate(source.getName());
				}
			}, "click");
		}

		public void setLabel(String label) {
			this.label_ = label;
			refresh();
		}

		public void setActive(boolean b) {
			this.active = b;
			refresh();
		}

		public void refresh() {
			if (this.active) {
				if (hasClass("active"))
					removeClass("active");
				setHtml("<a href=\"#\">" + this.label_ + "</a>");
			} else {
				setHtml(this.label_);
				if (!hasClass("active")) {
					addClass("active");
				}
			}
		}

		public boolean isActive() {
			return active;
		}

	}

}
