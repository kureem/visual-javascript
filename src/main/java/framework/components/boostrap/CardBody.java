package framework.components.boostrap;

import framework.components.JSContainer;

public class CardBody extends JSContainer{

	private JSContainer title = new JSContainer("title", "h5").addClass("card-title");
	
	private JSContainer subtitle = new JSContainer("subtitle", "h6").addClass("card-subtitle mb-2 text-muted");	
	
	private JSContainer text = new JSContainer("text", "p").addClass("card-text");
	
	private JSContainer foot = new JSContainer("foot", "div").addClass("card-foot");
	
	public CardBody(String name) {
		super(name, "div");
		addClass("card-body");
		addChild(title);
		addChild(subtitle);
		addChild(text);
		addChild(foot);
	}
	
	public CardBody setTitle(String title) {
		this.title.setHtml(title);
		return this;
	}
	
	public CardBody setSubtitle(String subtitle) {
		this.subtitle.setHtml(subtitle);
		return this;
	}
	
	public CardBody setText(String txt) {
		this.text.setHtml(txt);
		return this;
	}
	
	public JSContainer getUITitle() {
		return this.title;
	}
	
	public JSContainer getUISubtitle() {
		return this.subtitle;
	}
	
	public JSContainer getUIText() {
		return this.text;
	}
	
	public JSContainer getUIFoot() {
		return this.foot;
	}
	
	public CardBody addCardLink(JSContainer link) {
		link.addClass("card-link");
		foot.addChild(link);
		return this;
	}

}
