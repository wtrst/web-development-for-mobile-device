/**
 * 
 * @author Wataru Sato
 *
 */
public class Model {

	private String firstName;
	private String lastName;
	private int height;
	private double weightPo;
	private long weightKg;
	private boolean canTravel;
	private boolean smokes;
	private static String occupation = "modeling";
	private int feet;
	private int inches;
	private int payInTotal;

	public static final int MIN_LENGTH_NAME = 3;
	public static final int MAX_LENGTH_NAME = 20;
	public static final int MIN_HEIGHT = 24;
	public static final int MAX_HEIGHT = 84;
	public static final int MIN_WEIGHT = 80;
	public static final int MAX_WEIGHT = 280;
	public static final int COEFFICIENT_INCH_TO_FEET = 12;
	public static final double COEFFICIENT_POUND_TO_KG = 2.20462;
	public static final int INCHES_PER_FOOT = 12;
	public static final int BASE_RATE_DOLLARS_PER_HOUR = 60;
	public static final int TALL_INCHES = 67;
	public static final double THIN_POUNDS = 140.0;
	public static final int TALL_THIN_BONUS_DOLLARS_PER_HOUR = 5;
	public static final int TRAVEL_BONUS_DOLLARS_PER_HOUR = 4;
	public static final int SMOKER_DEDUCTION_DOLLARS_PER_HOUR = 10;

	/**
	 * Constructor1
	 */
	public Model() {

	}

	/**
	 * Constructor2
	 * 
	 * @param firstName
	 * @param lastName
	 * @param heightIn
	 * @param weightPo
	 * @param canTravel
	 * @param smokes
	 */
	public Model(String firstName, String lastName, int heightIn, double weightPo, boolean canTravel, boolean smokes) {
		setFirstName(firstName);
		setLastName(lastName);
		setHeight(heightIn);
		setWeight(weightPo);
		setCanTravel(canTravel);
		setSmokes(smokes);
	}

	/**
	 * Constructor3
	 * 
	 * @param firstName
	 * @param lastName
	 * @param heightIn
	 * @param weightPo
	 */
	public Model(String firstName, String lastName, int heightIn, double weightPo) {
		setFirstName(firstName);
		setLastName(lastName);
		setHeight(heightIn);
		setWeight(weightPo);
		setCanTravel(true);
		setSmokes(false);
	}

	/**
	 * Setter for first name
	 * 
	 * @param firstName
	 */
	public final void setFirstName(String firstName) {
		if ((firstName != null) && (firstName.length() >= MIN_LENGTH_NAME) && (firstName.length() <= MAX_LENGTH_NAME)) {
			this.firstName = firstName;
		}
	}

	/**
	 * Setter for last name
	 * 
	 * @param lastName
	 */
	public final void setLastName(String lastName) {
		if ((lastName != null) && (lastName.length() >= MIN_LENGTH_NAME) && (lastName.length() <= MAX_LENGTH_NAME)) {
			this.lastName = lastName;
		}
	}

	/**
	 * Setter for height(inches)
	 * 
	 * @param heightIn
	 */
	public final void setHeight(int heightIn) {
		if ((heightIn >= MIN_HEIGHT) && (heightIn <= MAX_HEIGHT)) {
			this.height = heightIn;
		}
	}

	/**
	 * Setter for height(feet & inches)
	 * 
	 * @param feet
	 * @param inches
	 */
	public final void setHeight(int feet, int inches) {
		this.feet = feet;
		this.inches = inches;
	}

	/**
	 * Setter for weight(pounds)
	 * 
	 * @param weightPo
	 */
	public final void setWeight(double weightPo) {
		if ((weightPo >= MIN_WEIGHT) && (weightPo <= MAX_WEIGHT)) {
			this.weightPo = weightPo;
		}
	}

	/**
	 * Setter for weight(kg)
	 * 
	 * @param kilograms
	 */
	public final void setWeight(long kilograms) {
		this.weightKg = kilograms;
	}

