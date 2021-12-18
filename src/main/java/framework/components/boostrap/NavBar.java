package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.Context;
import framework.components.boostrap.Constants.Size;
import framework.components.input.JSButton;

public class NavBar extends JSContainer{

	
	private JSContainer container = new JSContainer("container", "div");
	
	private JSContainer brand =new JSContainer("brand", "a");
	private JSButton toggler = new JSButton("toggler", "<span class=\"navbar-toggler-icon\"></span>");
	
	private JSContainer collapse = new JSContainer("collapse", "div");
	
	public NavBar(String name) {
		super(name, "nav");
		addClass("navbar");
		addChild(container);
		brand.setAttribute("href", "#");
		container.addClass("container-fluid");
		container.addChild(brand);
		container.addChild(toggler);
		toggler.setAttribute("type", "button");
		toggler.setAttribute("data-bs-toggle", "collapse");
		toggler.setAttribute("data-bs-target", "#" + collapse.getId())
			.setAttribute("aria-controls", collapse.getId())
			.setAttribute("aria-expanded", "false")
			.setAttribute("aria-label", "Toggle Navigation");
		container.addChild(collapse);
	}
	
	
	public NavBar setBackground(Context ctx) {
		return applyContext(this, ctx, "bg");
	}
	
	private NavBar applyContext(JSContainer ctn, Context ctx, String prefix) {
		for(Context ct : Context.values()) {
			if(ct == ctx) {
				if(!ctn.hasClass(prefix+"-" + ct.getValue())) {
					ctn.addClass(prefix+"-" + ct.getValue());
				}
			}else {
				if(ctn.hasClass(prefix+"-" + ct.getValue())) {
					ctn.removeClass(prefix+"-" + ct.getValue());
				}
			}
		}
		return this;
	}
	
	public NavBar setForground(Context ctx) {
		return applyContext(this, ctx, "navbar");
	}

	public NavBar setExpandSize(Size size) {
		for(Size si : Size.values()) {
			if(si == size) {
				if((size != Size.NORMAL) && !hasClass("navbar-expand-" + si.getValue())) {
					addClass("navbar-expand-" + si.getValue());
				}
			}else {
				if((size != Size.NORMAL)&& hasClass("navbar-expand-" +si.getValue())) {
					removeClass("navbar-expand-" + si.getValue());
				}
			}
		}
		return this;
	}


	public JSContainer getContainer() {
		return container;
	}


	public JSContainer getBrand() {
		return brand;
	}


	public JSButton getToggler() {
		return toggler;
	}


	public JSContainer getCollapse() {
		return collapse;
	}
	
	
	public NavBar setPlacement(Placement plc) {
		if(plc != Placement.DEFAULT) {
		
			for(Placement pl : Placement.values()) {
				if((pl == plc)&& !hasClass(pl.getValue())) {
					addClass(pl.getValue());
				}else if((pl != plc) && hasClass(pl.getValue())) {
					removeClass(pl.getValue());
				}
			}
		}else {
			for(Placement pl : Placement.values()) {
				if(pl != Placement.DEFAULT)
					removeClass(pl.getValue());
				
			}
		}
		
		return this;
	}
	
	public enum Placement {
		FIXED_TOP("fixed-top"),
		FIXED_BOTTOM("fixed-bottom"),
		DEFAULT(""),
		STICKY_TOP("sticky-top");
		
		
		private String value;
		
		private Placement(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}

	}
	

}
