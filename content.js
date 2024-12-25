chrome.storage.local.get('userData', ({ userData }) => {
    if (userData) {
      const inputs = document.querySelectorAll('input');
      inputs.forEach(input => {
        if (input.type === "text" && userData.name) {
          input.value = userData.name;
        } else if (input.type === "email" && userData.email) {
          input.value = userData.email;
        } else if (input.type === "tel" && userData.phone) {
          input.value = userData.phone;
        }
      });
    }
  });
  