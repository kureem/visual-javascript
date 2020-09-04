package framework.components.boostrap;

public class Constants {

	public enum Context {

		PRIMARY("primary"), 
		SECONDARY("secondary"), 
		SUCCESS("success"), 
		DANGER("danger"), WARNING("warning"),
		INFO("info"), 
		LIGHT("light"), 
		DARK("dark");

		private String value;

		private Context(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}

	}
	
	
	public enum Size{
		
		SMALL("sm"),
		LARGE("lg"),
		NORMAL("");

		private String value;

		private Size(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}

	}
	
	
	public enum JustifyContent {
		START("start"),
		CENTER("center"),
		END("end"),
		AROUND("around"),
		BETWEEN("between");
		
		
		private String value;
		
		private JustifyContent(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}

	}
	
	public enum ScreenSize {
		SMALL("sm"),
		MEDIUM("md"),
		LARGE("lg"),
		EXTRA_LARGE("xl");
		
		
		private String value;
		
		private ScreenSize(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}

	}
	

}
