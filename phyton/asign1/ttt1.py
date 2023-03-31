import random

# initialize the board
board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

# function to print the board
def print_board():
    print(f"{board[0]} | {board[1]} | {board[2]}")
    print("-" * 9)
    print(f"{board[3]} | {board[4]} | {board[5]}")
    print("-" * 9)
    print(f"{board[6]} | {board[7]} | {board[8]}")

# function to check if a player has won
def check_win(player):
    return ((board[0] == player and board[1] == player and board[2] == player) or
            (board[3] == player and board[4] == player and board[5] == player) or
            (board[6] == player and board[7] == player and board[8] == player) or
            (board[0] == player and board[3] == player and board[6] == player) or
            (board[1] == player and board[4] == player and board[7] == player) or
            (board[2] == player and board[5] == player and board[8] == player) or
            (board[0] == player and board[4] == player and board[8] == player) or
            (board[2] == player and board[4] == player and board[6] == player))

# function to check if the board is full
def check_board_full():
    return " " not in board

# function to get the user's move
def get_move(player):
    while True:
        move = input(f"{player}, enter your move (1-9): ")
        if move.isdigit() and 1 <= int(move) <= 9 and board[int(move)-1] == " ":
            return int(move) - 1
        else:
            print("Invalid move. Please try again.")

# play the game
print("Welcome to Tic Tac Toe!")
print_board()
players = ["X", "O"]
random.shuffle(players)
turn = 0
while True:
    player = players[turn]
    move = get_move(player)
    board[move] = player
    print_board()
    if check_win(player):
        print(f"{player} wins!")
        break
    elif check_board_full():
        print("It's a tie!")
        break
    turn = (turn + 1) % 2
