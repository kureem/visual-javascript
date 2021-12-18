package framework.components.boostrap.utils;

import framework.components.api.Renderable;
import framework.components.boostrap.Constants;

public class FlexUtil {
	
	public static void setJustifyContent(Constants.JustifyContent justifyContent, Renderable r) {
		for (Constants.JustifyContent js : Constants.JustifyContent.values()) {
			r.removeClass("justify-content-" + js.getValue());
		}
		r.addClass("justify-content-" + justifyContent.getValue());
	}

}
