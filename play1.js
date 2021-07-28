function fun(){
    var name = 'Mukul Latiyan';
        {
            var a=20;
            let b=30;
            {  
                var c=20;  
                let d=20;
                f1(3);
                {
                    var e=20; 
                    function f3(){
                        console.log(a,b)
                    }
                    f3();
                }
            }
            function f1(a){
                const b=20;
                function f2(){
                    console.log(a,d)
                }
                f2();
            }

        }
        console.log(e); 
        // console.log(z,t,u);
        console.log(name);    
}
fun();
