$(document).ready(function() {  
    loadItems();  
});  
  

function loadItems() {  
    var siteUrl = _spPageContextInfo.siteAbsoluteUrl;  
    var oDataUrl = siteUrl + "/_api/web/lists/getbytitle('EmployeeInfo')/items?$select=Title,Position,Office,Age,Joining_x0020_date";  
    $.ajax({  
        url: oDataUrl,  
        type: "GET",  
        dataType: "json",  
        headers: {  
            "accept": "application/json;odata=verbose"  
        },  
        success: mySuccHandler,  
        error: myErrHandler  
    });  
}  

function mySuccHandler(data) {  
    try {  
        

		$('#table_id').DataTable({  
            
            "aaData": data.d.results,  
            "aoColumns": [
			{  
                "mData": "Title"  
            }, 
			{  
                "mData": "Position"  
            }, 
			{  
                "mData": "Office"  
            }, 
			{  
                "mData": "Age"  
            },
			{  
                "mData": "Joining_x0020_date"  
            }			
			]  
        });  
    } catch (e) {  
        alert(e.message);  
    }  
    console.log(data.d.results);
}  
  
function myErrHandler(data, errMessage) {  
    alert("Error: " + errMessage);  
} 