document.getElementById('userForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    await chrome.storage.local.set({ userData: { name, email, phone } });
    document.getElementById('status').textContent = "Data saved successfully!";
  });
  