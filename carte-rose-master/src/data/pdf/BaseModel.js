import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const carterosePdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [0, 0, 0, 0],
    defaultStyle: {
      fontSize: 8
    },
    content: [
      // Bloc 1
      { text: e["nomAdAssure"], absolutePosition: { x: 91, y: 217 } },
      { text: e["immatriculation"], absolutePosition: { x: 138, y: 240 } },
      { text: e["marquetype"], absolutePosition: { x: 135, y: 250 } },
      { text: e["assureur"], absolutePosition: { x: 128, y: 265 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 144, y: 302 } },
      { text: e["police"], absolutePosition: { x: 110, y: 327 } },
      { text: e["dateDebut"], absolutePosition: { x: 65, y: 351 } },
      { text: e["dateFin"], absolutePosition: { x: 125, y: 349 } },
      { text: e["usagecat"], absolutePosition: { x: 88, y: 376 } },

      // Bloc 2
      { text: e["nomAdAssure"], absolutePosition: { x: 274, y: 217 } },
      { text: e["immatriculation"], absolutePosition: { x: 313, y: 240 } },
      { text: e["marquetype"], absolutePosition: { x: 308, y: 250 } },
      { text: e["assureur"], absolutePosition: { x: 301, y: 265 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 317, y: 302 } },
      { text: e["police"], absolutePosition: { x: 289, y: 325 } },
      { text: e["dateDebut"], absolutePosition: { x: 240, y: 351 } },
      { text: e["dateFin"], absolutePosition: { x: 319, y: 349 } },
      { text: e["usagecat"], absolutePosition: { x: 260, y: 376 } },

      // Bloc 3
      { text: e["nomAdAssure"], absolutePosition: { x: 451, y: 238 } },
      { text: e["adressAssure"], absolutePosition: { x: 456, y: 269 } },
      { text: e["immatriculation"], absolutePosition: { x: 481, y: 277 } },
      { text: e["NomAdSoCiete"], absolutePosition: { x: 438, y: 302 } },
      { text: e["boitePostale"], absolutePosition: { x: 433, y: 310 } },
      { text: e["usagecat"], absolutePosition: { x: 441, y: 376 } },

      // Bloc 4
      { text: e["dateDebut"], absolutePosition: { x: 608, y: 214 } },
      { text: e["dateFin"], absolutePosition: { x: 688, y: 214 } },
      { text: e["police"], absolutePosition: { x: 679, y: 230} },
      { text: e["dateDebut"], absolutePosition: { x: 648, y: 239 } },
      { text: e["dateFin"], absolutePosition: { x:715, y: 239 } },
      { text: e["marquetype"], absolutePosition: { x: 612, y: 263 } },
      { text: e["NumChassis"], absolutePosition: { x: 631, y:290 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 621, y: 316 } },
    ],
    styles: {
      anotherStyle: {
        alignment: "left",
        margin: [0, 0, 0, 5],
      },
      anotherStyle2: {
        alignment: "center",
        margin: [0, 50, 0, 5],
      },
      anotherStyle3: {
        alignment: "right",
        margin: [0, -30, 0, 5],
      },
    },
  };

  pdfMake.createPdf(docDefinition).open();
};

