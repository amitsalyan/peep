package com.peep.dataService;

import java.io.File;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.peep.view.AbstractViewServices;

@Path("/system")
public class SystemAccess extends AbstractViewServices {
	
	@GET
	@Path("/dir")
	@Produces(MediaType.TEXT_HTML)
	public String getDirStructure() {

		displayIt(new File(getWorkspace()));
		return null;
	}
	
	public void displayIt(File node){
		
		System.out.println(node.getAbsoluteFile());
		
		if(node.isDirectory()){
			String[] subNote = node.list();
			for(String filename : subNote){
				displayIt(new File(node, filename));
			}
		}
	}


}
