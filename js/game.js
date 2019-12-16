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

            $("#resetButton").click((e) => this.reset(e));

            }
        
    
        // cette fonction va nous permettre de mettre la grille à 0
        generate_grid() {
            for (let h = 0; h < this.grid_dimension.y; h++) {
                this.grid[h] = [];
                for (let l = 0; l < this.grid_dimension.x; l++) {
                    this.grid[h][l] = 0;
                }
            }
        }

        // cette fonction va nous permettre de déterminer ce qui est déclenché au clic
        handle_click(e){
            let x = parseFloat($(e.target).parent().get(0).tagName === 'TD'
                                    ? $(e.target).parent().attr('data-col')
                                    : $(e.target).attr('data-col')
                                );
            let y = this.check_last_index(x);

            if (y >= 0){
                this.grid[y][x] = this.turn;

                this.add_token(y, x);

                this.win(y, x, this.turn === 1 ? 2 : 1 );

             } else {
                alert("Cette colonne est remplie!")
             }            

        }

        // cette fonction va nous permettre d'aller chercher la dernière case vide dans la colonne cliquée
        check_last_index(x){
            for (let h= this.grid_dimension.y - 1; h >= 0; h--){
                    if(this.grid[h][x] === 0){
                        return h;
                        
                    }
                }
        }

        // cette fonction va nous permettre d'ajouter le jeton 
        add_token(y, x){
            if (this.turn === this.player_one){
                $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/pacicon.png").attr("class", "jeton");
                this.turn = this.player_two;
                this.count_turn ++;
                } else {
                    $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/ghosticon.png").attr("class", "jeton");
                    this.turn = this.player_one;
                    this.count_turn ++;
                    }
        }

        // cette fonction va nous permettre de vérifier si un joueur a gagné
        win(y, x, player){

        // Check horizontal
            let count = 0;
            for (let l = 0; l < this.grid_dimension.x; l++) {
                count = (this.grid[y][l] == player) ? count+1 : 0;
                if (count >= 4) {
                    this.winner = player;
                    setTimeout(()=> {
                        alert("le joueur " + this.winner + " a gagné");
                    }, 50)
                    return true;
                }
            }

        // Check vertical
            count = 0;
            for (let h = 0; h < this.grid_dimension.y; h++) {
                count = (this.grid[h][x] == player) ? count+1 : 0;
                if (count >= 4) {
                    this.winner = player;
                    setTimeout(()=> {
                        alert("le joueur " + this.winner + " a gagné");
                    }, 50)
                    return true;
                }
            }

        // Check diagonale
            count = 0;
            let shift = y - x;
            for (let i = Math.max(shift, 0); i < Math.min(this.grid_dimension.y, this.grid_dimension.x + shift); i++) {
            count = (this.grid[i][i - shift] == player) ? count+1 : 0;
                if (count >= 4) {
                    this.winner = player;
                    setTimeout(()=> {
                        alert("le joueur " + this.winner + " a gagné");
                    }, 50)
                    return true;
                }
            }
        
        // Check anti - diagonal
            count = 0;
            let second_shift = y + x;
            for (let i = Math.max(second_shift - this.grid_dimension.x + 1, 0); i < Math.min(this.grid_dimension.y, second_shift + 1); i++) {
            count = (this.grid[i][second_shift - i] == player) ? count+1 : 0;
                if (count >= 4){
                    this.winner = player;
                    setTimeout(()=> {
                        alert("le joueur " + this.winner + " a gagné");
                    }, 50)
                    return true;
                }
            }
            return false;
        }
    
        reset(){
            this.generate_grid(); 
            this.turn = 1;
            this.count_turn = 0;
            this.winner = null;
            $("img").attr("src", "./img/target.png").attr("class", "none");
        }

    }

    var game1 = new Puissance4()
    console.log(game1); 

});

