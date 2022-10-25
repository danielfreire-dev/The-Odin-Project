# Create users (check)
## ask for names (check)
## Greet users (check)
### ask for input
#### print current board


# Create 3 lines with 3 empty spaces
## Create different identities for each of the 9 empty spaces
### print input
#### Create a counter to determine if they are in a row, and how many they are
##### if counter == 3 => PLAYER WINS
##### if no player can achieve counter == 3 => TIE

#Create users & greet them
puts "PLAYER 1: What is your username?"
player1 = gets.chomp.upcase
puts "You are X"

puts "PLAYER 2: What is your username?"
player2 = gets.chomp.upcase
puts "You are O"


puts "Welcome #{player1} and #{player2}. May the best player win!"

#Create battlefield
one = "1"
two = "2"
three = "3"
four = "4"
five = "5"
six = "6"
seven = "7"
eight = "8"
nine = "9"


def battlefield(one, two, three, four, five, six, seven, eigh, nine)

  puts "#{one}|#{two}|#{three}\n#{four}|#{five}|#{six}\n#{seven}|#{eigh}|#{nine}\n"
end

def counter
  if [one, two, three] == "X" or [four, five, six] == "X" or [seven, eight, nine] == "X" or [one, four, seven] == "X" or [two, five, eight] == "X" or [three, six, nine] == "X" or [one, five, nine] == "X" or [three, five, seven] == "X"
    puts "#{player1} wins!"
  elsif [one, two, three] == "O" or [four, five, six] == "O" or [seven, eight, nine] == "O" or [one, four, seven] == "O" or [two, five, eight] == "O" or [three, six, nine] == "O" or [one, five, nine] == "O" or [three, five, seven] == "O"

    puts "#{player2} wins!"
  else

end
#Ask Players for move


def askMove (P1, P2)
  puts "#{player1} what's your move?"
  p1Move = gets
  if p1Move == 1
    one == "X"
  elsif p1Move == 2
    2 == "X"
  elsif p1Move == 3
    3 == "X"
  elsif p1Move == 4
    4 == "X"
  elsif p1Move == 5
    5 == "X"
  elsif p1Move == 6
    6 == "X"
  elsif p1Move == 7
    7 == "X"
  elsif p1Move == 8
    8 == "X"
  elsif p1Move == 9
    9 == "X"
  else
    puts "You must choose an integer between 1-9"
  end
  puts "#{player2} what's your move?"
  p2Move = gets
  if p2Move == 1
    1 == "O"
  elsif p2Move == 2
    2 == "O"
  elsif p2Move == 3
    3 == "O"
  elsif p2Move == 4
    4 == "O"
  elsif p2Move == 5
    5 == "O"
  elsif p2Move == 6
    6 == "O"
  elsif p2Move == 7
    7 == "O"
  elsif p2Move == 8
    8 == "O"
  elsif p2Move == 9
    9 == "O"
  else
    puts "You must choose an integer between 1-9"
  end
end


