import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.pdfMake.vfs;

export const attestationPdf = async (e) => {
  const docDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    pageMargins: [90, 150, 20, 50],
    defaultStyle: {
      fontSize: 8
    },
    content: [
      // Bloc 1
      { text: e["nomAdAssure"], absolutePosition: { x: 118, y: 219 } },
      { text: e["immatriculation"], absolutePosition: { x: 158, y: 246 } },
      { text: e["marquetype"], absolutePosition: { x: 158, y: 259 } },
      { text: e["assureur"], absolutePosition: { x: 146, y: 272 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 163, y: 302 } },
      { text: e["police"], absolutePosition: { x: 141, y: 325 } },
      { text: e["dateDebut"], absolutePosition: { x: 122, y: 349 } },
      { text: e["dateFin"], absolutePosition: { x: 191, y: 349 } },
      { text: e["usagecat"], absolutePosition: { x: 107, y: 375 } },

      // Bloc 2
      { text: e["nomAdAssure"], absolutePosition: { x: 294, y: 219 } },
      { text: e["immatriculation"], absolutePosition: { x: 327, y: 247 } },
      { text: e["marquetype"], absolutePosition: { x: 322, y: 259 } },
      { text: e["assureur"], absolutePosition: { x: 315, y: 272 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 315, y: 303 } },
      { text: e["police"], absolutePosition: { x: 315, y: 329 } },
      { text: e["dateDebut"], absolutePosition: { x: 122, y: 349 } },
      { text: e["dateFin"], absolutePosition: { x: 285, y: 352 } },
      { text: e["usagecat"], absolutePosition: { x: 254, y: 376 } },

      // Bloc 3
      { text: e["nomAdAssure"], absolutePosition: { x: 466, y: 252 } },
      { text: e["immatriculation"], absolutePosition: { x: 465, y: 273 } },
      { text: e["NomAdSoCiete"], absolutePosition: { x: 461, y: 287 } },
      { text: e["NomAdSoCiete"], absolutePosition: { x: 454, y: 311 } },
      { text: e["usagecat"], absolutePosition: { x: 458, y: 378 } },

      // Bloc 4
      { text: e["dateDebut"], absolutePosition: { x: 612, y: 217 } },
      { text: e["dateFin"], absolutePosition: { x: 695, y: 217 } },
      { text: e["police"], absolutePosition: { x: 683, y: 230} },
      { text: e["dateDebut"], absolutePosition: { x: 647, y: 240 } },
      { text: e["dateFin"], absolutePosition: { x: 718, y: 240 } },
      { text: e["marquetype"], absolutePosition: { x: 627, y: 250 } },
      { text: e["NumChassis"], absolutePosition: { x: 636, y: 260 } },
      { text: e["BureauEmetteur"], absolutePosition: { x: 632, y: 320 } },
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

