document.addEventListener('DOMContentLoaded', function() {
  var tabSearchButton = document.getElementById('findTab');  //Search Button
  tabSearchButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
        searchTab = document.getElementById("tabName").value; //Gets text value from the search bar
        parsedTab = searchTab.split(" "); 
        i = 0;
        taburl = "https://www.ultimate-guitar.com/search.php?search_type=title&value="; //base url
        while (i < parsedTab.length) {  //Takes search values and adds them to url spaces are represented as %20
            taburl = taburl.concat(parsedTab[i]);
            i += 1;
            if (i < parsedTab.length) {
                taburl = taburl.concat("%20");
            }
        }
       window.open(taburl, "_blank"); //create a new tab with the taburl
    });
  }, false);
}, false);