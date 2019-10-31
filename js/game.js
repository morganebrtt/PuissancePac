$(document).ready(function(){
    class Puissance4 {

        constructor(grid_dimension = {x: 7, y: 6}) {
            this.grid_dimension = grid_dimension;
            this.player_one = 1;
            this.player_two = 2;
            this.turn = this.player_one;
            this.max_turn = this.grid_dimension.x * this.grid_dimension.y;
            this.count_turn = 0;
            this.winner = null;
            this.grid = [];
    
            this.generate_grid(); 

            $("td").click((e) => this.handle_click(e));

            }
        
    
        // cette fonction va nous permettre de mettre la grille à 0
        generate_grid() {
            for (let h = 0; h < this.grid_dimension.y; h++) {
                this.grid[h] = [];
                for (let l = 0; l < this.grid_dimension.x; l++) {
                    this.grid[h][l] = 0;
                }
            }
            console.log(this.grid);
        }

        // cette fonction va nous permettre de déterminer ce qui est déclenché au clic
        handle_click(e){
            //on récupère l'axe y
            let x = parseFloat($(e.target).parent().attr('data-col'));
            //on recupère l'axe x
            let y = this.check_last_index(x);

            console.log(y,x);

            this.grid[y][x] = this.turn;

            console.log(this.grid);

            this.add_token(y, x);
        }

        check_last_index(x){
            for (let h= this.grid_dimension.y - 1; h >= 0; h--){
                    if(this.grid[h][x] === 0){
                        return h;
                    }
                }
        }

        add_token(y, x){
            // alterner joueur courant (this.turn) (condition)
            // cibler/placer les jetons sur img html (mettre condition pour changer le jeton en fonction du joueur)
            // compter les tours (this.count.turn++)
            // mettre à jour notre grille en mettant 1 ou 2 en fonction du joueur this.grid[y][x]

            // attention à bien mettre === dans la condition pour que ce ne soit pas considéré comme une asignation

            if (this.turn === this.player_one){
                $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/jetonswag.png");
                this.turn = this.player_two;
                this.count_turn ++;
                } else {
                    $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/jetonalien.png");
                    this.turn = this.player_one;
                    this.count_turn ++;
                    }
            
                    console.log("compteur:" + this.count_turn);



        }

        // win(){

        // }

        // reset(){
            
        }
    var game1 = new Puissance4()
    console.log(game1);
    
    

});

