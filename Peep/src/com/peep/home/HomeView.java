package com.peep.home;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.peep.view.AbstractViewServices;
import com.peep.view.HTMLElement;

@Path("/view/home")
public class HomeView extends AbstractViewServices {

	@GET
	@Path("/controls/{locale}")
	@Produces(MediaType.APPLICATION_JSON)
	public HTMLElement homeControls(@PathParam("locale") String locale) {
		HTMLElement title = new HTMLElement("h1");
		return title;

	}
}
