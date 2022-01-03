
let ans = "";
	
	// Loop to iterate over the
	// Binary Strings
	for (let i = 0; i < n; i++)
	{
		// If the Character matches
		if (a[i] == b[i])
			ans += "0";
		else
			ans += "1";
	}
	return ans;

// Driver Code
	let a = "1010";
	let b = "1101";
	let n = a.length;
	let c = xoring(a, b, n);
	document.write(c);