	/**
	 * Setter for can travel
	 * 
	 * @param canTravel
	 */
	public final void setCanTravel(boolean canTravel) {
		this.canTravel = canTravel;
	}

	/**
	 * Setter for smokes
	 * 
	 * @param smokes
	 */
	public final void setSmokes(boolean smokes) {
		this.smokes = smokes;
	}

	/**
	 * Getter for first name
	 * 
	 * @return firstName
	 */
	public String getFirstName() {
		return firstName;
	}

	/**
	 * Getter for last name
	 * 
	 * @return lastName
	 */
	public String getLastName() {
		return lastName;
	}

	/**
	 * Getter for height
	 * 
	 * @return height
	 */
	public int getHeight() {
		return height;
	}

	/**
	 * Getter for weight(pounds)
	 * 
	 * @return weightPo
	 */
	public double getWeightPounds() {
		return weightPo;
	}

	/**
	 * Getter for weight(kg)
	 * 
	 * @return weightKg
	 */
	public long getWeightKg() {
		return weightKg;
	}

	// public boolean isCanTravel() {
	// return canTravel;
	// }
	//
	// public boolean isSmokes() {
	// return smokes;
	// }

	/**
	 * Getter for occupation
	 * 
	 * @return occupation
	 */
	public static String getOccupation() {
		return occupation;
	}

	/**
	 * Getter for height(convert inches to feet & inches)
	 * 
	 * @param heightIn
	 * @return feet & inches
	 */
	public String getHeightInFeetAndInches(int heightIn) {
		feet = heightIn / COEFFICIENT_INCH_TO_FEET;
		inches = heightIn % COEFFICIENT_INCH_TO_FEET;

		if (inches == 0) {
			return feet + " feet";
		} else if (inches == 1) {
			return feet + " feet " + inches + " inch";
		} else {
			return feet + " feet " + inches + " inches";
		}
	}

	/**
	 * Getter for weight(convert pounds to kg)
	 * 
	 * @param weightPo
	 * @return weight
	 */
	public long getWeightKg(double weightPo) {
		return Math.round(weightPo / COEFFICIENT_POUND_TO_KG);
	}

	public int calculatePayDollarsPerHour() {
		payInTotal = BASE_RATE_DOLLARS_PER_HOUR;

		if ((height >= TALL_INCHES) && (weightPo <= THIN_POUNDS)) {
			payInTotal += TALL_THIN_BONUS_DOLLARS_PER_HOUR;
		}
		if (canTravel == true) {
			payInTotal += TRAVEL_BONUS_DOLLARS_PER_HOUR;
		}
		if (smokes == true) {
			payInTotal -= SMOKER_DEDUCTION_DOLLARS_PER_HOUR;
		}
		
		return payInTotal;
	}

	/**
	 * Print result
	 */
	public void printDetails() {
		System.out.println("Name: " + getFirstName() + " " + getLastName());
		System.out.println("Height: " + getHeight() + " inches");
		System.out.println("Weight: " + Math.round(getWeightPounds()) + " pounds");
		if (canTravel == true) {
			System.out.println("Does travel");
		} else {
			System.out.println("Does not travel");
		}
		if (smokes == true) {
			System.out.println("Does smoke");
		} else {
			System.out.println("Does not smoke");
		}
	}
	
	public void displayModelDetails() {
		System.out.println("Name: " + getFirstName() + " " + getLastName());
		System.out.println("Height: " + getHeightInFeetAndInches(height));
		System.out.println("Weight: " + getWeightPounds() + " pounds");
		if (canTravel == true) {
			System.out.println("yep");
		} else {
			System.out.println("nope");
		}
		if (smokes == true) {
			System.out.println("yep");
		} else {
			System.out.println("nope");
		}
		System.out.println("Hourly rate: $" + calculatePayDollarsPerHour());
	}

}
