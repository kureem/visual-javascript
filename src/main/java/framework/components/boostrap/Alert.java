package framework.components.boostrap;

import framework.components.JSContainer;
import jsweet.dom.CustomEvent;

public class Alert extends BaseBootstrap {

	private JSContainer heading = new JSContainer("heading", "h4").addClass("alert-heading");

	private JSContainer body = new JSContainer("body", "div");

	private JSContainer close = new JSContainer("close", "button").setAttribute("type", "button").addClass("close")
			.setAttribute("data-dismiss", "alert").setAttribute("aria-label", "close");

	private boolean closing = false;

	/**
	 * Bootstrap Alert implementation
	 * @param name
	 */
	public Alert(String name) {
		super(name, "div");
		addClass("alert");
		setAttribute("role", "alert");
		addChild(heading.setStyle("display", "none"));
		addChild(body);
		addChild(close.setStyle("display", "none").setHtml("<span aria-hidden=\"true\">&times;</span>"));
		addClass("fade");
		getNative().addEventListener("animationend", (e) -> {
			if (closing) {
				CustomEvent evt = new CustomEvent("closed.bs.alert");
				evt.$set("source", this);
				fireListener("closed.bs.alert", evt);
				closing = false;
			}
		});
	}

	@Override
	public String getBoostrapName() {
		return "alert";
	}

	public Alert setHeading(String heading) {
		if (heading != null && heading.length() > 0) {
			this.heading.setStyle("display", null);
			this.heading.setHtml(heading);
		} else {
			this.heading.setStyle("display", "none");
		}
		return this;
	}

	public JSContainer getHeading() {
		return heading;
	}

	public JSContainer getBody() {
		return body;
	}

	public Alert setDismissable(boolean b) {
		if (b) {
			if (!hasClass("alert-dismissible")) {
				addClass("alert-dismissible");
			}
			this.close.setStyle("display", null);
		} else {
			removeClass("alert-dismissible");
			this.close.setStyle("display", "none");
		}

		return this;
	}

	public Alert close(boolean b) {
		if (b) {
			this.closing = false;
			addClass("show");
		} else {
			this.closing = true;
			CustomEvent evt = new CustomEvent("close.bs.alert");
			evt.$set("source", this);
			fireListener("close.bs.alert", evt);
			this.closing = true;
			removeClass("show");
		}
		return this;

	}

}
