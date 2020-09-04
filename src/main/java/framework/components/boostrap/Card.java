package framework.components.boostrap;

import framework.components.JSContainer;

public class Card extends JSContainer{

	private JSContainer header = new JSContainer("head", "div");
	
	private JSContainer content = new JSContainer("content", "div");
	
	private JSContainer footer = new JSContainer("footer", "div");
	
	public Card(String name) {
		super(name, "div");
		addClass("card");
		addChild(header);
		addChild(content);
		addChild(footer);
	}
	
	
	public JSContainer getUIHeader() {
		return this.header;
	}
	
	public JSContainer getUIContent() {
		return this.content;
	}
	
	public JSContainer getUIFooter() {
		return this.footer;
	}
	
	public Card addHeaderImage(JSContainer img) {
		header.addChild(img);
		img.addClass("card-img-top");
		return this;
	}
	

}
