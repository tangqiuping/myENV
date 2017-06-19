/**
 * Created by tangqiuping on 2017/6/12.
 */
 /*c3js渲染的图表*/
    function weather(){
            var data = ['rain'];
            for(var i = 0 ;i < 24;i++) {
                var num = (Math.random()*30+40).toFixed(1)
                data.push(num)
            };
            var chart = c3.generate({
            bindto: '#chart',
            data: {
              columns: [
                  data,
                  ['sun',null,null,null,null,null,null,0,21,39,54,66,75,79,73,64,52,37,19,0,null,null,null,null,null]
              ],
              types: {
                rain:'area-spline',
                sun:'spline'
              }
            },
            axis: {
                x:{
                    show:false
                },
                y:{
                    show:false
                }
            },
            point:{
                show:false
            },
            tooltip: {
                show: false
            },
            legend: {
                show: false
            }
    })      
}
    weather()
/*获取数据接口*/
        $.ajax({
            type:'get',
            url:'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=0A5bc3c4fb543c8f9bc54b77bc155724',
            data:{
                location:'北京'
            },
            dataType:'jsonp',
            success:function(data){
                $('.weather_img img').attr("src",data.results[0].weather_data[0].dayPictureUrl);
                $('h3.temp').text(data.results[0].weather_data[0].temperature.substr(-3,3))
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('zhenyu') !== -1){
                    $('.weather .desc').text('Shower')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*15).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('leizhenyu') !== -1){
                    $('.weather .desc').text('Rainy')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*15).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('zhongyu') !== -1){
                    $('.weather .desc').text('Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*10+10).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('yin') !== -1){
                    $('.weather .desc').text('Overcast')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('duoyun') !== -1){
                    $('.weather .desc').text('Cloudy')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('xiaoyu') !== -1){
                    $('.weather .desc').text('Small Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*5).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('baoyu') !== -1){
                    $('.weather .desc').text('heavy Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*50+50).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('qing') !== -1){
                    $('.weather .desc').text('Sunny')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
            }
        });
    
        $('.header .curr_location').click(function(){
            $('.location').css('visibility','visible')
            $('.curr_location span').addClass('glyphicon-menu-down')
                                    .removeClass('glyphicon-menu-up')
        })
        $('.location a').click(function(event){
            weather()
            console.log(event)
            var value = event.target.innerHTML
            $.ajax({
            type:'get',
            url:'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=0A5bc3c4fb543c8f9bc54b77bc155724',
            data:{
                location:value
            },
            dataType:'jsonp',
            success:function(data){
                $('.weather_img img').attr("src",data.results[0].weather_data[0].dayPictureUrl);
                $('h3.temp').text(data.results[0].weather_data[0].temperature.substr(-3,3))
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('zhenyu') !== -1){
                    $('.weather .desc').text('Shower')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*15).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('leizhenyu') !== -1){
                    $('.weather .desc').text('Rainy')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*15).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('zhongyu') !== -1){
                    $('.weather .desc').text('Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*10+10).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('yin') !== -1){
                    $('.weather .desc').text('Overcast')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('duoyun') !== -1){
                    $('.weather .desc').text('Cloudy')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('xiaoyu') !== -1){
                    $('.weather .desc').text('Small Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*5).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('baoyu') !== -1){
                    $('.weather .desc').text('heavy Rain')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text((Math.random()*50+50).toFixed(1))
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
                if(data.results[0].weather_data[0].dayPictureUrl.indexOf('qing') !== -1){
                    $('.weather .desc').text('Sunny')
                    $('h3.humidness').text(parseInt(Math.random()*50+40)+'%')
                    $('span.psi_mess').text(parseInt((Math.random()*20)+40))
                    $('span.rain_mess').text(0)
                    if($('span.psi_mess').text() < 51){
                        $('.confortable').text('Good')
                        $('.psi_mess').css('backgroundColor','#00B606')
                    }else{
                        $('.confortable').text('Moderate')
                        $('.psi_mess').css('backgroundColor','#0070A2')
                    }
                }
            }
        });
            $('.location').css('visibility','hidden')
            $('.curr_location span').addClass('glyphicon-menu-up')
                                    .removeClass('glyphicon-menu-down')
            $('.curr_location').html(value+'<span style="margin-left:10px;" class="glyphicon glyphicon-menu-up"></span>')
        })
            $('.warn').click(function(){
                $('.toggle_warn').css('display','block')
            })
            $('#cancel').click(function(){
                $('.toggle_warn').css('display','none')
            })
            var flag = true;
            $('.menu').click(function(){
                if(flag){
                    $('.toggle_menu').css('display','block')
                    $('.containers').animate({'left':'70%'},200)
                    flag = false
                }else{
                    $('.toggle_menu').css('display','none')
                    $('.containers').animate({'left':'0%'},200)
                    flag = true
                }
                
            })
            $('.toggle_menu a').click(function(){
                $('.toggle_menu').css('display','none');
                $('.containers').animate({'left':'0'},200);
            })
            var month = new Date().getMonth();
            var date = new Date().getDate();
            var hour = new Date().getHours();
            var minute = new Date().getMinutes();
            var minutes = minute < 10 ? '0'+minute : minute
            switch (month) {
                case 0:
                $('.date').html(date + '<sup class="th">th</sup>January')
                break;
                case 1:
                $('.date').html(date + '<sup class="th">th</sup>February')
                break;
                case 2:
                $('.date').html(date + '<sup class="th">th</sup>March')
                break;
                case 3:
                $('.date').html(date + '<sup class="th">th</sup>April')
                break;
                case 4:
                $('.date').html(date + '<sup class="th">th</sup>May')
                break;
                case 5:
                $('.date').html(date + '<sup class="th">th</sup>June')
                break;
                case 6:
                $('.date').html(date + '<sup class="th">th</sup>July')
                break;
                case 7:
                $('.date').html(date + '<sup class="th">th</sup>August')
                break;
                case 8:
                $('.date').html(date + '<sup class="th">th</sup>September')
                break;
                case 9:
                $('.date').html(date + '<sup class="th">th</sup>October')
                break;
                case 10:
                $('.date').html(date + '<sup class="th">th</sup>November')
                break;
                case 11:
                $('.date').html(date + '<sup class="th">th</sup>December')
                break;
            }
            switch(hour) {
                case 06:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','22%')
                $('.sunImg').css({'left':'23%','bottom':'13px'})
                $('.sunrise').css({'height':'15px'})
                $('.layer').css('left','-25%')                 
                                break;
                case 07:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','26%')
                $('.sunImg').css({'left':'27%','bottom':'11%'})
                $('.layer').css('left','-37%')                
                                break;
                case 08:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','32%')
                $('.sunImg').css({'left':'33%','bottom':'40%'})
                $('.layer').css('left','-50%')                
                                break;
                case 09:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','36%')
                $('.sunImg').css({'left':'37%','bottom':'55%'}) 
                $('.layer').css('left','-65%')                 
                                break;
                case 10:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','40%')
                $('.sunImg').css({'left':'41%','bottom':'67%'}) 
                $('.layer').css('left','-70%')               
                                break;
                case 11:
                $('.currenTime').html(hour+':'+minutes + 'am' + '<div class="trigon"></div>')
                                .css('left','44%')
                $('.sunImg').css({'left':'45%','bottom':'77%'}) 
                $('.layer').css('left','-86%')                
                                break;
                case 12:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','48%')
                $('.sunImg').css({'left':'49%','bottom':'84%'}) 
                $('.layer').css('left','-100%')                 
                                break;
                case 13:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','52%')
                $('.sunImg').css({'left':'53%','bottom':'84%'})
                $('.layer').css('left','-111%')                 
                                break;
                case 14:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','56%')
                $('.sunImg').css({'left':'57%','bottom':'76%'})
                $('.layer').css('left','-122%')                 
                                break;
                case 15:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','60%')
                $('.sunImg').css({'left':'61%','bottom':'66%'})
                $('.layer').css('left','-132%')                
                                break;
                case 16:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','64%')
                $('.sunImg').css({'left':'65%','bottom':'54%'})
                $('.layer').css('left','-150%')                
                                break;
                case 17:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','68%')
                $('.sunImg').css({'left':'69%','bottom':'39%'})
                $('.layer').css('left','-163%')                 
                                break;
                case 18:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','72%')
                $('.sunImg').css({'left':'73%','bottom':'22%'})
                $('.layer').css('left','-173%')                  
                                break;                                                                                                                                                                
                case 19:
                $('.currenTime').html(hour+':'+minutes + 'pm' + '<div class="trigon"></div>')
                                .css('left','76%')
                $('.sunImg').css({'left':'77%','bottom':'13px'})
                $('.sunrise').css({'height':'15px'})
                $('.layer').css('left','-185%')                  
                                break;                
            }







