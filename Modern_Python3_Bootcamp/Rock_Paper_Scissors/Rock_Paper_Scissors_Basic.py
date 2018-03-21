player1 = input("Player 1\'s Choice: ")
player2 = input("Player 2\'s Choice: ")

if player1 == "rock" and player2 == "scissors" or player1 == "scissors" and player2 == "paper" or player1 == "paper" and player2 == "rock":
	print("Player 1 wins!")
elif player1 == player2:
	print("It's a tie!")
else:
	print("Player 2 wins!")