var myArray = ['Java', 'C', 'C++', 'Python', 'C#', 
               'Visual Basic .NET','JavaScript','PHP'];

function printList(reverse)
{
	if (reverse)
	{
		myArray.reverse();
	}
	else
	{
		myArray.sort();
	}

	for (var position in myArray)
	{
		var parent = document.getElementById("uList");
		var child = parent.children[position].innerHTML =
			myArray[position];

	}
}
