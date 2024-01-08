

$(document).ready(function(){
    $("#calculate").click(function(){
        var mdate       = $("#birth_date").val().toString();
        var yearThen    = parseInt(mdate.substring(0,4), 10);
        var monthThen   = parseInt(mdate.substring(5,7), 10);
        var dayThen     = parseInt(mdate.substring(8,10), 10);
        
        var today       = new Date();
        var birthday    = new Date(yearThen, monthThen-1, dayThen);
        
        var differenceInMilisecond = today.valueOf() - birthday.valueOf();
        
        var days = Math.round(differenceInMilisecond / (60*60*24*1000));
        
        if(differenceInMilisecond < 0) {
           $('#age_container').css('display' , 'none');
            alert('Birth Date cannot be less than Current Date');
            return;
        }
        
        var year_age    = Math.floor(differenceInMilisecond / 31536000000);
        var day_age     = Math.floor((differenceInMilisecond % 31536000000) / 86400000);
        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy B'day!!!");
        }
        
        var month_age   = Math.floor(day_age/30);
        
        day_age         = day_age % 30;
        
        if (isNaN(year_age) || isNaN(month_age) || isNaN(day_age)) {
            $("#exact_age").text("Invalid birthday - Please try again!");
        } else {
            $('#age_container').css('display' , 'block');
            $("#exact_age").html(" <span id='young'></span><br/><br/>You are <span id='days'></span><br><br><span id=\"age\">" + year_age + " years " + month_age + " months " + day_age + " days</span>");
            
          
           
        }
    });
});