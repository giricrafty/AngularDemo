package com.parser;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ConversionHandler {
	public static String htmlsnippet = "";
	public static String tsTemplate = "";
	public static String specTemplate = "";

	public String readJson(String selectedComponent, Element element) {
		List<String> selectedEvents = new ArrayList<String>() ;
		List<String> selectedValidation = new ArrayList<String>() ;	
	
		
		//Map<String,List<String>> response = new HashMap<String,List<String>>();
		JSONParser parser = new JSONParser();
		htmlsnippet = "";
		tsTemplate = "";
		specTemplate = "";
		
		try {
//			ClassLoader classloader = Thread.currentThread().getContextClassLoader();
//			InputStream is = classloader.getResourceAsStream("test.csv");
			JSONObject data = (JSONObject) parser.parse(new FileReader("res/inputbs.json"));
			
			JSONObject sc = ((JSONObject)data.get(selectedComponent));
			//System.out.println("sc"+sc);
			
			
			 if (sc != null)
			{
               //System.out.println("sc"+sc);
				
				//System.out.println("validation"+sc.get("validation").toString());
				//System.out.println("event"+sc.get("event").toString());
				
				JSONObject validation = ((JSONObject)sc.get("validation"));
				JSONObject event = ((JSONObject)sc.get("event"));
				validation.keySet().forEach(keyStr ->
				    {
				    	String key = (String) keyStr;
				    	if(element.toString().contains(key)){
				    		selectedValidation.add(key);
							System.out.println("validation matched"+validation);
						}
				        Object keyvalue = validation.get(keyStr);
				        System.out.println("key: "+ keyStr + " value: " + keyvalue);
				    });
				
				event.keySet().forEach(keyStr ->
			    {
			    	String key = (String) keyStr;
			    	if(element.toString().contains(key)){
						System.out.println("event matched"+key);
						selectedEvents.add(key);
					}
			        Object keyvalue = event.get(keyStr);
			        System.out.println("key: "+ keyStr + " value: " + keyvalue);
			    });
				//validation.
				//String event = sc.get("event").toString();
				
				
				
				htmlsnippet = sc.get("html").toString();
			    String bootstraphtmlsnippet = sc.get("bootstraphtml").toString();
			    
				
				
				
	//Events
				String events = "";
			    
			      for (int i = 0; i < selectedEvents.size(); i++) {
			        events = events + " " + ((JSONObject)((JSONObject)data.get(selectedComponent)).get("event")).get(selectedEvents.get(i)).toString();
			      }
			      
			      
			      htmlsnippet = htmlsnippet.replace("<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString(), "<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString() + events);
			      
			      bootstraphtmlsnippet = bootstraphtmlsnippet.replace("<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString(), "<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString() + events);
			    		  
	//Validations 
			      String validations = "";
			      for (int i = 0; i < selectedValidation.size(); i++) {
				        validations = validations + " " + ((JSONObject)((JSONObject)data.get(selectedComponent)).get("validation")).get(selectedValidation.get(i)).toString();

			      }
	
			      htmlsnippet = htmlsnippet.replace("<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString(), "<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString() + validations);
                  //String htmlTemplate = htmlTemplate+htmlsnippet.replace(">",">\n").replace("[","").replace("]","");			      

			      bootstraphtmlsnippet = bootstraphtmlsnippet.replace("<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString(), "<" + ((JSONObject)data.get(selectedComponent)).get("tag").toString() + validations);
			      //String bootstrapHtmlTemplate = bootstraphtmlsnippet.split("\"").join("");
	
	
	//TS template and SPEC template
			      
			    
			      for (int i = 0; i < selectedEvents.size(); i++) {
			        tsTemplate = tsTemplate + " " + ((JSONObject)((JSONObject)data.get(selectedComponent)).get("ts")).get(selectedEvents.get(i)).toString();
			        specTemplate = specTemplate + "<br/><br/>////Spec functionality for " + selectedEvents.get(i) + "<br/><br/>" + ((JSONObject)((JSONObject)data.get(selectedComponent)).get("unittest")).get(selectedEvents.get(i)).toString();
			      }
			/*      
			      response.computeIfAbsent("htmlsnippet", k -> new ArrayList<>()).add(htmlsnippet);
			      response.computeIfAbsent("tsTemplate", k -> new ArrayList<>()).add(tsTemplate);
			      response.computeIfAbsent("specTemplate", k -> new ArrayList<>()).add(specTemplate);*/
	
	//		      tsTemplate = tsTemplate.split("\"").join("<br/>");
	//		      this.tssnippet = tsTemplate;
	//		      specTemplate = specTemplate.split(';').join("<br/>");
	//		      specTemplate = specTemplate.split("\"").join("");
	//		      this.specsnippet = specTemplate;
	//		      htmlTemplate = htmlTemplate.split('>').join(">\n");
	//		      this.htmlsnippet = htmlTemplate;
	//		      this.bootstraphtmlsnippet = bootstrapHtmlTemplate;
			      
			    
	//		    String cssTmpt = ((JSONObject)data.get(selectedComponent)).get("css").toString();
	//		    String csssnippet = cssTmpt;
	////		    String csssnippet = cssTmpt.split("\"").join("");
	//		    
	//		    
	//		    String bscssTmp = ((JSONObject)data.get(selectedComponent)).get("bootstrapcss").toString();
	//		    String bscsssnippet = bscssTmp;
	//		    
	//		    String tscodesnippet = ((JSONObject)data.get(selectedComponent)).get("tscode").toString();
	//		    		    
	//		    String importTmpt = ((JSONObject)data.get(selectedComponent)).get("import").toString();
	//		    String importsnippet = importTmpt;
	//		    this.importsnippet = importTmpt.split(";").join(";\n");
			    
				
			}
			

		}
		catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		if(htmlsnippet.isEmpty()){
			htmlsnippet = element.toString();
		return htmlsnippet;
		}
		else
			return htmlsnippet;
	}
}
