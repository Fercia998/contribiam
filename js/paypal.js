paypal.Buttons({
    createOrder : function( data , actions ){
    return actions.order.create ({
        purchase_units : [{
            amount : {
                value :'50.0'
            }
        }]
    });
    

    },
    onApprove : function( data , actions ){
        return actions.oder.capture().then(function(details){
            alert('transaction completed by'+ details.payer.name.given)
        });
    }
   
}).render('#paypal-button-container');