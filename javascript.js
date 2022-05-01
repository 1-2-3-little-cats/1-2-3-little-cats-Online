function ConfirmDialog() {
			var result = confirm("Are you sure that you are ready to become a cat addict?")
			if(result) {
				alert("Good choice! Please navigate across the sections of the site below to discover more about cats.")
			} else {
				alert("Aww... Too bad. Don't hesitate to come back if you change your mind!")
			}
		}

function DateAndTime() { 
	var dt = new Date();
	document.getElementById("date-time").innerHTML=dt.toLocaleString();
}

const copyToClipboard = str => {
  if (navigator && navigator.clipboard && navigator.clipboard.writeText)
    return navigator.clipboard.writeText(str);
  return Promise.reject('The Clipboard API is not available.');
};

function CopyButton() {
	var result = confirm("Are you sure you want to copy some awesome information about cat breeds to your clipboard?")
	if(result) {
		alert("Great! Paste into another application to read a great list of cat breeds")
		copyToClipboard("Abyssinian, British Shorthair, Burmese, Cornish Rex, Devon Rex, Himalayan, Maine Coon, Manx, Persian, Russian Blue, Scottish Fold, Siamese, Sphynx, Turkish Angora, Turkish Van")
	}
	else {
		alert("How rude!")
	}
}