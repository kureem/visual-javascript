package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.boostrap.Constants.Context;

public class Progress extends JSContainer{

	private JSContainer bar = new JSContainer("bar", "div").addClass("progress-bar");
	
	private Context context;
	
	
	private Integer min = 0;
	
	private Integer max = 100;
	
	private Integer value = 0;
	
	public Progress(String name) {
		super(name, "div");
		addClass("progress");
		addChild(bar);
		bar.setAttribute("aria-valuemin", min.toString());
		bar.setAttribute("aria-valuemax",max.toString());
		bar.setAttribute("aria-valuenow", value.toString());
		bar.setAttribute("role", "progressbar");
	}

	public Context getContext() {
		return context;
	}

	public void setAnimated(boolean b) {
		if(b) {
			if(!bar.hasClass("progress-bar-animated")) {
				bar.addClass("progress-bar-animated");
			}
		}else {
			if(bar.hasClass("progress-bar-animated")) {
				bar.removeClass("progress-bar-animated");
			}
		}
	}
	
	
	public boolean isAnimated() {
		return bar.hasClass("progress-bar-animated");
	}
	
	
	public void setStriped(boolean b) {
		if(b) {
			if(!bar.hasClass("progress-bar-striped")) {
				bar.addClass("progress-bar-striped");
			}
		}else {
			if(bar.hasClass("progress-bar-striped")) {
				bar.removeClass("progress-bar-striped");
			}
		}
	}
	
	
	public boolean isStriped() {
		return bar.hasClass("progress-bar-striped");
	}
	
	public void setContext(Context context) {
		this.context = context;
		for(Context ct : Context.values()) {
			bar.removeClass("bg-" + ct.getValue());
		}
		if(context != null)
			bar.addClass("bg-" + context.getValue());
	}

	public Integer getMin() {
		return min;
	}

	public void setMin(Integer min) {
		this.min = min;
		bar.setAttribute("aria-valuemin", min.toString());
	}

	public Integer getMax() {
		return max;
	}

	public void setMax(Integer max) {
		this.max = max;
		bar.setAttribute("aria-valuemax", max.toString());
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
		bar.setAttribute("aria-valuenow", value.toString());
		
		Integer OldRange = max - min;
		Integer NewRange =  100;
		Integer NewValue = (((value - min) * NewRange) / OldRange) + 0;
		bar.setStyle("width", NewValue + "%");
	}

	public JSContainer getBar() {
		return bar;
	}
	
	
	
	

}
