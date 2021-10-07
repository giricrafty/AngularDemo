package com.parser;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;


public class ParsingHandler {

	static Stack<String> stk = new Stack<String>();
	
	public static void main(String[] args) {
//		String html = "<html><head><title>Sample Title</title></head>" + "<body><p>Sample Content</p></body></html>";
//		Document document = Jsoup.parse(html);
//		System.out.println(document.title());
//		Elements paragraphs = document.getElementsByTag("p");
//		for (Element paragraph : paragraphs) {
//			System.out.println(paragraph.text());
//		}
		ConversionHandler ch = new ConversionHandler();
//		String[] event={"keyup","keyupenter"};
//		String[] validation = {"required"};
		String[] event={};
		String[] validation = {};
		Map<String,List<String>> response = new HashMap<String,List<String>>();
		
		
		try {
			//String html = "<html><head><title>Sample Title</title></head>" + "<body><p>Sample Content</p><button (click)=submit()></button><input (keyup)=onKey(box.value)></input></body></html>";
			//Document document = Jsoup.parse(html);
			String url = "http://www.google.com";
			Document document = Jsoup.connect(url).get();
			
			Elements elements = document.body().children();
			//System.out.println(elements.);
			//System.out.println("priting element"+elements);
			//Elements elements = document.body().select("*");
			//Elements elements = document.body().children().select("*");

			for (Element element : elements) {
				System.out.println("element"+element.childNodeSize());
				System.out.println("element");
				System.out.println("printing elements"+ch.readJson(element.nodeName(),element ));
				if(!ConversionHandler.htmlsnippet.equals("")){
					response.computeIfAbsent("htmlsnippet", k -> new ArrayList<>()).add(ConversionHandler.htmlsnippet);
				}
				if(!ConversionHandler.tsTemplate.equals("")){
					response.computeIfAbsent("tsTemplate", k -> new ArrayList<>()).add(ConversionHandler.tsTemplate);
				}
				if(!ConversionHandler.specTemplate.equals("")){
					response.computeIfAbsent("specTemplate", k -> new ArrayList<>()).add(ConversionHandler.specTemplate);
				}
				 
			      
			      
	
			     
			      
			      
				//System.out.println(element.nodeName());
				if(element.childrenSize()>0)
				{	
					ParsingHandler ph = new ParsingHandler();
					ParsingHandler.stk.push(element.nodeName());
					ph.getChildElements(element,response);
				}
			}
			System.out.println("printing response "+response);
			CreateFiles.createFiles(response);
			//System.out.println(document.title());  
			
		}catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public void getChildElements(Element element, Map<String, List<String>> response)
	{
		ConversionHandler ch = new ConversionHandler();
		String[] event={};
		String[] validation = {};
		
		Elements childelements = element.children();
		for (Element childelement : childelements) {
			System.out.println(ch.readJson(childelement.nodeName(), childelement ));
			//System.out.println(childelement.nodeName());
			if(!ConversionHandler.htmlsnippet.equals("")){
				response.computeIfAbsent("htmlsnippet", k -> new ArrayList<>()).add(ConversionHandler.htmlsnippet);
			}
			if(!ConversionHandler.tsTemplate.equals("")){
				response.computeIfAbsent("tsTemplate", k -> new ArrayList<>()).add(ConversionHandler.tsTemplate);
			}
			if(!ConversionHandler.specTemplate.equals("")){
				response.computeIfAbsent("specTemplate", k -> new ArrayList<>()).add(ConversionHandler.specTemplate);
			}

		      
		      
			ParsingHandler ph = new ParsingHandler();
			if(childelement.childrenSize()>0)
			{
				ParsingHandler.stk.push(childelement.nodeName());
				ph.getChildElements(childelement, response);
			}			
		}
		String tagname = ParsingHandler.stk.pop();
		System.out.println("tagname" + tagname);
	}
}