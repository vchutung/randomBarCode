// Fonction pour générer un code-barres à partir d'un texte
function generateBarcode(text, barcodeType) {
    // Vérification si l'élément 'barcode' existe et est un SVG
    var barcodeSVG = document.getElementById("barcode");
    
    if (barcodeSVG && barcodeSVG instanceof SVGElement) {
        console.log("Génération du code-barres pour : " + text + " avec type " + barcodeType);  // Débogage

        // Effacer le contenu précédent dans le SVG
        barcodeSVG.innerHTML = ''; 

        // Utiliser JsBarcode pour générer le code-barres dans l'élément SVG
        JsBarcode(barcodeSVG, text, {
            format: barcodeType,  // Utiliser le type sélectionné
            displayValue: true,  // Afficher la valeur sous le code-barres
            fontSize: 18,
            lineColor: "black",  // Optionnel: changer la couleur des lignes
            width: 2,           // Largeur des barres
            height: 80          // Hauteur des barres
        });
    } else {
        console.error("L'élément 'barcode' n'est pas un SVG ou n'a pas été trouvé.");
    }
}

// Fonction pour générer un texte aléatoire pour le code-barres
function generateRandomText() {
    // Générer un texte aléatoire (ici un numéro à 10 chiffres)
    let randomText = Math.floor(Math.random() * 10000000000); // 10 chiffres
    return randomText.toString(); // Retourner sous forme de chaîne
}

// Fonction pour récupérer le type de code-barres sélectionné
function getBarcodeType() {
    var barcodeTypeSelect = document.getElementById("barcodeType");
    return barcodeTypeSelect.value;  // Retourner la valeur du type sélectionné
}

// Mettre à jour le code-barres toutes les secondes
setInterval(function() {
    var randomText = generateRandomText();
    var barcodeType = getBarcodeType();  // Récupérer le type sélectionné
    console.log("Texte généré : " + randomText);  // Débogage
    generateBarcode(randomText, barcodeType);  // Générer un nouveau code-barres avec le type choisi
}, 1000);  // Toutes les secondes
