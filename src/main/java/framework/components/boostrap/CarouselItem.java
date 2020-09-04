package framework.components.boostrap;

import framework.components.JSContainer;

public class CarouselItem extends JSContainer{

	private JSContainer img = new JSContainer("img", "img").addClass("d-block w-100");
	
	private JSContainer caption = new JSContainer("caption", "div").addClass("carousel-caption d-none d-md-block");
	
	private JSContainer title = new JSContainer("title", "h5");
	
	private JSContainer subtitle = new JSContainer("subtitle", "p");
	
	public CarouselItem(String name) {
		super(name, "div");

		addChild(img);
		addChild(caption);
		caption.addChild(title).addChild(subtitle);
		caption.setStyle("display", "none");
	}
	
	
	public void setShowCaption(boolean b) {
		caption.setStyle("display", b?null:"none");
	}
	
	public boolean isShowCaption() {
		return caption.getStyle("display") != "none";
	}
	
	public void setTitle(String str) {
		this.title.setHtml(str);
		setShowCaption(true);
	}
	
	public void setSubtitle(String str) {
		this.subtitle.setHtml(str);
		setShowCaption(true);
	}
	
	public void setInterval(Integer interval) {
		setAttribute("data-interval", interval.toString());
	}
	
	
	

}
