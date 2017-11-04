/**
 * 
 * @author Wataru Sato
 *
 */
public class Driver {
	public static void main(String[] args) {
		Model m1 = new Model("Susan", "Smith", 70, 120.0, false, true);
		m1.printDetails();
		System.out.println("");
		Model m2 = new Model("Tiger", "Woods", 72, 190.0, true, false);
		m2.printDetails();
		
		System.out.println("");
		Model m3 = new Model("Susan", "Smith", 70, 120.0, true, false);
		m3.displayModelDetails();
		System.out.println("");
		Model m4 = new Model("Tiger", "Woods", 72, 190.0, true, false);
		m4.displayModelDetails();
	}
}
