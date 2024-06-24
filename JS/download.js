document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM fully loaded and parsed");

    const downloadBtnIndex = document.getElementById('downloadBtnIndex');
    const downloadBtn1 = document.getElementById('downloadBtn1');
    const downloadBtn2 = document.getElementById('downloadBtn2');

    if (downloadBtnIndex) {
        downloadBtnIndex.addEventListener('click', function() {
            console.log("Download button Index clicked");
            downloadZip('../WSOA3028A_2306258/portfolio/other/UNII Pitch Deck.pdf', 'UNII App Pitch Deck.pdf');
        });
    } else {
        console.log("Button with ID 'downloadBtnIndex' not found");
    }

    if (downloadBtn1) {
        downloadBtn1.addEventListener('click', function() {
            console.log("Download button 1 clicked");
            downloadZip('../WSOA3028A_2306258/portfolio/games/Sushi Go.zip', 'Sushi Go.zip');
        });
    } else {
        console.log("Button with ID 'downloadBtn1' not found");
    }

    if (downloadBtn2) {
        downloadBtn2.addEventListener('click', function() {
            console.log("Download button 2 clicked");
            downloadZip('../portfolio/games/Resource game.zip', 'Resource game.zip');
        });
    } else {
        console.log("Button with ID 'downloadBtn2' not found");
    }
});

async function downloadZip(zipUrl, filename) {
    try {
        console.log("Fetching zip file from:", zipUrl);
        const response = await fetch(zipUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const blob = await response.blob();

        // Create a link element
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;

        // Programmatically click the link to trigger the download
        document.body.appendChild(link);
        link.click();

        // Clean up and revoke the object URL
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
        console.log("Download initiated for:", filename);
    } catch (error) {
        console.error('There was an error with the fetch operation:', error);
    }
}