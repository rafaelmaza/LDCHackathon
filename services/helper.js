'use strict';

angular
	.module('hackathon')
  .factory('helperService', [helperService]);

function helperService() {
  var helper = {};

  helper.regex = {
    CEP: /^[0-9]{5}[-][0-9]{3}/,
    phone: /^[(][0-9]{2}[)] [0-9]{4}[0-9]?[-][0-9]{4}/,
    year: /^[0-9]{4}/
  };

  helper.backendUrl = '#';
	helper.imagesPath = 'assets/images/';
	helper.peopleIconsPath = helper.imagesPath + "people-icons/";

  helper.UFOptions = [
    {
      sigla: "AC",
      name: "Acre"
    },
    {
      sigla: "AL",
      name: "Alagoas"
    },
    {
      sigla: "AM",
      name: "Amazonas"
    },
    {
      sigla: "AP",
      name: "Amapá"
    },
    {
      sigla: "BA",
      name: "Bahia"
    },
    {
      sigla: "CE",
      name: "Ceará"
    },
    {
      sigla: "DF",
      name: "Distrito Federal"
    },
    {
      sigla: "ES",
      name: "Espírito Santo"
    },
    {
      sigla: "GO",
      name: "Goiás"
    },
    {
      sigla: "MA",
      name: "Maranhão"
    },
    {
      sigla: "MG",
      name: "Minas Gerais"
    },
    {
      sigla: "MS",
      name: "Mato Grosso do Sul"
    },
    {
      sigla: "MT",
      name: "Mato Grosso"
    },
    {
      sigla: "PA",
      name: "Pará"
    },
    {
      sigla: "PB",
      name: "Paraíba"
    },
    {
      sigla: "PE",
      name: "Pernambuco"
    },
    {
      sigla: "PI",
      name: "Piauí"
    },
    {
      sigla: "PR",
      name: "Paraná"
    },
    {
      sigla: "RJ",
      name: "Rio de Janeiro"
    },
    {
      sigla: "RN",
      name: "Rio Grande do Norte"
    },
    {
      sigla: "RO",
      name: "Rondônia"
    },
    {
      sigla: "RR",
      name: "Roraima"
    },
    {
      sigla: "RS",
      name: "Rio Grande do Sul"
    },
    {
      sigla: "SC",
      name: "Santa Catarina"
    },
    {
      sigla: "SE",
      name: "Sergipe"
    },
    {
      sigla: "SP",
      name: "São Paulo"
    },
    {
      sigla: "TO",
      name: "Tocantins"
    }
  ];



  /*helper.linkOptions = [
	  /*{
      href: '#/users/login/partners',
      title: 'Profissionais',
			type: 2
    },
    {
      href: '#/users/login/customers',
      title: 'Clientes',
			type: 3
    },
    {
      href: '#/#titi',
      title: 'O que é TITI?',
			type: 0
    },
    {
      href: '#/contact',
      title: 'Contato',
			type: 0
    }
    {
      href: '#/faq',
      title: 'Dúvidas frequentes',
			type: 0
    },
    {
      href: '#/terms-of-use',
      title: 'Termos de uso',
			type: 0
    }
  ];*/

  return helper;
}
