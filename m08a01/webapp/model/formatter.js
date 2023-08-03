sap.ui.define([], function() {
    'use strict';
    
    return{

        setIconStatusFltime: function(flTime){

            if(flTime < 300){
                return "sap-icon://message-success";
            }
            else
            if(flTime < 600){
                return "sap-icon://alert";
            }
            else
            if(flTime > 600){
                return "sap-icon://error";
            }
        }      

    };

    
    
}); 