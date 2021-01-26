class Block{
    constructor(x,y,width,height ){
        
        var option = {

            friction:0.0,
            restitution: 0.4
        }

    //     this.body= Bodies.rectangle(x,y,width,height,option)
    //     this.width= width ;
    //     this.height = height ;
    //    World.add(world, this.body) ;

       this.body= Bodies.rectangle(x,y,width,height,option) ;
       this.width = width ;
       this.height= height ;
       World.add(world,this.body)
       console.log(this.body) ;
       this.Visiblity = 255;
       

    }
    display(){
        var angle = this.body.angle ;
        var p = this.body.position ;

        if(this.sling.speed < 2){
            push()
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop()
           }
           else{
            push()
            translate(p.x , p.y) ;
            rotate(angle) ;
            rectMode(CENTER) ;
            this.Visiblity = this.Visiblity - 5 ;
            tint(255,this.Visiblity) ;
            rect(0,0,this.width,this.height)
             pop()
           }
           
         }
          score(){
            if(this.Visiblity < 0 && this.Visiblity> -105 ){
             score++ ;
            }
        
          }
        }
       
    


