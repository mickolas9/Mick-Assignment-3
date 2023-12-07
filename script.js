$(document).ready(function () {

    
    const artPieces = [
        "The Last Supper (Leonardo Da Vinci, 1490s).jpeg",
        "The Son of Man (Renee Magritte, 1964).jpeg",
        "Vitruvian Man (Leonardo DaVinci, 1490).jpeg",
        "Cafe Terrace at Night (Vincent van Gogh, 1888).jpeg",
        "Nighthawks (Edward Hopper, 1942).jpeg",
        "Sistine Madonna (The Two Cherubs, Raphael, 1513-1514).jpeg",
        "Campbell Soup Cans (Andy Warhol, 1961-1962).jpeg",
        "Washington Crossing the Delaware (Emanuel Leutze, 1851).jpeg",
        "The Persistence of Memory (Salvador Dali, 1931).jpeg",
        "Dogs Playing Poker (Cassius Marcellus Coolidge, 1894).jpeg",
        "Water Lilies (Claude Monet, 1897-1926)  .jpeg",
        "Las Meninas (Diego Velazquez 1656)  .jpeg",
        "Guernica (Pablo Picasso, 1937).jpeg",
        "American Gothic (Grant Wood, 1930).jpeg",
        "The Creation of Adam (Michelangelo, 1508-1512).jpeg",
        "Girl with a Pearl Earring (Johannes Vermeer, 1665).jpeg",
        "No 5 (Jackson Pollack, 1948).jpeg",
        "The Starry Night (Vincent Van Gogh, 1889).jpeg",
        "The Birth of Venus (Sandro Botticelli, 1480s).jpeg",
        "Relativity (M.C. Escher, 1953).png",
        "Madame X (Madame Pierre Gautreau) (John Singer Sargent, 1183-1884).jpeg",
        "The Scream (Edvard Munch, 1893).jpeg",
        "The Mona Lisa (Leonardo Da Vinci, c 1506).jpeg",
        "A Sunday Afternoon on the Island of La Grande Jatte (Georges Seurat, 1884-1886).png",
        "Nymphs and Satyr (William-Adolphe Bouguereau, 1873).jpeg"
    ];
  

    const frameImages = [
        "frame1.png", "frame2.png", "frame3.png", "frame4.png", "frame5.png",
        "frame6.png", "frame7.png", "frame8.png", "frame9.png", "frame10.png",
        "frame11.png", "frame12.png", "frame13.png", "frame14.png", "frame15.png",
        "frame16.png", "frame17.png", "frame18.png", "frame19.png", "frame20.png",
        "frame21.png", "frame22.png", "frame23.png", "frame24.png", "frame25.png"
    ];
    let frameImagePath = "Frames/image.png";

    const artDescriptions = [
        "Leonardo da Vinci's The Last Supper, a renowned masterpiece showcasing a dramatic religious scene.",
        "The Son of Man by Renee Magritte, a famous surrealist piece symbolizing hidden identities.",
        "Vitruvian Man by Leonardo DaVinci, a drawing that beautifully encapsulates the blend of art and science.",
        "Cafe Terrace at Night by Vincent van Gogh, depicting a vibrant, starlit café scene.",
        "Nighthawks by Edward Hopper, an iconic portrayal of urban solitude in a late-night diner.",
        "Sistine Madonna by Raphael, famous for its two cherubs at the bottom of the painting.",
        "Campbell Soup Cans by Andy Warhol, a significant work in the pop art movement.",
        "Washington Crossing the Delaware by Emanuel Leutze, a classic American historical painting.",
        "The Persistence of Memory by Salvador Dali, known for its melting clocks and dreamlike atmosphere.",
        "Dogs Playing Poker by Cassius Marcellus Coolidge, a whimsical painting blending humor with art.",
        "Water Lilies by Claude Monet, a series that captures the beauty of his garden at Giverny.",
        "Las Meninas by Diego Velazquez, a complex and enigmatic painting exploring illusion and reality.",
        "Guernica by Pablo Picasso, a powerful anti-war statement and a pinnacle of modern art.",
        "American Gothic by Grant Wood, an iconic depiction of rural American life.",
        "The Creation of Adam by Michelangelo, an iconic image from the Sistine Chapel ceiling.",
        "Girl with a Pearl Earring by Johannes Vermeer, often referred to as the ‘Mona Lisa of the North’.",
        "No. 5 by Jackson Pollock, a prime example of abstract expressionism.",
        "The Starry Night by Vincent Van Gogh, one of the most recognized paintings in Western art.",
        "The Birth of Venus by Sandro Botticelli, depicting the goddess Venus emerging from the sea.",
        "Relativity by M.C. Escher, a lithograph print that plays with architecture and perspective.",
        "Madame X by John Singer Sargent, known for its controversial portrayal of American socialite Virginie Amélie Avegno Gautreau.",
        "The Scream by Edvard Munch, an emblematic painting representing existential angst.",
        "The Mona Lisa by Leonardo Da Vinci, arguably the most famous painting in the world.",
        "A Sunday Afternoon on the Island of La Grande Jatte by Georges Seurat, a leading example of pointillism.",
        "Nymphs and Satyr by William-Adolphe Bouguereau, a classical portrayal of nymphs and a satyr."
    ];

    const sconceImage = "Light sconce.png"; 

    // Populate the gallery
    artPieces.forEach((art, index) => {
        const frame = frameImages[index % frameImages.length];
        const description = artDescriptions[index];
        $("#gallery").append(`
            <div class="art-piece">
                <img class="sconce" src="Sconce/${sconceImage}">
                <div class="frame" style="background-image: url('Frames/${frame}');"></div>
                <img class="art-image" src="Art/${art}">
                <div class="info">${description}</div>
            </div>
        `);
    });

    // Click event for each art piece
    $(".art-piece").click(function () {
        // Toggle enlargement for this art piece
        $(this).toggleClass("enlarged");
        $(this).find(".info").toggle();

        // Manage blur on other elements
        if ($(this).hasClass("enlarged")) {
            $(".gallery").addClass("gallery-blur");
            $(".art-piece").not(this).removeClass("enlarged");
            $(".art-piece").not(this).find(".info").hide();
        } else {
            $(".gallery").removeClass("gallery-blur");
        }
    });

    // Remove blur when clicking outside an enlarged art piece
    $(document).click(function (event) {
        if (!$(event.target).closest('.art-piece').length) {
            $(".gallery").removeClass("gallery-blur");
            $(".art-piece").removeClass("enlarged");
            $(".info").hide();
        }
    });
});


