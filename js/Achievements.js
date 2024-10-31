document.getElementById('back').addEventListener('click', function() {
    window.location.href = "portfolio.html"; 
});

document.getElementById('next').addEventListener('click', function() {
    window.location.href = "contact.html"; 
});

document.getElementById('letsTalk').addEventListener('click', function() {
    alert('Suresh will be online from 9 PM IST to 9:45 PM IST. Kindly join during that time!');

    const iframe = document.createElement('iframe');
    iframe.src = 'https://hack.chat/?Suresh-Sherikar'; 
    iframe.style.width = '300px'; 
    iframe.style.height = '400px'; 
    iframe.style.border = 'none'; 
    iframe.style.position = 'fixed'; 
    iframe.style.top = '50%';
    iframe.style.left = '50%'; 
    iframe.style.transform = 'translate(-50%, -50%)';
    iframe.style.zIndex = '1000'; 

    const closeButton = document.createElement('button');
    closeButton.innerText = 'Close';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px'; 
    closeButton.style.right = '10px'; 
    closeButton.style.zIndex = '1001'; 
    closeButton.onclick = function() {
        document.body.removeChild(iframe); 
        document.body.removeChild(closeButton);
    };

    document.body.appendChild(iframe);
    document.body.appendChild(closeButton);
});
