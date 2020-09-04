package framework.components.boostrap;

public class Boot {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Nav nav = new Nav("test", "ul");
		nav.setJustifyContent(Constants.JustifyContent.AROUND);
		nav.render();

	}

}
