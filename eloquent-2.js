var hash = "#";

for (var i=1; i<8; i++){

  console.log(hash);
  hash += "#"
};

for (var number=0; number<101;number++)
{
  if(number%5 == 0 && number%3 == 0)
  {
    console.log("FizzBuzz");
  }
  else if (number%5 == 0)
  {
    console.log("Buzz");
  }
  else if (number%3 == 0)
  {
    console.log("Fizz");
  }
  else
  {
    console.log(number);
  }
}









var size = 8;
var board = "";
var linecount = 1;

function chessboard(size)
{



while ( linecount <= size )
{

if (linecount % 2 == 0)
{
  for (var square = 1; square <= size ; square++)
  {
    if (square % 2 == 0)
    {
      board += " ";
    }
    else {
      board +="#";
    }

  }
  console.log(board);
  linecount++;
  board="";
}

else
{
  for (var square = 1; square <= size ; square++)
  {
    if (square % 2 == 0)
    {
      board += "#";
    }
    else {
      board +=" ";
    }

  }
  console.log(board);
  linecount++;
  board = "";
}




}
}
chessboard(8);
