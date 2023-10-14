// First Box
function Convert1() {
	const input = document.getElementById("input1").value.trim();
	const paths = input.split("\n");
	const formattedPaths = paths.map((path, index) => {
	  if (path.trim()) {
		return index === paths.length - 1 ? `"${path}"` : `"${path}",`;
	  }
	  return path;
	}).join("");
  
	const output = "Get-AuthenticodeSignature -ErrorAction 'Continue' -FilePath " + formattedPaths + " | Select-Object @{Name='Signature Status';Expression={$_.Status}},@{Name='File Path';Expression={$_.Path}},@{Name='System File';Expression={$_.IsOSBinary}},@{Name='Subject';Expression={$_.SignerCertificate.Subject}} | Out-GridView";
	document.getElementById("output1").value = output;
  }
  
function CopyToClipboard1() {
	const output = document.getElementById("output1");
	output.select();
	document.execCommand("Copy");
  }
  
function Clear1() {
	document.getElementById("input1").value = "";
	document.getElementById("output1").value = "";
  }