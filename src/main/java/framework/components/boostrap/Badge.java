package framework.components.boostrap;

public class Badge extends BaseBootstrap{
 
	public Badge(String name, String tag) {
		super(name, tag);
	}

	@Override
	public String getBoostrapName() {
		return "badge";
	}
	
	public Badge setPill(boolean b) {
		if(!b && hasClass("badge-pill")) {
			removeClass("badge-pill");
		}else {
			addClass("badge-pill");
		}
		return this;
	}

}
