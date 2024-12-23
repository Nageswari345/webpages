function toggleEdit() {
    const editSection = document.getElementById('edit-profile');
    const editButton = document.getElementById('edit-btn');
  
    
    if (editSection.style.display === 'none' || editSection.style.display === '') {
      editSection.style.display = 'block';
      editButton.textContent = 'Cancel Edit';
    } else {
      editSection.style.display = 'none';
      editButton.textContent = 'Edit Profile';
    }
  }
  
 
  document.getElementById('edit-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    
    const name = document.getElementById('edit-name').value;
    const bio = document.getElementById('edit-bio').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
  
    
    document.getElementById('name').textContent = name;
    document.getElementById('bio').textContent = bio;
    document.getElementById('email').textContent = email;
    document.getElementById('phone').textContent = phone;
  
    
    document.getElementById('edit-profile').style.display = 'none';
    document.getElementById('edit-btn').textContent = 'Edit Profile';
  });
  
 
  document.getElementById('change-picture-btn').addEventListener('click', function () {
    const newPicture = prompt('Enter a URL for your new profile picture:');
    if (newPicture) {
      document.getElementById('profile-picture').src = newPicture;
    }
  });
  


