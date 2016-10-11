package com.peep.view;

// TODO: Auto-generated Javadoc
/**
 * The Class HTMLElementProperties.
 *
 * @author Soutan Seth
 * @email sseth@aldera.com
 * @Company Aldera Inc.
 */
public class HTMLElementProperties {

	/** The name. */
	private String name;
	
	/** The value. */
	private Object value;
	
	/**
	 * Instantiates a new HTML element properties.
	 */
	public HTMLElementProperties() {
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * Instantiates a new HTML element properties.
	 *
	 * @param name the name
	 * @param value the value
	 */
	public HTMLElementProperties(String name, Object value) {
		this.name=name;
		this.value=value;
	}
	
	/**
	 * Gets the name.
	 *
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	
	/**
	 * Sets the name.
	 *
	 * @param name the new name
	 */
	public void setName(String name) {
		this.name = name;
	}
	
	/**
	 * Gets the value.
	 *
	 * @return the value
	 */
	public Object getValue() {
		return value;
	}
	
	/**
	 * Sets the value.
	 *
	 * @param value the new value
	 */
	public void setValue(Object value) {
		this.value = value;
	}
}
