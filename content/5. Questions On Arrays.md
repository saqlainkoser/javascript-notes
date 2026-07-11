# 🧑‍🎓 Story 1: Classroom Seating

A teacher maintains a seating list of students.

let students = ["Aman", "Riya", "Karan", "Neha"];

📝 Tasks:

1. A new student “Rahul” joins and must sit at index 2.

2. “Karan” leaves the class.
3. “Riya” is replaced by “Pooja”.

👉 Use splice() for each task.

["Aman","Pooja","Rahul","Neha"]

# 🍕 Story 2: Pizza Orders

A pizza shop stores toppings in an array.

let toppings = ["Cheese", "Olives", "Capsicum", "Onion"];

📝 Tasks:

1. Add “Mushroom” between Olives and Capsicum.
2. Remove “Onion” from the list.
3. Replace “Capsicum” with “Jalapeno”.


# Train Reservation System (Array Operations)

📖 Problem Statement

You are developing a Train Reservation System where all seat bookings are managed using a single array.

The order of elements in the array represents the seat order in the train.

You must perform all operations in sequence, and each operation must update the same array.

🚆 Initial Seat Layout

The train initially has the following seats booked:

["S1", "S2", "S3", "S4", "S5", "S6"]

## 🧩 Tasks to Perform

Task 1: VIP Booking

	Two VIP passengers, VIP-A and VIP-B, must be seated immediately after seat S2.

Task 2: Cancellation

	Passenger S4 cancels their ticket and must be removed from the seat list.

Task 3: Emergency Quota

	Due to an emergency, two emergency passengers (EM-1 and EM-2) must be accommodated by replacing VIP-B and S3.

Task 4: Group Booking

	A family of three members (F1, F2, F3) books tickets together and must be seated starting from index 2, shifting existing passengers forward.

Task 5: Overbooking Rule

	Railway rules allow only 8 passengers in the coach.
	If the seat list exceeds this limit, remove extra passengers from the end.
	seats.length = 8

Task 6: Last-Minute Change

	Passenger F2 cancels their ticket and is replaced by a waiting-list passenger     WAIT-1 at the same position.

✅ Final Requirement

After completing all tasks:

- The array must reflect the final seating order
- All operations must be performed using array manipulation techniques
- The original array must be modified directly

📝 Note

- Maintain correct index positions carefully
- Perform tasks strictly in order
- Skipping or reordering steps may lead to incorrect results