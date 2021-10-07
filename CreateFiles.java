package com.parser;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;


public class CreateFiles {
	 static String htmlArray = "";
	 static String tsArray = "";
	 static String specArray = "";
  public static void createFiles(Map<String, List<String>> response) throws IOException{
	   htmlArray = "";
	   tsArray = "";
	   specArray = "";
	  response.forEach((k, v) -> {
		  v.forEach(value ->{
          if(k.equals("htmlsnippet")){
        	  htmlArray = htmlArray.concat(value+"\r\n");
          } 
          else if(k.equals("tsTemplate")){
        	  tsArray = tsArray.concat(value+"\r\n");
          } 
          else if(k.equals("specTemplate")){
        	  specArray = specArray.concat(value+"\r\n");
          } 
          
          });
      });
	  
	    
	  
	  
	    System.err.println("Create Files");
	    Files.deleteIfExists(Paths.get("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.html"));
	    Files.deleteIfExists(Paths.get("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.ts"));
	    Files.deleteIfExists(Paths.get("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.spec.ts"));
	    File file1 = new File("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.html"); //initialize File object and passing path as argument
	    File file2 = new File("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.ts"); //initialize File object and passing path as argument
	    File file3 = new File("C:\\Users\\shilpa.sasikumar\\Downloads\\controllers.component.spec.ts"); //initialize File object and passing path as argument
		
	    
	    Files.deleteIfExists(Paths.get("C:\\Users\\Mayank\\Desktop\\ 445.txt"));
	    boolean result1,result2,result3;  
		try   
		{  
		result1 = file1.createNewFile(); //creates a new file
		result2 = file2.createNewFile();
		result3= file3.createNewFile();
		if(result1&result2&result3)      // test if successfully created a new file  
		{  
		System.out.println("files created "+file1.getCanonicalPath()); //returns the path string  
		}  
		else  
		{  
		System.out.println("File already exist at location: "+file1.getCanonicalPath());  
		}  
		}   
		catch (IOException e)   
		{  
		e.printStackTrace();    //prints exception if any  
		} 
		FileWriter fileWriter1 = new FileWriter(file1,true);
		FileWriter fileWriter2 = new FileWriter(file2,true);
		FileWriter fileWriter3 = new FileWriter(file3,true);
	    PrintWriter printWriter1 = new PrintWriter(fileWriter1);
	    PrintWriter printWriter2 = new PrintWriter(fileWriter2);
	    PrintWriter printWriter3 = new PrintWriter(fileWriter3);
	    printWriter1.println(htmlArray);
	    printWriter2.println(Constants.defaultTsFile+tsArray+Constants.closeTsFile);
	    printWriter3.println(Constants.defaultSpecFile+specArray+Constants.closeSpecFile);
	    printWriter1.close();
	    printWriter2.close();
	    printWriter3.close();

  }


  
}
