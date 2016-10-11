package com.peep.view;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.Scanner;

public class AbstractViewServices {

	String workspace = null;
	
	public String getWorkspace() {
		try {
			return getFileAsString(getClass().getProtectionDomain().getCodeSource().getLocation().getPath().split("deployments")[0].toString() + "peep/workspace.txt");
		} catch (FileNotFoundException e) {
			e.printStackTrace();
			System.out.println("No_Workspace_Configured");
			return "No_Workspace_Configured";
		}
	}
	
	public void setWorkspace(String workspace) {
		copyToServer(workspace);
	}
	
	private String getFileAsString(String path) throws FileNotFoundException {
		StringBuilder result = new StringBuilder("");
		File file = new File(path);

		try (Scanner scanner = new Scanner(file)) {

			while (scanner.hasNextLine()) {
				String line = scanner.nextLine();
				result.append(line);
			}

			scanner.close();
		}
		return result.toString();
	}

	private void copyToServer(String workspace) {
		String path = getClass().getProtectionDomain().getCodeSource().getLocation().getPath().split("deployments")[0].toString() + "peep/workspace.txt";

		File file = new File(path);
		file.getParentFile().mkdirs();
		try {

			File targetFile = new File(path);
			OutputStream outStream = new FileOutputStream(targetFile);
			outStream.write(workspace.getBytes());
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
}
