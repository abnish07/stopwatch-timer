        
        var curernt_time = 0;                     // save the current time when pause
        var x ;
        var res = document.getElementById("timer-display")

        var h = document.getElementById("hour-value")
        var m = document.getElementById("minute-value")
        var s = document.getElementById("second-value")
        document.getElementById("start-btn").addEventListener('click', startTimer)

    // function for start the timer , start
        var input_time;                // data given by customer


        function startTimer()
        {
            input_time = Number(h.value * 3600) + Number(m.value * 60) + Number(s.value)

          x = setInterval(function()
            {

                if(input_time <= 0)
                {
                    clearInterval(x)
                }
              else
                {
                    input_time--
                    var hour = Math.floor(input_time/3600)%60;
                    var mins = Math.floor(input_time/60)%60;
                    var secs = Math.floor(input_time%60);

                    document.getElementById("start-btn").style.backgroundColor = "green"

                    document.getElementById("line").style.width = input_time+"%"
                    res.innerHTML = hour +" " + "h"+" " + mins +" "+"m" +" "+secs+ " "+"s" 
                    realTime = hour +" " + "h"+" " + mins +" "+"m" +" "+secs+ " "+"s" 
                    curernt_time = input_time

                    // console.log(realTime)
                
                }
                
            }, 1000)
                inputReset()
            document.getElementById("start-btn").removeEventListener('click', startTimer)      
      
    }
// }
    // function for start the timer,  End


        // function for pause button

        var flag = false
        
        function pauseTimer()
        {
            if(!flag)
            {
                document.getElementById("pause-btn").innerHTML = "Resume"
                document.getElementById("start-btn").style.backgroundColor = "blue"

                document.getElementById("pause-btn").style.backgroundColor = "green"

                clearInterval(x)
            }
            if(flag)
            {
                document.getElementById("pause-btn").innerHTML = "Pause"
                document.getElementById("pause-btn").style.backgroundColor = "blue"

                x = setInterval(function()
                {

                    if(curernt_time <= 0)
                    {
                        clearInterval(x)
                    }
                    else
                    {
                        curernt_time--
                        var hour = Math.floor(curernt_time/3600)%60;
                        var mins = Math.floor(curernt_time/60)%60;
                        var secs = Math.floor(curernt_time%60);

                        document.getElementById("line").style.width = input_time+"%"

                        res.innerHTML = hour +" " + "h"+" " + mins +" "+"m" +" "+secs+ " "+"s" 
                      realTime = hour +" " + "h"+" " + mins +" "+"m" +" "+secs+ " "+"s" 
                      console.log(curernt_time)
                      
                    }
                      
                }, 1000)
            }
                flag = !flag
            
        }

        // Reset function start

        function reset(){
            res.innerHTML = "00h 00m 00s"
            clearInterval(x)

            document.getElementById("pause-btn").style.backgroundColor = "blue"
            document.getElementById("start-btn").style.backgroundColor = "blue"

            document.getElementById("line").style.width = "0px"
            inputReset()
            document.getElementById("start-btn").addEventListener('click', startTimer)

        }

        // Reset function stop

        // Stop function start
        function stop(){
            res.innerHTML = "00h 00m 00s"
            clearInterval(x)

            document.getElementById("start-btn").style.backgroundColor = "blue"
            document.getElementById("line").style.width = "0px"

            document.getElementById("pause-btn").style.backgroundColor = "blue"
            inputReset()
            document.getElementById("start-btn").addEventListener('click', startTimer)

        }

        function inputReset()
        {
            h.value = ''
            m.value = ''
            s.value = ''
        }