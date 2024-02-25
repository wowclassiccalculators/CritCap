function calculateCritcap() {
    const pMiss = parseFloat(document.getElementById('miss').value);
    const pDodge = parseFloat(document.getElementById('dodge').value);
    const pBlock = parseFloat(document.getElementById('block').value);
    const pParry = parseFloat(document.getElementById('parry').value);
    const pGlance = parseFloat(document.getElementById('glance').value);
    const critSup = parseFloat(document.getElementById('critSup').value);
    
    const critcap = 100 - pMiss - pDodge - pBlock - pParry - pGlance + critSup;
    document.getElementById('result').innerText = `Critcap: ${critcap.toFixed(2)}`;
}
