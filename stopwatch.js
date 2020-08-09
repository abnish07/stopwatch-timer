var time = 0;
        var res = document.getElementById("display-timer")
        
        var x ; 
        var current; 
        var flag = false;


        // function to start the stopwatch

        function start()
        {
            if(!flag)
            {

               var start_btn = document.getElementById("start-btn")
                start_btn.innerHTML = "Pause"
                start_btn.style.backgroundColor = "green"

                x = setInterval(function()
                {
                    time++
                    var mins = Math.floor(time/10/60);
                    var secs = Math.floor(time/10%60);
                    var hours = Math.floor(time/10/60/60);
                    var tenth = time%10

                if(mins < 10)
                {
                    mins = "0" + mins;

                }
                if(secs<10)
                {
                    secs = "0" + secs;
                }
                
                document.getElementById("line").style.width = time+"px"
                
                res.innerHTML = hours+"h"+ ":"+ " " + mins +"m"+ ":" + secs+"s"+ ":" + tenth + "0";
                 current = hours + ":"+ " " + mins + ":" + secs + ":" + tenth + "0";
                // console.log(time )
            }, 100)
            }

            if(flag)
            {
                var pause_btn = document.getElementById("start-btn")
                pause_btn.innerHTML = "Start"

                pause_btn.style.backgroundColor = "red"
                clearInterval(x)

                res.innerHTML = current;
                console.log(time + "2")

            }

            flag = !flag
        }

        function reset()
        {
            res.innerHTML = "00"+" "+"h"+" "+":"+" "+"00"+" "+"m"+" "+":"+" "+"00"+" "+"s"
            clearInterval(x)
            var start_btn = document.getElementById("start-btn")
                start_btn.innerHTML = "start"
                start_btn.style.backgroundColor = "blue"
                document.getElementById("line").style.width = "0px"

                time = 0
                flag = false
        }