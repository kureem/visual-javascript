package framework.components.boostrap;

import framework.components.JSContainer;

public class CardHeader extends JSContainer{

	public CardHeader(String name) {
		super(name, "div");
		addClass("card-header");
	}

}
