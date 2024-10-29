    function filterNames() {
      const input = document.getElementById('searchBar');
      const filter = input.value.toLowerCase();
      const ol = document.getElementById('usernamesList');
      const li = ol.getElementsByTagName('li');

      for (let i = 0; i < li.length; i++) {
        const a = li[i].getElementsByTagName('a')[0];
        const textValue = a.textContent || a.innerText;
        if (textValue.toLowerCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    }

 function sortNames(order) {
      const ol = document.getElementById('usernamesList');
      const li = Array.from(ol.getElementsByTagName('li'));

      // Sort the li elements based on the text content
      li.sort(function(a, b) {
        const nameA = a.textContent.toLowerCase();
        const nameB = b.textContent.toLowerCase();
        if (order === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });

      // Clear the existing list
      ol.innerHTML = '';

      // Append the sorted list items
      li.forEach(function(item) {
        ol.appendChild(item);
      });
    }

    function sortNamesDropdown() {
      const dropdown = document.getElementById('sortDropdown');
      const selectedValue = dropdown.value;
      sortNames(selectedValue);
    }