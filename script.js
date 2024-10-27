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