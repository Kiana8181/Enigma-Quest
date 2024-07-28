import ms from "ms";

export default [
  {
    id: 0,
    name: "Mission 0 : Training Mission",
    time: ms("10m"),
    totalPhase: 3,
    phases: [
      {
        id: 1,
        question:
          "During your mission, you find a series of numbered crates that follow a pattern: 3, 6, 12, 24, 48, ?, 192, 384. To unlock the next checkpoint, you need to identify the missing number in the sequence. Once found, repeat this number five times to form a 5-digit code that will grant you access.",
        answer: "96969",
        lock: true,
      },
      {
        id: 2,
        question:
          'On your training mission, you discover a note with a riddle: "I am a 5-digit number. My tens digit is 2 more than my units digit. My thousands digit is twice my units digit. My tens of thousands digit is 3 more than my units digit. The sum of all my digits is 20." Solve the riddle to find the 5-digit number and proceed to the next stage of your mission.',
        answer: "86421",
        lock: true,
      },
      {
        id: 3,
        question:
          "In a secure facility, you find a locked safe with a keypad. The code to unlock it is a 5-digit prime number. The digits of this number add up to 23, and the number itself is a palindrome, meaning it reads the same forwards and backwards. Each digit in this number is unique. Enter the correct 5-digit prime number to open the safe and complete your mission.",
        answer: "94149",
        lock: true,
      },
    ],
  },

  {
    id: 1,
    name: "Mission 1 : Station",
    time: ms("10m"),
    totalPhase: 5,
    phases: [
      {
        id: 1,
        question:
          "As part of your mission at the station, you come across a sequence of numbers left by an agent: 5, 10, 20, 40, 80, ?, 320, 640. To progress, determine the missing number in the sequence. The 5-digit code to continue will be formed by repeating this number five times.",
        answer: "160160",
        lock: true,
      },
      {
        id: 2,
        question:
          'While exploring the station, you find a coded message. It reads: "I am a 5-digit number. My units digit is 3 less than my tens digit. My hundreds digit is 1 more than my units digit. My thousands digit is twice my units digit. The sum of all my digits is 24." Decode this message to discover the 5-digit number and proceed with your mission.',
        answer: "75318",
        lock: true,
      },
      {
        id: 3,
        question:
          "In a restricted area of the station, you encounter a locked door with a numeric keypad. The code is a 5-digit number where each digit is unique. The sum of the digits is 30, and the number is a palindrome. Enter the correct 5-digit code to unlock the door and complete your mission.",
        answer: "98689",
        lock: true,
      },
    ],
  },

  {
    id: 2,
    name: "Mission 2 : Terminal",
    time: ms("15m"),
    totalPhase: 5,
    phases: [
      {
        id: 1,
        question:
          "At the terminal, you find a sequence of numbers on a screen: 7, 14, 28, 56, ?, 224, 448. To move forward, determine the missing number in the sequence. The 5-digit code to proceed is made by repeating this number five times.",
        answer: "11211",
        lock: true,
      },
      {
        id: 2,
        question:
          'During your mission at the terminal, you find a riddle on a piece of paper: "I am a 5-digit number. My tens digit is 4 less than my units digit. My hundreds digit is twice my units digit. My thousands digit is 3 more than my units digit. The sum of all my digits is 21." Solve the riddle to find the 5-digit number and proceed.',
        answer: "86432",
        lock: true,
      },
      {
        id: 3,
        question:
          'At a terminal console, you receive the following clue: "I am a 5-digit number. My units digit is 2 more than my tens digit. My hundreds digit is 3 less than my tens digit. My thousands digit is 2 more than my hundreds digit. The sum of all my digits is 22." Decode this message to find the 5-digit number and continue your mission.',
        answer: "76432",
        lock: true,
      },
      {
        id: 4,
        question:
          "In a hidden part of the terminal, you encounter a locked terminal with a numeric keypad. The code is a 5-digit number where each digit is different. The sum of the digits is 29, and the number is a palindrome. Enter the correct 5-digit code to unlock the terminal and complete your mission.",
        answer: "98489",
        lock: true,
      },
      {
        id: 5,
        question:
          "In a highly secured area of the terminal, you find a complex puzzle. The code to unlock the area is a 5-digit prime number. The digits of this number add up to 17. Each digit of the number is different, and the number is not a palindrome. Enter the correct 5-digit prime number to proceed.",
        answer: "53929",
        lock: true,
      },
    ],
  },

  {
    id: 3,
    name: "Mission 3 : Elevator",
    time: ms("20m"),
    totalPhase: 5,
    phases: [
      {
        id: 1,
        question:
          "While waiting for the elevator, you see a series of numbers scrolling on a screen: 9, 18, 36, 72, ?, 288, 576. To activate the elevator, identify the missing number in the sequence. The 5-digit code is formed by repeating this number five times.",
        answer: "14414",
        lock: true,
      },
      {
        id: 2,
        question:
          'In the elevator, you find a note with a riddle: "I am a 5-digit number. My tens digit is 1 more than my units digit. My hundreds digit is 3 less than my tens digit. My thousands digit is 2 more than my hundreds digit. The sum of all my digits is 26." Solve the riddle to find the 5-digit number and proceed to the next floor.',
        answer: "86342",
        lock: true,
      },
      {
        id: 3,
        question:
          "Inside the elevator, you discover a panel with a numeric keypad. The code is a 5-digit number where each digit is unique. The sum of the digits is 28, and the number is a palindrome. Enter the correct 5-digit code to unlock the elevator controls and proceed.",
        answer: "97479",
        lock: true,
      },
      {
        id: 4,
        question:
          "In the elevator, you come across a hidden compartment. To open it, you need to enter a 5-digit prime number. The sum of the digits of this prime number is 23, and no digit repeats. Find the correct 5-digit prime number to reveal the contents of the compartment.",
        answer: "76343",
        lock: true,
      },
      {
        id: 5,
        question:
          'As you ascend in the elevator, you receive a cryptic message: "I am a 5-digit number. My tens digit is 2 less than my units digit. My hundreds digit is 1 more than my tens digit. My thousands digit is 3 more than my hundreds digit. The sum of all my digits is 27." Decode this message to find the 5-digit number and complete your mission.',
        answer: "79348",
        lock: true,
      },
    ],
  },

  {
    id: 4,
    name: "Mission 4 : Rollercoaster",
    time: ms("20m"),
    totalPhase: 5,
    phases: [
      {
        id: 1,
        question:
          "As you prepare to board the rollercoaster, you notice a sequence of numbers on a sign: 11, 22, 44, 88, ?, 352, 704. To access the ride, determine the missing number in the sequence. The 5-digit code is formed by repeating this number five times.",
        answer: "17617",
        lock: true,
      },
      {
        id: 2,
        question:
          'Before you can enter the rollercoaster, you find a riddle: "I am a 5-digit number. My tens digit is 3 less than my units digit. My hundreds digit is 2 more than my tens digit. My thousands digit is twice my units digit. The sum of all my digits is 24." Solve the riddle to find the 5-digit number and proceed.',
        answer: "48635",
        lock: true,
      },
      {
        id: 3,
        question:
          "As you approach the rollercoaster, you encounter a control panel with a numeric keypad. The code is a 5-digit number where each digit is unique. The sum of the digits is 27, and the number is a palindrome. Enter the correct 5-digit code to unlock the control panel.",
        answer: "98489",
        lock: true,
      },
      {
        id: 4,
        question:
          "In a restricted section near the rollercoaster, you find a clue. The code to unlock the section is a 5-digit prime number. The sum of the digits of this prime number is 23, and no digit repeats. Find the correct 5-digit prime number to gain access.",
        answer: "76423",
        lock: true,
      },
      {
        id: 5,
        question:
          'As you wait for the rollercoaster, you see a complex puzzle on a screen: "I am a 5-digit number. My tens digit is 1 less than my units digit. My hundreds digit is 2 more than my tens digit. My thousands digit is 3 less than my hundreds digit. The sum of all my digits is 25." Decode this message to find the 5-digit number and complete your mission.',
        answer: "58241",
        lock: true,
      },
    ],
  },

  {
    id: 5,
    name: "Mission 5 : Subway",
    time: ms("25m"),
    totalPhase: 5,
    phases: [
      {
        id: 1,
        question:
          "While navigating the subway, you come across a sequence of numbers displayed on a screen: 13, 26, 52, 104, ?, 416, 832. To continue, identify the missing number in the sequence. The 5-digit code is formed by repeating this number five times.",
        answer: "20820",
        lock: true,
      },
      {
        id: 2,
        question:
          'As you wait for the subway, you find a piece of paper with a riddle: "I am a 5-digit number. My tens digit is 1 less than my units digit. My hundreds digit is 2 more than my tens digit. My thousands digit is 3 more than my hundreds digit. The sum of all my digits is 30." Solve the riddle to find the 5-digit number and proceed.',
        answer: "86421",
        lock: true,
      },
      {
        id: 3,
        question:
          'In the subway control room, you encounter a numeric keypad with a clue: "The code is a 5-digit number where each digit is unique. The sum of the digits is 30, and the number is a palindrome." Enter the correct 5-digit code to unlock the control room.',
        answer: "98689",
        lock: true,
      },
      {
        id: 4,
        question:
          'In a secret compartment of the subway, you find a complex challenge: "The code is a 5-digit prime number. The sum of the digits of this prime number is 25, and no digit repeats. Find the correct 5-digit prime number to unlock the compartment."',
        answer: "73951",
        lock: true,
      },
      {
        id: 5,
        question:
          'As you navigate the subway, you receive a cryptic message: "I am a 5-digit number. My tens digit is twice my units digit. My hundreds digit is 1 more than my tens digit. My thousands digit is 3 less than my hundreds digit. My tens of thousands digit is twice my thousands digit. The sum of all my digits is 33." Decode this message to find the 5-digit number and complete your mission.',
        answer: "68274",
        lock: true,
      },
    ],
  },
];
