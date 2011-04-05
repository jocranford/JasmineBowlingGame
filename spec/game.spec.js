describe("A bowling game should calculate the score", function() {

    it("should score zero when no pins are knocked down", function() {

        var game = bowlingGame(10);
        game.roll(0);

        expect(game.score()).toBe(0);

    });

    it("should add the total pins after multiple rolls", function() {

        var game = bowlingGame(10);
        game.roll(1);
        game.roll(3);

        expect(game.score()).toBe(4);

    });

    it("should calculate the score for a spare to include the bonus of the next roll", function() {

        var game = bowlingGame(10);
        game.roll(9);
        game.roll(1);
        game.roll(5);

        expect(game.score()).toBe(20);
    });


});