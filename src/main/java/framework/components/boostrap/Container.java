package framework.components.boostrap;

import framework.components.JSContainer;

public class Container extends JSContainer{

	public Container(String name, String tag) {
		super(name, tag);
		addClass("container");
	}
	
	public Container setBreakpoint(Breakpoint breakpoint) {
	
		clearCls();
		if(breakpoint != null) {
			addClass("container-" + breakpoint.value);
		}else {
			addClass("container");
		}
		
		return this;
	}
	
	public Container setFluid(boolean b) {
		clearCls();
		if(b) {
			addClass("container-fluid");
		}else {
			addClass("container");
		}
		return this;
	}
	
	public Container reset() {
		clearCls();
		addClass("container");
		return this;
	}
	
	private void clearCls() {
		for(Breakpoint bk : Breakpoint.values()) {
			removeClass("container-" + bk.value);
		}
		removeClass("container");
		removeClass("container-fluid");
	}

}
