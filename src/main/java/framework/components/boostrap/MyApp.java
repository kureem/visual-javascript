package framework.components.boostrap;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class MyApp extends JSContainer{

	private JSContainer header = new JSContainer("other", "h1");
	
	public MyApp(String name) {
		super(name, "div"); 
		addClass("myapp");
		setStyle("width", "100%").setStyle("height", "100vh");
		 
		JSContainer div = new JSContainer("root", "div");
		div.setStyle("width", "200px");
		div.setStyle("height", "300px");
		div.setStyle("background-color", "red");
		div.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				header.setHtml("I have been clicked");
			}
		}, "click");
		
		header.setHtml("Hello world");
		addChild(header);
		
		addChild(div);
		
		
		
	}
	

}
