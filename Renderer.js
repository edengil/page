"use strict";
const Renderer = function (init) {
    const mainPerson = init.mainPerson;
    const pokemon = init.pokemonSprite;
    const renderFirst = function () {
        $(".friends-container").empty();
        const frindsData = init.frinds;
        const source = $("#frinds-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(frindsData);
        $(".friends-container").append(newHTML);
    };
    const renderPerson = function () {
        $(".user-container").empty();
        const source = $("#mainPerson-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainPerson);
        $(".user-container").append(newHTML);
    };
    const renderKanye = function () {
        $(".quote-container").empty();
        const source = $("#kanye-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainPerson);
        $(".quote-container").append(newHTML);
    };
    const renderPokemon = function () {
        $(".pokemon-container").empty();
        const source = $("#pokemon-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(pokemon);
        $(".pokemon-container").append(newHTML);
    };
    const renderText = function () {
        $(".meat-container").empty();
        const source = $("#text-template").html();
        const template = Handlebars.compile(source);
        const newHTML = template(mainPerson);
        $(".meat-container").append(newHTML);
    };
    renderFirst();
    renderPerson();
    renderKanye();
    renderPokemon();
    renderText();
};
