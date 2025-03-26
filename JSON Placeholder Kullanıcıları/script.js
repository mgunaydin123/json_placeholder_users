(async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        const userCardsContainer = document.getElementById('user-cards-container');

        users.forEach(user => {
            const card = document.createElement('div');
            card.classList.add('user-card');

            const basicInfo = `
                <div class="card-section">
                    <h3 class="section-title"><i class="fa fa-user"></i> Temel Bilgiler</h3>
                    <p><strong>ID:</strong> ${user.id}</p>
                    <p><strong>Adı:</strong> ${user.name}</p>
                    <p><strong>Kullanıcı Adı:</strong> ${user.username}</p>
                </div>
            `;

            const addressInfo = `
                <div class="card-section address-info">
                    <h3 class="section-title"><i class="fa fa-location-dot"></i> Adres Bilgileri</h3>
                    <p><strong>Sokak:</strong> ${user.address.street}</p>
                    <p><strong>Apartman:</strong> ${user.address.suite}</p>
                    <p><strong>Şehir:</strong> ${user.address.city}</p>
                    <p><strong>Posta Kodu:</strong> ${user.address.zipcode}</p>
                    <p><strong>Koordinatlar:</strong> ${user.address.geo.lat}, ${user.address.geo.lng}</p>
                </div>
            `;

            const companyInfo = `
                <div class="card-section company-info">
                    <h3 class="section-title"><i class="fa fa-building"></i> Şirket Bilgileri</h3>
                    <p><strong>Adı:</strong> ${user.company.name}</p>
                    <p><strong>Slogan:</strong> ${user.company.catchPhrase}</p>
                    <p><strong>BS:</strong> ${user.company.bs}</p>
                </div>
            `;

            const contactInfo = `
                <div class="card-section">
                    <h3 class="section-title"><i class="fa fa-envelope"></i> İletişim Bilgileri</h3>
                    <p><strong>E-posta:</strong> ${user.email}</p>
                    <p><strong>Telefon:</strong> ${user.phone}</p>
                    <p><strong>Web Sitesi:</strong> <a href="https://${user.website}" target="_blank">${user.website}</a></p>
                </div>
            `;

            card.innerHTML = basicInfo + addressInfo + companyInfo + contactInfo;
            userCardsContainer.appendChild(card);
        });

    } catch (error) {
        console.error("Veri çekilirken bir hata oluştu:", error);
        const userCardsContainer = document.getElementById('user-cards-container');
        userCardsContainer.innerHTML = '<p style="color: red;">Kullanıcı verileri yüklenirken bir hata oluştu.</p>';
    }
})();