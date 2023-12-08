const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7
        },
        weekly: {
          current: 32,
          previous: 36
        },
        monthly: {
          current: 103,
          previous: 128
        }
      }
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2
        },
        weekly: {
          current: 10,
          previous: 8
        },
        monthly: {
          current: 23,
          previous: 29
        }
      }
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 7
        },
        monthly: {
          current: 13,
          previous: 19
        }
      }
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1
        },
        weekly: {
          current: 4,
          previous: 5
        },
        monthly: {
          current: 11,
          previous: 18
        }
      }
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3
        },
        weekly: {
          current: 5,
          previous: 10
        },
        monthly: {
          current: 21,
          previous: 23
        }
      }
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1
        },
        weekly: {
          current: 2,
          previous: 2
        },
        monthly: {
          current: 7,
          previous: 11
        }
      }
    }
  ]

// console.log(data)

// fetch('./data.json')
//   .then(response =>response.json())
//   .then(json=>console.log(json))

  function Daily(){
    
    for(var i = 0; i < data.length; i++){
      document.getElementById("c"+i).innerHTML = data[i].timeframes.daily.current + "hrs"
      document.getElementById("p"+i).innerHTML =  "Last week - " + data[i].timeframes.daily.previous + "hrs"
    }

    document.getElementById("daily").style.color = "#fff"
    document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)"
    document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)"
  }

  function Weekly(){
    for(var i = 0; i < data.length; i++){
      document.getElementById("c"+i).innerHTML = data[i].timeframes.weekly.current + "hrs"
      document.getElementById("p"+i).innerHTML =  "Last week - " + data[i].timeframes.weekly.previous + "hrs"
    }

    document.getElementById("daily").style.color = "hsl(236, 100%, 87%)"
    document.getElementById("weekly").style.color = "#fff"
    document.getElementById("monthly").style.color = "hsl(236, 100%, 87%)"
  }

  function Monthly(){
    for(var i = 0; i < data.length; i++){
      document.getElementById("c"+i).innerHTML = data[i].timeframes.monthly.current + "hrs"
      document.getElementById("p"+i).innerHTML =  "Last week - " + data[i].timeframes.monthly.previous + "hrs"
    }

    document.getElementById("daily").style.color = "hsl(236, 100%, 87%)"
    document.getElementById("weekly").style.color = "hsl(236, 100%, 87%)"
    document.getElementById("monthly").style.color = "#fff"
  }