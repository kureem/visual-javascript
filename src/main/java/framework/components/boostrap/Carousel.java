package framework.components.boostrap;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;
import jsweet.lang.Function;

public class Carousel extends JSContainer{

	private JSContainer inner = new JSContainer("inner", "div").addClass("carousel-inner");
	
	private JSContainer controlPrev = new JSContainer("control-prev", "a");
	
	private JSContainer controlNext = new JSContainer("control-next", "a");
	
	public Carousel(String name) {
		super(name, "div");
		addClass("carousel");
		addClass("slide");
		addChild(inner);
		addChild(controlPrev);
		addChild(controlNext);
		decoratecontrol(controlPrev, "prev");
		decoratecontrol(controlNext, "next");
		
	}
	
	
	private void decoratecontrol(JSContainer control, String dir) {
		control.addClass("carousel-control-" + dir);
		control.setAttribute("href", "#" + getId()).setAttribute("role", "button").setAttribute("data-slide", dir);
		control.addChild(new JSContainer("span").addClass("carousel-control-"+dir+"-icon").setAttribute("aria-hidden", "true"));
		control.addChild(new JSContainer("span").addClass("sr-only").setHtml(dir));
	}
	
	
	public void setShowControls(boolean b) {
		controlPrev.setStyle("display", b?null:"none");
		controlNext.setStyle("display", b?null:"none");
	}
	
	public boolean isShowControls() {
		return controlPrev.getStyle("display") != "none";
	}
	
	public void setCrossFade(boolean b) {
		if(b && !hasClass("carousel-fade")) {
			addClass("carousel-fade");
		}else {
			if(hasClass("carousel-fade")) {
				removeClass("carousel-fade");
			}
		}
	}
	
	public boolean isCrossFade() {
		return hasClass("carousel-fade");
	}
	
	
	public void addItem(CarouselItem item) {
		inner.addChild(item);
	}
	
	
	public void setInterval(Integer interval) {
		setAttribute("data-interval", interval.toString());
	}
	
	public void setKeyboard(boolean b) {
		setAttribute("keyboard", b? "true": "false");
	}
	
	public void setPauseOnHover(boolean b) {
		if(b) {
			setAttribute("data-pause", "hover");
		}else {
			setAttribute("data-pause", null);
		}
	}
	
	public void setRideCarousel(boolean b) {
		if(b) {
			setAttribute("data-ride", "carousel");
		}else {
			setAttribute("data-ride", null);
		}
	}
	
	public void setWrap(boolean b) {
		setAttribute("wrap", b? "true":"false");
	}
	
	public void setTouch(boolean b) {
		setAttribute("touch", b? "true":"false");
	}
	
	
	public void cycle() {
		invoke("cycle");
	}
	
	public void pause() {
		invoke("pause");
	}
	
	public void prev() {
		invoke("prev");
	}
	
	public void next() {
		invoke("next");
	}
	
	public void dispose() {
		invoke("dispose");
	}
	
	
	
	
	private void invoke(String method) {
		HTMLElement el = getNative();
		Function fn = (Function)el.$get("carousel");
		fn.call(el, method);
	}
	
	

}
