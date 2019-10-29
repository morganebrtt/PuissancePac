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
    
            $("td").click(function(e) {
                // ici la logique de mon jeu (au click sur la grille de jeu)
            });
        }
    
        generate_grid() {
            for (let h = 0; h < this.grid_dimension.y; h++) {
                this.grid[h] = [];
                for (let l = 0; l < this.grid_dimension.x; l++) {
                    this.grid[h][l] = 0;
                }
            }
        }

        
    
    }
    
    var game1 = new Puissance4()
});