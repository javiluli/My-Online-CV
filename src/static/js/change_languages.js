var arrLang = {
  es: {
    menu__item_link_3: "Iconos SVG",
    menu__item_link_1: "Botones",
    menu__item_link_2: "Ckeckbox's",
    menu__item_link_4: "Galeria de fotos",
    menu__item_link_5: "GitHub",
    text_settings_1: "Ajustes",
    text_settings_2: "Tema oscuro",
    text_settings_3: "Cambiar idioma",
    title_primary: "Tecnico en sistemas microinformáticos y redes",
    pi_subtitle_1: "Datos personales",
    pi_subtitle_2: "Contacto",
    pi_p__b_1: "Nombre: ",
    pi_p__i_1: "Javier",
    pi_p__b_2: "Apellidos: ",
    pi_p__i_2: "Delgado Rodriguez",
    pi_p__b_3: "Edad: ",
    pi_p__i_3: "22 años",
    pi_p__b_4: "Nacionalidad: ",
    pi_p__i_4: "Española",

    pi_subtitle_2: "Contacto",
    pi_p__b_5: "Direccion: ",
    pi_p__i_5: "Leganes (Madrid)",
    pi_p__b_6: "Telefono: ",
    pi_p__i_6: "(+34) 646 65 81 65",
    pi_p__b_7: "E-Mail: ",
    pi_p__i_7: "javidel96@hotmail.es"
  },
  en: {
    menu__item_link_3: "SVG icons",
    menu__item_link_1: "Buttons",
    menu__item_link_2: "Ckeckbox's",
    menu__item_link_4: "Gallery photos",
    menu__item_link_5: "GitHub",
    text_settings_1: "Settings",
    text_settings_2: "Dark theme",
    text_settings_3: "Change language",
    title_primary: "Technician in microcomputer systems and networks",
    pi_subtitle_1: "Personal information",
    pi_subtitle_2: "Contact",
    pi_p__b_1: "Name: ",
    pi_p__i_1: "Javier",
    pi_p__b_2: "Last name: ",
    pi_p__i_2: "Delgado Rodriguez",
    pi_p__b_3: "Age: ",
    pi_p__i_3: "22 years",
    pi_p__b_4: "Nationality: ",
    pi_p__i_4: "Spanish",

    pi_subtitle_2: "Contact",
    pi_p__b_5: "Address: ",
    pi_p__i_5: "Leganes (Madrid)",
    pi_p__b_6: "Phone: ",
    pi_p__i_6: "(+34) 646 65 81 65",
    pi_p__b_7: "E-Mail: ",
    pi_p__i_7: "javidel96@hotmail.es"
  },
  fr: {
    menu__item_link_3: "icônes SVG",
    menu__item_link_1: "Boutons",
    menu__item_link_2: "Ckeckbox's",
    menu__item_link_4: "Galerie de photos",
    menu__item_link_5: "GitHub",
    text_settings_1: "Paramètres",
    text_settings_2: "thème sombre",
    text_settings_3: "Changer de langue",
    title_primary: "Technicien en systèmes et réseaux de micro-ordinateurs",
    pi_subtitle_1: "Informations personnelles",
    pi_subtitle_2: "Contact",
    pi_p__b_1: "Prénom: ",
    pi_p__i_1: "Javier",
    pi_p__b_2: "Nom: ",
    pi_p__i_2: "Delgado Rodriguez",
    pi_p__b_3: "Age: ",
    pi_p__i_3: "22 ans",
    pi_p__b_4: "Nationalité: ",
    pi_p__i_4: "Espagnol",

    pi_subtitle_2: "Contact",
    pi_p__b_5: "Adresse: ",
    pi_p__i_5: "Leganes (Madrid)",
    pi_p__b_6: "Téléphone: ",
    pi_p__i_6: "(+34) 646 65 81 65",
    pi_p__b_7: "E-Mail: ",
    pi_p__i_7: "javidel96@hotmail.es"
  }
};

$(function() {
  $(".translate").click(function() {
    var lang = $(this).attr("id");
    $("p, a, h1, h2, b, i").each(function(index, element) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
  });
});
