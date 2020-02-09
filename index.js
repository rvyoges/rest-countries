func = (objs)=>{
   var obj=[]
   obj=objs
   var name=obj.name
   var alpha=obj.alpha2Code
   var cap=obj.capital
   var region=obj.region
   var borders=[obj.borders]
   var array={"name":name,"alpha2Code":alpha,"capital":cap,"region":region,"borders":borders}
    document.getElementById("data1").innerHTML=array.name;
    document.getElementById("data2").innerHTML=array.alpha;
    document.getElementById("data3").innerHTML=array.cap;
    document.getElementById("data4").innerHTML=array.region;
    document.getElementById("data5").innerHTML=array.borders;
}

fetch('https://restcountries.eu/rest/v2/all/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
        $().ready(function(){
        var objs=data[0]
        $("#image1").attr("src",objs.flag)
        $("#image1").click(function(){
            func(objs)    
        });
        });
        $().ready(function(){
        var objs=data[1]
        $("#image2").attr("src",objs.flag)
        $("#image2").click(function(){
            func(objs)    
        });       
        });
        $().ready(function(){
        var objs=data[2]
        $("#image3").attr("src",data[2].flag)
        $("#image3").click(function(){
            func(objs)
        }); 
    });
        $().ready(function(){
        var objs=data[3]
        $("#image4").attr("src",data[3].flag)
        $("#image4").click(function(){
            func(objs)
        }); 
    });
        $().ready(function(){
            var objs=data[4]
        $("#image5").attr("src",data[4].flag)
        $("#image5").click(function(){
            func(objs)
        }); 
    });
        $().ready(function(){
            var objs=data[5]
        $("#image6").attr("src",data[5].flag)
        $("#image6").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[6]
        $("#image7").attr("src",data[6].flag)
        $("#image7").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[7]
        $("#image8").attr("src",data[7].flag)
        $("#image8").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[8]
        $("#image9").attr("src",data[8].flag)
        $("#image9").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[9]
        $("#image10").attr("src",data[9].flag)
        $("#image10").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[10]
        $("#image11").attr("src",data[10].flag)
        $("#image11").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[11]
        $("#image12").attr("src",data[11].flag)
        $("#image12").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[12]
        $("#image13").attr("src",data[12].flag)
        $("#image13").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[13]
        $("#image14").attr("src",data[13].flag)
        $("#image14").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[14]
        $("#image15").attr("src",data[14].flag)
        $("#image15").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[15]
        $("#image16").attr("src",data[15].flag)
        $("#image16").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[16]
        $("#image17").attr("src",data[16].flag)
        $("#image17").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[17]
        $("#image18").attr("src",data[17].flag)
        $("#image18").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[18]
        $("#image19").attr("src",data[18].flag)
        $("#image19").click(function(){
            func(objs)
        }); 
    });
    $().ready(function(){
        var objs=data[19]
        $("#image20").attr("src",data[19].flag)
        $("#image20").click(function(){
            func(objs)
        }); 
    });
  })
