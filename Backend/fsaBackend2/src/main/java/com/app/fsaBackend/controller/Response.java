package com.app.fsaBackend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class Response {
	public static ResponseEntity<?> success(Object data)
	{
		Map< String , Object > map =new HashMap<>();
		map.put("Status", "Success");
		if(data!=null)
			map.put("Data", data);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> error(Object err)
	{
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("Status", "Error");
		if(err!=null)
			map.put("Data", err);
		return ResponseEntity.ok(map);
	}
	
	public static ResponseEntity<?> status(HttpStatus status)
	{
		return ResponseEntity.status(status).build();
				
	}

}