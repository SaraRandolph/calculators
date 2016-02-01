app.controller ('M2KController', function(){

    this.doMilesMath = function (miles){
       return miles * 1.6214;       
    }
    this.doKmMath = function (km){       
        return km * .6124;   
    }
});

app.controller ('C-FController', function(){
    this.doCelsiusMath = function (celsius){
       return (celsius * 1.8 + 32);       
    }   
    this.doFahrenheitMath = function (fahrenheit){       
        return ((fahrenheit - 32) * 1.8);   
    }
    
});

app.controller('P-KController', function(){
    this.doPoundMath = function (pound){
       return (pound / 2.2046);       
    }   
    this.doKilogramMath = function (kilogram){       
        return kilogram * 2.2;   
    }
    
});

app.controller('I-FController', function(){
    this.doInchesMath = function (inches){
       return (inches / 12);       
    }   
    this.doFootMath = function (foot){       
        return foot * 12;   
    }
    
});

app.controller('BMIController', function(){
     this.doBMIMath = function (feet, inches, weight){
        return (weight / ( ((feet*12) + inches)*((feet * 12) + inches)) * 703);
    }
    
});


app.controller('L-PController', function(){    
    this.doLPMath = function (principle, interestRate, interestPeriods){
        return principle * Math.pow((1 + interestRate*.01), interestPeriods);        
    }
     
});
