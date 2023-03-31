import random

# initialize the list of questions
questions = []

# function to append a new question to the list
def add_question():
    question = input("Enter a new question: ")
    answer = input("Enter the answer to the question: ")
    options = input("Enter the answer options separated by commas: ").split(",")
    questions.append((question, answer, options))

# add some sample questions to the list
questions.append(("What is the capital of France?", "Paris", ["Paris", "London", "Berlin", "Madrid"]))
questions.append(("What is the largest planet in the solar system?", "Jupiter", ["Venus", "Mars", "Jupiter", "Saturn"]))

# play the quiz game
while True:
    # choose a random question from the list
    question, answer, options = random.choice(questions)

    # shuffle the answer options
    random.shuffle(options)

    # print the question and answer options
    print(question)
    for i, option in enumerate(options):
        print(f"{i+1}. {option}")

    # get the user's answer
    user_answer = input("Enter your answer: ")

    # check if the user's answer is correct
    if user_answer.isdigit() and 1 <= int(user_answer) <= len(options):
        if options[int(user_answer)-1] == answer:
            print("Correct!")
        else:
            print(f"Incorrect. The correct answer is: {answer}")
    else:
        print("Invalid input. Please enter a number between 1 and", len(options))

    # ask the user if they want to add a new question
    add_new_question = input("Do you want to add a new question? (yes/no) ")

    # if the user wants to add a new question, call the add_question() function
    if add_new_question.lower() == "yes":
        add_question()

    # ask the user if they want to play again
    play_again = input("Do you want to play again? (yes/no) ")

    # if the user doesn't want to play again, break out of the loop
    if play_again.lower() == "no":
        break
