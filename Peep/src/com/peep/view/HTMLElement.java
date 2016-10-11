package com.peep.view;

import java.util.ArrayList;
import java.util.List;


public class HTMLElement {

	/** The html id. */
	private String htmlID;

	/** The type. */
	private String type;

	/** The name. */
	private String name;

	/** The disp value. */
	private String dispValue;

	/** The label. */
	private String label;

	/** The seq. */
	private String seq;

	/** The css class. */
	private String cssClass;

	/** The css style. */
	private String cssStyle;

	/** The properties. */
	private List<HTMLElementProperties> properties = new ArrayList<HTMLElementProperties>();

	/** The child elements. */
	private List<HTMLElement> childElements = new ArrayList<HTMLElement>();

	/** The events. */
	private List<HTMLEvent> events = new ArrayList<HTMLEvent>();

	/** Entities. */
	private Object obj;

	/**
	 * Instantiates a new HTML element.
	 */
	public HTMLElement() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * Instantiates a new HTML element.
	 *
	 * @param type
	 *            the type
	 */
	public HTMLElement(String type) {
		this.type = type;
	}

	/**
	 * Gets the html id.
	 *
	 * @return the html id
	 */
	public String getHtmlID() {
		return htmlID;
	}

	/**
	 * Sets the html id.
	 *
	 * @param htmlID
	 *            the new html id
	 */
	public void setHtmlID(String htmlID) {
		this.htmlID = htmlID;
	}

	/**
	 * Gets the type.
	 *
	 * @return the type
	 */
	public String getType() {
		return type;
	}

	/**
	 * Sets the type.
	 *
	 * @param type
	 *            the new type
	 */
	public void setType(String type) {
		this.type = type;
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
	 * @param name
	 *            the new name
	 */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * Gets the disp value.
	 *
	 * @return the disp value
	 */
	public String getDispValue() {
		if(dispValue !=null)
		return dispValue;
		else
		return "";
	}

	/**
	 * Sets the disp value.
	 *
	 * @param dispValue
	 *            the new disp value
	 */
	public void setDispValue(String dispValue) {
		this.dispValue = dispValue;
	}

	/**
	 * Gets the label.
	 *
	 * @return the label
	 */
	public String getLabel() {
		return label;
	}

	/**
	 * Sets the label.
	 *
	 * @param label
	 *            the new label
	 */
	public void setLabel(String label) {
		this.label = label;
	}

	/**
	 * Gets the css class.
	 *
	 * @return the css class
	 */
	public String getCssClass() {
		return cssClass;
	}

	/**
	 * Sets the css class.
	 *
	 * @param cssClass
	 *            the new css class
	 */
	public void setCssClass(String cssClass) {
		this.cssClass = cssClass;
	}

	/**
	 * Gets the css style.
	 *
	 * @return the css style
	 */
	public String getCssStyle() {
		return cssStyle;
	}

	/**
	 * Sets the css style.
	 *
	 * @param cssStyle
	 *            the new css style
	 */
	public void setCssStyle(String cssStyle) {
		this.cssStyle = cssStyle;
	}

	/**
	 * Gets the child elements.
	 *
	 * @return the child elements
	 */
	public List<HTMLElement> getChildElements() {
		return childElements;
	}

	/**
	 * Sets the child elements.
	 *
	 * @param childElements
	 *            the new child elements
	 */
	public void setChildElements(List<HTMLElement> childElements) {
		this.childElements = childElements;
	}

	/**
	 * Gets the events.
	 *
	 * @return the events
	 */
	public List<HTMLEvent> getEvents() {
		return events;
	}

	/**
	 * Sets the events.
	 *
	 * @param events
	 *            the new events
	 */
	public void setEvents(List<HTMLEvent> events) {
		this.events = events;
	}

	/**
	 * Gets the seq.
	 *
	 * @return the seq
	 */
	public String getSeq() {
		return seq;
	}

	/**
	 * Sets the seq.
	 *
	 * @param seq
	 *            the new seq
	 */
	public void setSeq(String seq) {
		this.seq = seq;
	}

	/**
	 * Gets the properties.
	 *
	 * @return the properties
	 */
	public List<HTMLElementProperties> getProperties() {
		return properties;
	}

	/**
	 * Sets the properties.
	 *
	 * @param properties
	 *            the new properties
	 */
	public void setProperties(List<HTMLElementProperties> properties) {
		this.properties = properties;
	}

	/**
	 * Gets the object.
	 *
	 * @return the object
	 */
	public Object getObject() {
		return obj;
	}

	/**
	 * Sets the objects.
	 *
	 * @param obj the new objects
	 */
	public void setObjects(Object obj) {
		this.obj = obj;
	}

}
