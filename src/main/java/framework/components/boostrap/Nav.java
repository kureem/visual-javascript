package framework.components.boostrap;

import framework.components.JSContainer;

public class Nav extends JSContainer {

	private Type type = Type.LINKS;

	private Alignment alignment = Alignment.HORIZONTAL;

	private Spacing spacing = Spacing.NONE;

	public Nav(String name, String tag) {
		super(name, tag);
		addClass("nav");
	}

	public Nav setJustifyContent(Constants.JustifyContent justifyContent) {
		for (Constants.JustifyContent js : Constants.JustifyContent.values()) {
			removeClass("justify-content-" + js.getValue());
		}
		addClass("justify-content-" + justifyContent.getValue());
		return this;
	}

	public Type getType() {
		return type;
	}

	public void setType(Type type) {
		this.type = type;
		for (Type t : Type.values()) {
			if (t.getValue() != type.getValue() && t.getValue() != Type.LINKS.getValue())
				removeClass(t.getValue());
		}

		if (type.getValue() != Type.LINKS.getValue() && !hasClass(type.getValue())) {
			addClass(type.getValue());
		}
	}

	public Alignment getAlignment() {
		return alignment;
	}

	public void setAlignment(Alignment alignment) {
		this.alignment = alignment;

		if (alignment.getValue() == Alignment.VERTICAL.getValue() && !hasClass(Alignment.VERTICAL.getValue())) {
			addClass(Alignment.VERTICAL.getValue());
		} else {
			if (hasClass(Alignment.VERTICAL.getValue())) {
				removeClass(Alignment.VERTICAL.getValue());
			}
		}
	}

	public Spacing getSpacing() {
		return spacing;
	}

	public void setSpacing(Spacing spacing) {
		this.spacing = spacing;
		for (Spacing s : Spacing.values()) {
			if (s.getValue() != Spacing.NONE.getValue()) {
				if (s.getValue() != spacing.getValue() && hasClass(s.getValue())) {
					removeClass(s.getValue());
				}
			}
		}

		if (spacing.getValue() != Spacing.NONE.getValue() && !hasClass(spacing.getValue())) {
			addClass(spacing.getValue());
		}
	}

	public enum Type {

		PILLS("nav-pills"), TABS("nav-tabs"), LINKS("nav-links");

		private String value;

		private Type(String value) {
			this.value = value;
		}

		public String getValue() {
			return this.value;
		}
	}

	public enum Alignment {

		VERTICAL("flex-column"), HORIZONTAL("");

		private String value;

		private Alignment(String value) {
			this.value = value;
		}

		public String getValue() {
			return this.value;
		}

	}

	public enum Spacing {
		FILL("nav-fill"), JUSTIFIED("nav-justified"), NONE("");

		private String value;

		private Spacing(String value) {
			this.value = value;
		}

		public String getValue() {
			return this.value;
		}

	}

}
