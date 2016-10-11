package com.peep.dataService;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.peep.view.AbstractViewServices;

@Path("/configure")
public class Configure extends AbstractViewServices {

	@POST
	@Path("/workspace")
	@Produces(MediaType.TEXT_HTML)
	public String configWorkspace(String workspace) {
		setWorkspace(workspace);
		return getWorkspace();
	}

	@GET
	@Path("/workspace")
	@Produces(MediaType.TEXT_HTML)
	public String myWorkspace() {
		return getWorkspace();
	}

	

}
