package com.peep.view;

// TODO: Auto-generated Javadoc
/**
 * The Class HTMLEvent.
 *
 * @author Soutan Seth
 * @email sseth@aldera.com
 * @Company Aldera Inc.
 */
public class HTMLEvent {
	
	/** The event type. */
	private String eventType;
	
	/** The event name. */
	private String eventName;
	
	/**
	 * Instantiates a new HTML event.
	 */
	public HTMLEvent() {
		// TODO Auto-generated constructor stub
	}
	
	/**
	 * Instantiates a new HTML event.
	 *
	 * @param eventType the event type
	 * @param eventName the event name
	 */
	public HTMLEvent(String eventType, String eventName) {
		this.eventType=eventType;
		this.eventName=eventName;
	}
	
	/**
	 * Gets the event type.
	 *
	 * @return the event type
	 */
	public String getEventType() {
		return eventType;
	}
	
	/**
	 * Sets the event type.
	 *
	 * @param eventType the new event type
	 */
	public void setEventType(String eventType) {
		this.eventType = eventType;
	}
	
	/**
	 * Gets the event name.
	 *
	 * @return the event name
	 */
	public String getEventName() {
		return eventName;
	}
	
	/**
	 * Sets the event name.
	 *
	 * @param eventName the new event name
	 */
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	
	

}
