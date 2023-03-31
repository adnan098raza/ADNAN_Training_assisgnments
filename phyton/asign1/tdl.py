# To-Do List App

tasks = []  # Initialize an empty list to store tasks

def display_menu():
    print("___________________________________")
    print("1. Add task")
    print("2. View tasks")
    print("3. Mark task as complete")
    print("4. Remove task")
    print("5. Edit task")
    print("6. Exit")

def add_task():
    task = input("Enter a new task: ")
    tasks.append(task)
    print("Task added successfully!")
    print("___________________________________")

def view_tasks():
    if not tasks:
        print("No tasks to display.")
    else:
        print("List of tasks:")
        for i, task in enumerate(tasks):
            print(f"{i+1}. {task}")
    print("___________________________________")

def mark_task_complete():
    task = input("Enter the task to mark as complete: ")
    if task in tasks:
        tasks.remove(task)
        print("Task marked as complete.")
    else:
        print("Task not found in list.")
    print("___________________________________")    

def remove_task():
    task = input("Enter the task to remove: ")
    if task in tasks:
        tasks.remove(task)
        print("Task removed successfully.")
    else:
        print("Task not found in list.")
    print("___________________________________")    

def edit_task():
    task = input("Enter the task to edit: ")
    if task in tasks:
        index = tasks.index(task)
        new_task = input("Enter the new task: ")
        tasks[index] = new_task
        print("Task edited successfully.")
    else:
        print("Task not found in list.")
    print("___________________________________")    

# Main program loop
while True:
    display_menu()
    print("___________________________________")
    choice = input("Enter your choice (1-6): ")
    print("___________________________________")
    if choice == '1':
        add_task()
    elif choice == '2':
        view_tasks()
    elif choice == '3':
        mark_task_complete()
    elif choice == '4':
        remove_task()
    elif choice == '5':
        edit_task()
    elif choice == '6':
        print("Exiting program...")
        break
    else:
        print("Invalid choice. Please try again.")
