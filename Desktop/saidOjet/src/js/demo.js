require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
function(oj, ko, $)
{   
    $( "#btn" ).on( "click", function()
    {   
      

    function ChartModel() { 
        var self = this;
        
        /* toggle button variables */
        self.stackValue = ko.observable('off');
        self.orientationValue = ko.observable('vertical');
        

        var text=$( "#text" ). val();

        textRow=text.split("\\n");
            /* chart data */

            var areaSeries = [];
            for(var i=1;i<textRow.length;i++){
                areaSeries.push(
                    {
                        name : "Series "+i,
                        items : textRow[i].split("\\t")
                    }
                )
            }
          
        
        var areaGroups =  textRow[0].split("\\t");
   
        
        this.areaSeriesValue = ko.observableArray(areaSeries);
        this.areaGroupsValue = ko.observableArray(areaGroups);        
    }
    
    var chartModel = new ChartModel();
    
    $(
		function()
		{   
              ko.cleanNode(document.getElementById('chart-container'));
             ko.applyBindings(chartModel, document.getElementById('chart-container'));
		}
    );
	
    });

    
    
});	
