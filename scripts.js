document.addEventListener("DOMContentLoaded", function() {
    const data = {
        "2021": {
            "forestAcquisition": 2.95,
            "biodiversity": 45,
            "conservationForce": 4,
            "recycledPlastic": 85,
            "localAwareness": 40
        },
        "2022": {
            "forestAcquisition": 9.8,
            "biodiversity": 1011,
            "conservationForce": 0,
            "recycledPlastic": 1000,
            "localAwareness": 40
        },
        "2023": {
            "forestAcquisition": 9.5,
            "biodiversity": 1934,
            "conservationForce": 0,
            "recycledPlastic": 1000,
            "localAwareness": 40
        },
        "totals": {
            "forestAcquisition": 22.3,
            "biodiversity": 2990,
            "conservationForce": 4,
            "recycledPlastic": 2134,
            "localAwareness": 120
        }
    };

    // Debugging: Check if the DOM is fully loaded
    console.log("DOM fully loaded and parsed");

    // Update KPI values
    const kpiElements = document.querySelectorAll('.kpi p');
    console.log("Found KPI elements:", kpiElements);

    if (kpiElements.length >= 5) {
        kpiElements[0].textContent = `${data.totals.forestAcquisition} hectares`;
        kpiElements[1].textContent = `${data.totals.biodiversity} Species`;
        kpiElements[2].textContent = `${data.totals.conservationForce} guards`;
        kpiElements[3].textContent = `${data.totals.recycledPlastic} KG`;
        kpiElements[4].textContent = `${data.totals.localAwareness} Members`;
    } else {
        console.error("Not enough KPI elements found.");
    }

    // Initialize charts with 2021 and 2022 and 2023 data
    const ctxForest = document.getElementById('forestAcquisitionChart').getContext('2d');
    const forestChart = new Chart(ctxForest, {
        type: 'line',
        data: {
            labels: ['2021', '2022','2023'],
            datasets: [{
                label: 'Hectares',
                data: [data["2021"].forestAcquisition, data["2022"].forestAcquisition, data["2023"].forestAcquisition],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        }
    });

    const ctxBiodiversity = document.getElementById('biodiversityChart').getContext('2d');
    const biodiversityChart = new Chart(ctxBiodiversity, {
        type: 'line',
        data: {
            labels: ['2021', '2022','2023'],
            datasets: [{
                label: 'Species',
                data: [data["2021"].biodiversity, data["2022"].biodiversity, data["2023"].biodiversity],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        }
    });

    const ctxConservation = document.getElementById('conservationForceChart').getContext('2d');
    const conservationChart = new Chart(ctxConservation, {
        type: 'bar',
        data: {
            labels: ['2021', '2022','2023'],
            datasets: [{
                label: 'Guards',
                data: [data["2021"].conservationForce, data["2022"].conservationForce, data["2023"].conservationForce],
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1
            }]
        }
    });

    const ctxPlastic = document.getElementById('recycledPlasticChart').getContext('2d');
    const plasticChart = new Chart(ctxPlastic, {
        type: 'line',
        data: {
            labels: ['2021', '2022','2023'],
            datasets: [{
                label: 'KG',
                data: [data["2021"].recycledPlastic, data["2022"].recycledPlastic, data["2023"].recycledPlastic],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        }
    });

    const ctxAwareness = document.getElementById('localAwarenessChart').getContext('2d');
    const awarenessChart = new Chart(ctxAwareness, {
        type: 'line',
        data: {
            labels: ['2021', '2022','2023'],
            datasets: [{
                label: 'Members',
                data: [data["2021"].localAwareness, data["2022"].localAwareness, data["2023"].localAwareness],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }]
        }
    });
});
